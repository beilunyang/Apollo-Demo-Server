import { verify } from 'jsonwebtoken';
import moment from 'moment';
import config from '../config';
import { UserRole, UserStatus } from '../enum';
import Errors, { CustomError } from './error';

export const getUser = req => {
  let user = null;
  try {
    const authorization = req.request.get('Authorization');
    if (authorization) {
      const token = authorization.replace('Bearer ', '');
      const verifiedToken = verify(token, config.jwt.secret);
      user = verifiedToken && verifiedToken.user;
    }
  } catch (e) {
  } finally {
    return user;
  }
};

export const checkUserStatus = user => {
  if (user.userStatus === UserStatus.Deleted) {
    throw new CustomError(Errors.User.UserDeleted);
  } else if (user.userStatus === UserStatus.Forbidden) {
    throw new CustomError(Errors.User.UserForbidden);
  } else if (user.childAccountDeleted) {
    throw new CustomError(Errors.User.ChildAccountHasBeenDeleted);
  } else if (user.childAccountForbidden) {
    throw new CustomError(Errors.User.ChildAccountHasBeenForbidden);
  } else if (!user.expiredAt) {
    throw new CustomError(Errors.User.AccountExpiredAtIsNull);
  } else if (moment(user.expiredAt).isBefore(moment().toISOString())) {
    throw new CustomError(Errors.User.AccountExpired);
  }
};

export const checkUserIsAdmin = user => {
  if (user.userRole !== UserRole.Admin) {
    throw new CustomError(Errors.User.NeedAdminRole);
  }
};

/**
 * 返回分页模型
 *
 * @export
 * @param {*} {count,rows}
 * @param {*} pageIndex
 * @param {*} pageSize
 * @returns
 */
export function pageModel({ count, rows }, pageIndex, pageSize) {
  const totalPages = Math.ceil(count / pageSize);
  return {
    pageIndex,
    pageSize,
    totalCount: count,
    totalPages,
    hasMore: pageIndex + 1 < totalPages,
    rows: rows,
  };
}

export const formatResponse = res => {
  let code = 0;
  let message = '';
  if (res.errors && res.errors.length > 0) {
    // 失败的请求默认
    code = 400;
    message = '错误的请求';
    // 有自定义Code的错误
    const customErrors = res.errors.filter(e => e.code > 0);
    // 只设置第一个错误的状态和消息
    if (customErrors.length > 0) {
      code = customErrors[0].code;
      message = customErrors[0].message;
    }
  }

  return {
    ...res,
    code,
    message,
    now: Date.now(),
  };
};
