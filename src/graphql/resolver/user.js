import axios from 'axios';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import uuid from 'uuid/v4';
import { sign } from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';
import { withFilter } from 'graphql-subscriptions';
import { isAuthenticated, isAdmin } from '../../middlewares';
import { checkUserStatus } from '../../utils';
import { sha512, genRandomString, aesDecrypt, sha1 } from '../../utils/crypto';
import { CodeType, UserRole } from '../../enum';
import config from '../../config';
import Errors, { CustomError } from '../../utils/error';
import { forwardTo } from 'prisma-binding';

const queryUserTokenInfo = `
{
  id
  userName
  childName
  userRole
  phone
  userStatus
  userRole
  isChildAccount
  salt
  password
  childAccountForbidden
  childAccountDeleted
  allowEdit
  expiredAt
  parentAccount{
    id
    userName
  }
}
`;

const getUserByPhone = async (ctx, phone) => {
  const where = {
    phone,
  };
  const users = await ctx.prisma.query.users(
    {
      first: 1,
      where,
    },
    queryUserTokenInfo
  );
  return users.length > 0 ? users[0] : null;
};

const createUserRefreshToken = async (ctx, userId) => {
  const result = await ctx.db.createUserRefreshToken({
    expiredAt: moment()
      .add(2, 'M')
      .toISOString(),
    refreshToken: uuid(),
    owner: {
      connect: {
        id: userId,
      },
    },
  });
  return result.refreshToken;
};

const getLastUnusedVerificationCode = async (ctx, { phone, codeType, code }) => {
  const where = {
    codeType,
    phone,
    expiredAt_gt: moment().toISOString(),
  };
  if (code) {
    where.code = code;
  }
  const validCodes = await ctx.db.verificationCodes({
    first: 1,
    where,
    orderBy: 'expiredAt_DESC',
  });
  return validCodes.length > 0 ? validCodes[0] : null;
};

const expiredVerificationCode = async (ctx, id) => {
  await ctx.db.updateVerificationCode({
    data: {
      expiredAt: moment()
        .add(-5, 'm')
        .toISOString(),
    },
    where: {
      id,
    },
  });
};

const signUser = async ({ user, expires, refreshToken }) => {
  const expiresIn = expires || 60 * 60 * 24 * 15; // days
  const token = sign({ user }, config.jwt.secret, {
    expiresIn,
  });
  return {
    access_token: token,
    refresh_token: refreshToken,
    expires_in: expiresIn,
    user_id: user.id,
    user_name: user.isChildAccount
      ? user.parentAccount.userName + '-' + user.childName
      : user.userName,
    user_role: getUserRole(user.userRole),
    is_child_account: user.isChildAccount,
    avatar: user.avatar,
    allow_edit: user.allowEdit,
  };
};

const getUserRole = userRole => {
  switch (userRole) {
    case UserRole.Admin:
      return 'admin';
    case UserRole.Normal:
      return 'normal';
    case UserRole.VIP:
      return 'vip';
    default:
      return 'guest';
  }
};

