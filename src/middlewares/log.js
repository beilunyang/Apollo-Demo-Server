import Errors, { CustomError } from '../utils/error';
import resolvers from '../graphql/resolver';

const bindMiddleware = resolver => {
  let queryResolvers = {};

  queryResolvers = Object.keys(resolvers.Query).reduce((result, item) => {
    result[item] = resolver;
    return result;
  }, queryResolvers);

  let mutationResolvers = {};

  mutationResolvers = Object.keys(resolvers.Mutation).reduce((result, item) => {
    result[item] = resolver;
    return result;
  }, mutationResolvers);

  return {
    Query: queryResolvers,
    Mutation: mutationResolvers,
  };
};

const logSession = async (resolve, parent, args, ctx, info) => {
  const ipAddress = ctx.request.ip || ctx.request.connection.remoteAddress;
  const origin = ctx.request.get('origin') || ctx.request.get('referer');
  const session = await ctx.db.createLogSession({
    args,
    ipAddress,
    origin,
    resolver: info.fieldName,
  });

  const argsWithSession = { ...args, sessionId: session.id };
  return await resolve(parent, argsWithSession, ctx, info);
};

const logExecdTime = async (resolve, parent, args, ctx, info) => {
  const now = Date.now();
  const result = await resolve(parent, args, ctx, info);
  const timespan = Date.now() - now;
  console.log(`resolver:${info.fieldName} 执行时间 ${timespan} ms `);
  return result;
};

export const logExecdTimeMiddleware = bindMiddleware(logExecdTime);

export const sessionMiddleware = bindMiddleware(logSession);

export const errorMiddleware = async (resolve, root, args, context, info) => {
  try {
    const result = await resolve(root, args, context, info);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (err) {
    let errInfo = {
      resolver: info.fieldName,
    };
    if (err.isCustomError) {
      errInfo = {
        ...errInfo,
        errorMsg: err.msg,
        errorType: err.name,
        errorCode: err.code,
        errorArgs: { ...err.args, stack: err.stack },
      };
    } else {
      errInfo = {
        ...errInfo,
        errorCode: 400,
        errorMsg: err.messgae,
        errorArgs: {
          stack: err.stack,
        },
      };
    }
    await context.db.createLogError({
      ...errInfo,
      args: {
        root: root,
        ...args,
      },
    });
    throw err;
  }
};
