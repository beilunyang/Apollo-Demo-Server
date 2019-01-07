import { checkUserStatus, checkUserIsAdmin } from '../utils';
import Errors, { CustomError } from '../utils/error';
import { UserRole, UserStatus } from '../enum';

export const isAuthenticated = (root, args, ctx) => {
  if (!ctx.user) {
    throw new CustomError(Errors.User.UserInvalidToken);
  }
  checkUserStatus(ctx.user);
};

export const isAdmin = (root, args, ctx) => {
  if (!ctx.user) {
    return new CustomError(Errors.User.UserInvalidToken);
  }
  checkUserStatus(ctx.user);
  checkUserIsAdmin(ctx.user);
};