export default {
  Query: {
    me: combineResolvers(isAuthenticated, async (root, data, ctx) => {
      return await ctx.db.user({
        id: ctx.user.id,
      });
    }),
    usersConnection: combineResolvers(isAuthenticated, async (root, data, ctx, info) => {
      const users = await ctx.prisma.query.usersConnection(data, info);
      return users;
    }),
    childAccountsConnection: combineResolvers(isAuthenticated, async (root, data, ctx, info) => {
      const { where = {}, ...condition } = data;
      const users = await ctx.prisma.query.usersConnection(
        {
          where: {
            childAccountDeleted: false,
            ...where,
            parentAccount: {
              id: ctx.user.id,
            },
          },
          ...condition,
        },
        info
      );
      return users;
    }),
    checkToken: combineResolvers(isAuthenticated, async (root, data, ctx) => {
      return true;
    }),
  },
  Mutation: {
    createVerificationCode: async (root, { phone, codeType }, ctx) => {
      if (codeType === CodeType.Register) {
        const userIsRegistered = await getUserByPhone(ctx, phone);
        if (userIsRegistered) {
          throw new CustomError(Errors.VerificationCode.HasRegisterd);
        }
      }
      const expiredAt = moment()
        .add(5, 'm')
        .toISOString();
      const code = Math.random()
        .toString()
        .slice(-6);
      const lastUnUsedCode = await getLastUnusedVerificationCode(ctx, {
        phone,
        codeType,
      });
      console.log('lastUnUsedCode', lastUnUsedCode);
      if (lastUnUsedCode) return lastUnUsedCode;
      const result = await ctx.db.createVerificationCode({
        phone,
        code,
        codeType,
        expiredAt,
      });
      console.log('createVerificationCode', code);
      return true;
    },

    register: async (root, { phone, code, password }, ctx) => {
      const lastUnUsedCode = await getLastUnusedVerificationCode(ctx, {
        phone,
        code,
        codeType: CodeType.Register,
      });
      if (!lastUnUsedCode) {
        throw new CustomError(Errors.VerificationCode.Register);
      }
      const userIsRegistered = await getUserByPhone(ctx, phone);
      if (userIsRegistered) {
        throw new CustomError(Errors.User.HasRegisterd);
      }
      const salt = genRandomString();
      const hashPassword = sha512(password, salt);

      // 针对具体的场景，管不了通用了，直接写
      const user = await ctx.prisma.mutation.createUser(
        {
          data: {
            phone,
            userName: phone,
            userRole: phone == '18321841288' ? UserRole.Admin : UserRole.Normal,
            salt,
            password: hashPassword,
            allowEdit: true,
            expiredAt: moment()
              .add('d', 7)
              .toISOString(),
          },
        },
        queryUserTokenInfo
      );
      await expiredVerificationCode(ctx, lastUnUsedCode.id);
      const refreshToken = await createUserRefreshToken(ctx, user.id);
      return signUser({
        user,
        refreshToken,
      });
    },
    login: async (root, { phone, password }, ctx) => {
      let queryCondition = {};
      const isChildLogin = phone.indexOf('-') > -1;
      if (isChildLogin) {
        const loginPhone = phone.split('-')[0];
        const childName = phone.split('-')[1];
        queryCondition = {
          first: 1,
          where: {
            childName,
            parentAccount: {
              phone: loginPhone,
            },
          },
        };
      } else {
        queryCondition = {
          first: 1,
          where: {
            phone,
          },
        };
      }
      const queryUsers = await ctx.prisma.query.users(queryCondition, queryUserTokenInfo);
      let user = queryUsers.length > 0 ? queryUsers[0] : null;
      if (!user) {
        throw new CustomError(Errors.User.UserNotFound);
      }
      checkUserStatus(user);
      const hashPassword = sha512(password, user.salt);
      if (user.password !== hashPassword) {
        throw new CustomError(Errors.User.PasswordError);
      }
      const refreshToken = await createUserRefreshToken(ctx, user.id);
      ctx.pubsub.publish('USER_LOGIN', user.id);
      return signUser({
        user,
        refreshToken,
      });
    },
    forgetPassword: async (root, { phone, code, password }, ctx) => {
      const lastUnUsedCode = await getLastUnusedVerificationCode(ctx, {
        phone,
        code,
        codeType: CodeType.ForgetPassword,
      });
      if (!lastUnUsedCode) {
        throw new CustomError(Errors.VerificationCode.ForgetPassword);
      }
      const user = await getUserByPhone(ctx, phone);

      if (!user) {
        throw new CustomError(Errors.User.UserNotFound);
      }
      checkUserStatus(user);
      const salt = genRandomString();
      const hashPassword = sha512(password, salt);
      const updatedUser = await ctx.prisma.mutation.updateUser(
        {
          where: {
            id: user.id,
          },
          data: {
            salt,
            password: hashPassword,
          },
        },
        queryUserTokenInfo
      );
      console.log(updatedUser);
      await expiredVerificationCode(ctx, lastUnUsedCode.id);

      const refreshToken = await createUserRefreshToken(ctx, user.id);
      return signUser({
        user,
        refreshToken,
      });
    },
  },
  Subscription: {
    login: {
      resolve: (root, data, ctx) => {
        console.log('USER_LOGIN', root, data);
        return root;
      },
      // subscribe: (root, data, ctx) => ctx.pubsub.asyncIterator('USER_LOGIN'),
      subscribe: withFilter(
        (root, data, ctx) => ctx.pubsub.asyncIterator('USER_LOGIN'),
        (root, { userId }) => {
          console.log('withFilter', root, userId);
          return root === userId;
        }
      ),
    },
  },
  User: {
    childAccounts: combineResolvers(isAuthenticated, async (root, data, ctx) => {
      const { where = {}, ...condition } = data;
      const users = await ctx.prisma.query.users({
        where: {
          ...where,
          parentAccount: {
            id: root.id,
          },
        },
        ...condition,
      });
      return users;
    }),
  },
};
