const Errors = {
  User: {
    UserInvalidToken: {
      name: 'User.UserInvalidToken',
      message: '无效的用户令牌',
      code: 400001,
    },
    UserNotFound: {
      name: 'User.UserNotFound',
      message: '用户不存在',
      code: 400002,
    },
    UserDeleted: {
      name: 'User.UserDeleted',
      message: '该用户已经被删除',
      code: 400003,
    },
    UserForbidden: {
      name: 'User.UserForbidden',
      message: '该用户已经被禁用',
      code: 400004,
    },
    NeedAdminRole: {
      name: 'User.NeedAdminRole',
      message: '需要管理员权限',
      code: 400005,
    },
    HasRegisterd: {
      name: 'User.HasRegisterd',
      message: '该手机号码已经注册',
      needHandle: true,
      code: 400006,
    },

    PasswordError: {
      name: 'User.PasswordError',
      message: '用户名或密码错误',
      code: 400007,
    },

    NoBindPhoneCannotCreateChildAccount: {
      name: 'User.NoBindPhoneCannotCreateChildAccount',
      message: '请先绑定手机才能创建子账号',
      code: 400008,
    },
    HasCreateTheChildNameAccount: {
      name: 'User.HasCreateTheChildNameAccount',
      message: '已经存在相同名称的子账号',
      code: 400009,
    },
    UserHasNoPermission: {
      name: 'User.UserHasNoPermission',
      message: '该用户未设置权限',
      code: 400010,
    },
    ChildAccountHasBeenDeleted: {
      name: 'User.ChildAccountHasBeenDeleted',
      message: '子账号已经被删除',
      code: 400011,
    },
    ChildAccountHasBeenForbidden: {
      name: 'User.ChildAccountHasBeenForbidden',
      message: '子账号已经被禁止登陆',
      code: 400012,
    },
    RefreshTokenInValid: {
      name: 'User.RefreshTokenInValid',
      message: '刷新令牌无效，或者已过期',
      code: 400013,
    },
    ChildAccountCannotCreateChildAccount: {
      name: 'User.ChildAccountCannotCreateChildAccount',
      message: '子账号不能创建子账号',
      code: 400014,
    },
    AccountExpiredAtIsNull: {
      name: 'User.AccountExpiredAtIsNull',
      message: '账号未充值，请充值后登录',
      code: 400015,
    },
    AccountExpired: {
      name: 'User.AccountExpired',
      message: '账号已过期',
      code: 400016,
    },
    ChildAccountNotFound: {
      name: 'User.ChildAccountNotFound',
      message: '子账户不存在',
      code: 400017,
    },
  },

  VerificationCode: {
    Login: {
      name: 'VerificationCode.Login',
      message: '登录验证码错误或已过期',
      code: 400101,
    },
    Register: {
      name: 'VerificationCode.Register',
      message: '登录验证码错误或已过期',
      code: 400111,
    },
    SetPassword: {
      name: 'VerificationCode.Login',
      message: '验证码错误或已过期',
      code: 400102,
    },
    ForgetPassword: {
      name: 'VerificationCode.ForgetPassword',
      message: '验证码错误或已过期',
      code: 400103,
    },

    HasRegisterd: {
      name: 'VerificationCode.HasRegisterd',
      message: '该手机已经注册',
      code: 400150,
      needHandle: true,
    },
  },
};

export const formatError = err => {
  if (err.originalError) {
    const {
      name,
      code,
      message,
      isCustomError,
      needHandle, // 是否需要单独处理错误
    } = err.originalError;
    return isCustomError
      ? {
          name,
          code,
          message,
          isCustomError,
          needHandle,
        }
      : err;
  }
  return err;
};

export class CustomError extends Error {
  constructor(msg, ...args) {
    const isObjectError = typeof msg === 'object';
    const errorMsg = isObjectError ? msg.message : msg;
    super(errorMsg);
    if (isObjectError) {
      this.isCustomError = true;
      this.name = msg.name;
      this.code = msg.code || 400;
      this.msg = msg.message;
      this.needHandle = msg.needHandle;
      this.args = { ...args };
    }
    Error.captureStackTrace(this, CustomError);
  }
}

export default Errors;
