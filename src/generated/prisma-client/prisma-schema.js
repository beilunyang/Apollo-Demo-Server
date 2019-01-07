module.exports = {
        typeDefs: /* GraphQL */ `type AggregateLogError {
  count: Int!
}

type AggregateLogSession {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserRefreshToken {
  count: Int!
}

type AggregateVerificationCode {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Json

type LogError {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  args: Json
  resolver: String
  errorMsg: String
  errorType: String
  errorCode: Int
  errorArgs: Json
  logSession: LogSession
}

type LogErrorConnection {
  pageInfo: PageInfo!
  edges: [LogErrorEdge]!
  aggregate: AggregateLogError!
}

input LogErrorCreateInput {
  args: Json
  resolver: String
  errorMsg: String
  errorType: String
  errorCode: Int
  errorArgs: Json
  logSession: LogSessionCreateOneWithoutLogErrorInput
}

input LogErrorCreateOneWithoutLogSessionInput {
  create: LogErrorCreateWithoutLogSessionInput
  connect: LogErrorWhereUniqueInput
}

input LogErrorCreateWithoutLogSessionInput {
  args: Json
  resolver: String
  errorMsg: String
  errorType: String
  errorCode: Int
  errorArgs: Json
}

type LogErrorEdge {
  node: LogError!
  cursor: String!
}

enum LogErrorOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  args_ASC
  args_DESC
  resolver_ASC
  resolver_DESC
  errorMsg_ASC
  errorMsg_DESC
  errorType_ASC
  errorType_DESC
  errorCode_ASC
  errorCode_DESC
  errorArgs_ASC
  errorArgs_DESC
}

type LogErrorPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  args: Json
  resolver: String
  errorMsg: String
  errorType: String
  errorCode: Int
  errorArgs: Json
}

type LogErrorSubscriptionPayload {
  mutation: MutationType!
  node: LogError
  updatedFields: [String!]
  previousValues: LogErrorPreviousValues
}

input LogErrorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LogErrorWhereInput
  AND: [LogErrorSubscriptionWhereInput!]
  OR: [LogErrorSubscriptionWhereInput!]
  NOT: [LogErrorSubscriptionWhereInput!]
}

input LogErrorUpdateInput {
  args: Json
  resolver: String
  errorMsg: String
  errorType: String
  errorCode: Int
  errorArgs: Json
  logSession: LogSessionUpdateOneWithoutLogErrorInput
}

input LogErrorUpdateManyMutationInput {
  args: Json
  resolver: String
  errorMsg: String
  errorType: String
  errorCode: Int
  errorArgs: Json
}

input LogErrorUpdateOneWithoutLogSessionInput {
  create: LogErrorCreateWithoutLogSessionInput
  update: LogErrorUpdateWithoutLogSessionDataInput
  upsert: LogErrorUpsertWithoutLogSessionInput
  delete: Boolean
  disconnect: Boolean
  connect: LogErrorWhereUniqueInput
}

input LogErrorUpdateWithoutLogSessionDataInput {
  args: Json
  resolver: String
  errorMsg: String
  errorType: String
  errorCode: Int
  errorArgs: Json
}

input LogErrorUpsertWithoutLogSessionInput {
  update: LogErrorUpdateWithoutLogSessionDataInput!
  create: LogErrorCreateWithoutLogSessionInput!
}

input LogErrorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  resolver: String
  resolver_not: String
  resolver_in: [String!]
  resolver_not_in: [String!]
  resolver_lt: String
  resolver_lte: String
  resolver_gt: String
  resolver_gte: String
  resolver_contains: String
  resolver_not_contains: String
  resolver_starts_with: String
  resolver_not_starts_with: String
  resolver_ends_with: String
  resolver_not_ends_with: String
  errorMsg: String
  errorMsg_not: String
  errorMsg_in: [String!]
  errorMsg_not_in: [String!]
  errorMsg_lt: String
  errorMsg_lte: String
  errorMsg_gt: String
  errorMsg_gte: String
  errorMsg_contains: String
  errorMsg_not_contains: String
  errorMsg_starts_with: String
  errorMsg_not_starts_with: String
  errorMsg_ends_with: String
  errorMsg_not_ends_with: String
  errorType: String
  errorType_not: String
  errorType_in: [String!]
  errorType_not_in: [String!]
  errorType_lt: String
  errorType_lte: String
  errorType_gt: String
  errorType_gte: String
  errorType_contains: String
  errorType_not_contains: String
  errorType_starts_with: String
  errorType_not_starts_with: String
  errorType_ends_with: String
  errorType_not_ends_with: String
  errorCode: Int
  errorCode_not: Int
  errorCode_in: [Int!]
  errorCode_not_in: [Int!]
  errorCode_lt: Int
  errorCode_lte: Int
  errorCode_gt: Int
  errorCode_gte: Int
  logSession: LogSessionWhereInput
  AND: [LogErrorWhereInput!]
  OR: [LogErrorWhereInput!]
  NOT: [LogErrorWhereInput!]
}

input LogErrorWhereUniqueInput {
  id: ID
}

type LogSession {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  args: Json
  ipAddress: String
  logError: LogError
  origin: String!
  resolver: String!
}

type LogSessionConnection {
  pageInfo: PageInfo!
  edges: [LogSessionEdge]!
  aggregate: AggregateLogSession!
}

input LogSessionCreateInput {
  args: Json
  ipAddress: String
  logError: LogErrorCreateOneWithoutLogSessionInput
  origin: String!
  resolver: String!
}

input LogSessionCreateOneWithoutLogErrorInput {
  create: LogSessionCreateWithoutLogErrorInput
  connect: LogSessionWhereUniqueInput
}

input LogSessionCreateWithoutLogErrorInput {
  args: Json
  ipAddress: String
  origin: String!
  resolver: String!
}

type LogSessionEdge {
  node: LogSession!
  cursor: String!
}

enum LogSessionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  args_ASC
  args_DESC
  ipAddress_ASC
  ipAddress_DESC
  origin_ASC
  origin_DESC
  resolver_ASC
  resolver_DESC
}

type LogSessionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  args: Json
  ipAddress: String
  origin: String!
  resolver: String!
}

type LogSessionSubscriptionPayload {
  mutation: MutationType!
  node: LogSession
  updatedFields: [String!]
  previousValues: LogSessionPreviousValues
}

input LogSessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LogSessionWhereInput
  AND: [LogSessionSubscriptionWhereInput!]
  OR: [LogSessionSubscriptionWhereInput!]
  NOT: [LogSessionSubscriptionWhereInput!]
}

input LogSessionUpdateInput {
  args: Json
  ipAddress: String
  logError: LogErrorUpdateOneWithoutLogSessionInput
  origin: String
  resolver: String
}

input LogSessionUpdateManyMutationInput {
  args: Json
  ipAddress: String
  origin: String
  resolver: String
}

input LogSessionUpdateOneWithoutLogErrorInput {
  create: LogSessionCreateWithoutLogErrorInput
  update: LogSessionUpdateWithoutLogErrorDataInput
  upsert: LogSessionUpsertWithoutLogErrorInput
  delete: Boolean
  disconnect: Boolean
  connect: LogSessionWhereUniqueInput
}

input LogSessionUpdateWithoutLogErrorDataInput {
  args: Json
  ipAddress: String
  origin: String
  resolver: String
}

input LogSessionUpsertWithoutLogErrorInput {
  update: LogSessionUpdateWithoutLogErrorDataInput!
  create: LogSessionCreateWithoutLogErrorInput!
}

input LogSessionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  ipAddress: String
  ipAddress_not: String
  ipAddress_in: [String!]
  ipAddress_not_in: [String!]
  ipAddress_lt: String
  ipAddress_lte: String
  ipAddress_gt: String
  ipAddress_gte: String
  ipAddress_contains: String
  ipAddress_not_contains: String
  ipAddress_starts_with: String
  ipAddress_not_starts_with: String
  ipAddress_ends_with: String
  ipAddress_not_ends_with: String
  logError: LogErrorWhereInput
  origin: String
  origin_not: String
  origin_in: [String!]
  origin_not_in: [String!]
  origin_lt: String
  origin_lte: String
  origin_gt: String
  origin_gte: String
  origin_contains: String
  origin_not_contains: String
  origin_starts_with: String
  origin_not_starts_with: String
  origin_ends_with: String
  origin_not_ends_with: String
  resolver: String
  resolver_not: String
  resolver_in: [String!]
  resolver_not_in: [String!]
  resolver_lt: String
  resolver_lte: String
  resolver_gt: String
  resolver_gte: String
  resolver_contains: String
  resolver_not_contains: String
  resolver_starts_with: String
  resolver_not_starts_with: String
  resolver_ends_with: String
  resolver_not_ends_with: String
  AND: [LogSessionWhereInput!]
  OR: [LogSessionWhereInput!]
  NOT: [LogSessionWhereInput!]
}

input LogSessionWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createLogError(data: LogErrorCreateInput!): LogError!
  updateLogError(data: LogErrorUpdateInput!, where: LogErrorWhereUniqueInput!): LogError
  updateManyLogErrors(data: LogErrorUpdateManyMutationInput!, where: LogErrorWhereInput): BatchPayload!
  upsertLogError(where: LogErrorWhereUniqueInput!, create: LogErrorCreateInput!, update: LogErrorUpdateInput!): LogError!
  deleteLogError(where: LogErrorWhereUniqueInput!): LogError
  deleteManyLogErrors(where: LogErrorWhereInput): BatchPayload!
  createLogSession(data: LogSessionCreateInput!): LogSession!
  updateLogSession(data: LogSessionUpdateInput!, where: LogSessionWhereUniqueInput!): LogSession
  updateManyLogSessions(data: LogSessionUpdateManyMutationInput!, where: LogSessionWhereInput): BatchPayload!
  upsertLogSession(where: LogSessionWhereUniqueInput!, create: LogSessionCreateInput!, update: LogSessionUpdateInput!): LogSession!
  deleteLogSession(where: LogSessionWhereUniqueInput!): LogSession
  deleteManyLogSessions(where: LogSessionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserRefreshToken(data: UserRefreshTokenCreateInput!): UserRefreshToken!
  updateUserRefreshToken(data: UserRefreshTokenUpdateInput!, where: UserRefreshTokenWhereUniqueInput!): UserRefreshToken
  updateManyUserRefreshTokens(data: UserRefreshTokenUpdateManyMutationInput!, where: UserRefreshTokenWhereInput): BatchPayload!
  upsertUserRefreshToken(where: UserRefreshTokenWhereUniqueInput!, create: UserRefreshTokenCreateInput!, update: UserRefreshTokenUpdateInput!): UserRefreshToken!
  deleteUserRefreshToken(where: UserRefreshTokenWhereUniqueInput!): UserRefreshToken
  deleteManyUserRefreshTokens(where: UserRefreshTokenWhereInput): BatchPayload!
  createVerificationCode(data: VerificationCodeCreateInput!): VerificationCode!
  updateVerificationCode(data: VerificationCodeUpdateInput!, where: VerificationCodeWhereUniqueInput!): VerificationCode
  updateManyVerificationCodes(data: VerificationCodeUpdateManyMutationInput!, where: VerificationCodeWhereInput): BatchPayload!
  upsertVerificationCode(where: VerificationCodeWhereUniqueInput!, create: VerificationCodeCreateInput!, update: VerificationCodeUpdateInput!): VerificationCode!
  deleteVerificationCode(where: VerificationCodeWhereUniqueInput!): VerificationCode
  deleteManyVerificationCodes(where: VerificationCodeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  logError(where: LogErrorWhereUniqueInput!): LogError
  logErrors(where: LogErrorWhereInput, orderBy: LogErrorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LogError]!
  logErrorsConnection(where: LogErrorWhereInput, orderBy: LogErrorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogErrorConnection!
  logSession(where: LogSessionWhereUniqueInput!): LogSession
  logSessions(where: LogSessionWhereInput, orderBy: LogSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LogSession]!
  logSessionsConnection(where: LogSessionWhereInput, orderBy: LogSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogSessionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userRefreshToken(where: UserRefreshTokenWhereUniqueInput!): UserRefreshToken
  userRefreshTokens(where: UserRefreshTokenWhereInput, orderBy: UserRefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRefreshToken]!
  userRefreshTokensConnection(where: UserRefreshTokenWhereInput, orderBy: UserRefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRefreshTokenConnection!
  verificationCode(where: VerificationCodeWhereUniqueInput!): VerificationCode
  verificationCodes(where: VerificationCodeWhereInput, orderBy: VerificationCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [VerificationCode]!
  verificationCodesConnection(where: VerificationCodeWhereInput, orderBy: VerificationCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VerificationCodeConnection!
  node(id: ID!): Node
}

type Subscription {
  logError(where: LogErrorSubscriptionWhereInput): LogErrorSubscriptionPayload
  logSession(where: LogSessionSubscriptionWhereInput): LogSessionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userRefreshToken(where: UserRefreshTokenSubscriptionWhereInput): UserRefreshTokenSubscriptionPayload
  verificationCode(where: VerificationCodeSubscriptionWhereInput): VerificationCodeSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  childAccounts(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  parentAccount: User
  refreshTokens(where: UserRefreshTokenWhereInput, orderBy: UserRefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRefreshToken!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  childAccounts: UserCreateManyWithoutParentAccountInput
  parentAccount: UserCreateOneWithoutChildAccountsInput
  refreshTokens: UserRefreshTokenCreateManyWithoutOwnerInput
}

input UserCreateManyWithoutParentAccountInput {
  create: [UserCreateWithoutParentAccountInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutChildAccountsInput {
  create: UserCreateWithoutChildAccountsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRefreshTokensInput {
  create: UserCreateWithoutRefreshTokensInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChildAccountsInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  parentAccount: UserCreateOneWithoutChildAccountsInput
  refreshTokens: UserRefreshTokenCreateManyWithoutOwnerInput
}

input UserCreateWithoutParentAccountInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  childAccounts: UserCreateManyWithoutParentAccountInput
  refreshTokens: UserRefreshTokenCreateManyWithoutOwnerInput
}

input UserCreateWithoutRefreshTokensInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  childAccounts: UserCreateManyWithoutParentAccountInput
  parentAccount: UserCreateOneWithoutChildAccountsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  phone_ASC
  phone_DESC
  password_ASC
  password_DESC
  salt_ASC
  salt_DESC
  userName_ASC
  userName_DESC
  nickName_ASC
  nickName_DESC
  childName_ASC
  childName_DESC
  openId_ASC
  openId_DESC
  unionId_ASC
  unionId_DESC
  birthday_ASC
  birthday_DESC
  avatar_ASC
  avatar_DESC
  country_ASC
  country_DESC
  province_ASC
  province_DESC
  city_ASC
  city_DESC
  language_ASC
  language_DESC
  sessionKey_ASC
  sessionKey_DESC
  remark_ASC
  remark_DESC
  gender_ASC
  gender_DESC
  deletedAt_ASC
  deletedAt_DESC
  forbiddenAt_ASC
  forbiddenAt_DESC
  userStatus_ASC
  userStatus_DESC
  userRole_ASC
  userRole_DESC
  isChildAccount_ASC
  isChildAccount_DESC
  childAccountForbiddenAt_ASC
  childAccountForbiddenAt_DESC
  childAccountForbidden_ASC
  childAccountForbidden_DESC
  childAccountDeletedAt_ASC
  childAccountDeletedAt_DESC
  childAccountDeleted_ASC
  childAccountDeleted_DESC
  allowEdit_ASC
  allowEdit_DESC
  expiredAt_ASC
  expiredAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
}

type UserRefreshToken {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  expiredAt: DateTime!
  refreshToken: String!
  owner: User!
}

type UserRefreshTokenConnection {
  pageInfo: PageInfo!
  edges: [UserRefreshTokenEdge]!
  aggregate: AggregateUserRefreshToken!
}

input UserRefreshTokenCreateInput {
  expiredAt: DateTime!
  refreshToken: String!
  owner: UserCreateOneWithoutRefreshTokensInput!
}

input UserRefreshTokenCreateManyWithoutOwnerInput {
  create: [UserRefreshTokenCreateWithoutOwnerInput!]
  connect: [UserRefreshTokenWhereUniqueInput!]
}

input UserRefreshTokenCreateWithoutOwnerInput {
  expiredAt: DateTime!
  refreshToken: String!
}

type UserRefreshTokenEdge {
  node: UserRefreshToken!
  cursor: String!
}

enum UserRefreshTokenOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  expiredAt_ASC
  expiredAt_DESC
  refreshToken_ASC
  refreshToken_DESC
}

type UserRefreshTokenPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  expiredAt: DateTime!
  refreshToken: String!
}

input UserRefreshTokenScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  expiredAt: DateTime
  expiredAt_not: DateTime
  expiredAt_in: [DateTime!]
  expiredAt_not_in: [DateTime!]
  expiredAt_lt: DateTime
  expiredAt_lte: DateTime
  expiredAt_gt: DateTime
  expiredAt_gte: DateTime
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  AND: [UserRefreshTokenScalarWhereInput!]
  OR: [UserRefreshTokenScalarWhereInput!]
  NOT: [UserRefreshTokenScalarWhereInput!]
}

type UserRefreshTokenSubscriptionPayload {
  mutation: MutationType!
  node: UserRefreshToken
  updatedFields: [String!]
  previousValues: UserRefreshTokenPreviousValues
}

input UserRefreshTokenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserRefreshTokenWhereInput
  AND: [UserRefreshTokenSubscriptionWhereInput!]
  OR: [UserRefreshTokenSubscriptionWhereInput!]
  NOT: [UserRefreshTokenSubscriptionWhereInput!]
}

input UserRefreshTokenUpdateInput {
  expiredAt: DateTime
  refreshToken: String
  owner: UserUpdateOneRequiredWithoutRefreshTokensInput
}

input UserRefreshTokenUpdateManyDataInput {
  expiredAt: DateTime
  refreshToken: String
}

input UserRefreshTokenUpdateManyMutationInput {
  expiredAt: DateTime
  refreshToken: String
}

input UserRefreshTokenUpdateManyWithoutOwnerInput {
  create: [UserRefreshTokenCreateWithoutOwnerInput!]
  delete: [UserRefreshTokenWhereUniqueInput!]
  connect: [UserRefreshTokenWhereUniqueInput!]
  disconnect: [UserRefreshTokenWhereUniqueInput!]
  update: [UserRefreshTokenUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [UserRefreshTokenUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [UserRefreshTokenScalarWhereInput!]
  updateMany: [UserRefreshTokenUpdateManyWithWhereNestedInput!]
}

input UserRefreshTokenUpdateManyWithWhereNestedInput {
  where: UserRefreshTokenScalarWhereInput!
  data: UserRefreshTokenUpdateManyDataInput!
}

input UserRefreshTokenUpdateWithoutOwnerDataInput {
  expiredAt: DateTime
  refreshToken: String
}

input UserRefreshTokenUpdateWithWhereUniqueWithoutOwnerInput {
  where: UserRefreshTokenWhereUniqueInput!
  data: UserRefreshTokenUpdateWithoutOwnerDataInput!
}

input UserRefreshTokenUpsertWithWhereUniqueWithoutOwnerInput {
  where: UserRefreshTokenWhereUniqueInput!
  update: UserRefreshTokenUpdateWithoutOwnerDataInput!
  create: UserRefreshTokenCreateWithoutOwnerInput!
}

input UserRefreshTokenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  expiredAt: DateTime
  expiredAt_not: DateTime
  expiredAt_in: [DateTime!]
  expiredAt_not_in: [DateTime!]
  expiredAt_lt: DateTime
  expiredAt_lte: DateTime
  expiredAt_gt: DateTime
  expiredAt_gte: DateTime
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  owner: UserWhereInput
  AND: [UserRefreshTokenWhereInput!]
  OR: [UserRefreshTokenWhereInput!]
  NOT: [UserRefreshTokenWhereInput!]
}

input UserRefreshTokenWhereUniqueInput {
  id: ID
  refreshToken: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  salt: String
  salt_not: String
  salt_in: [String!]
  salt_not_in: [String!]
  salt_lt: String
  salt_lte: String
  salt_gt: String
  salt_gte: String
  salt_contains: String
  salt_not_contains: String
  salt_starts_with: String
  salt_not_starts_with: String
  salt_ends_with: String
  salt_not_ends_with: String
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  nickName: String
  nickName_not: String
  nickName_in: [String!]
  nickName_not_in: [String!]
  nickName_lt: String
  nickName_lte: String
  nickName_gt: String
  nickName_gte: String
  nickName_contains: String
  nickName_not_contains: String
  nickName_starts_with: String
  nickName_not_starts_with: String
  nickName_ends_with: String
  nickName_not_ends_with: String
  childName: String
  childName_not: String
  childName_in: [String!]
  childName_not_in: [String!]
  childName_lt: String
  childName_lte: String
  childName_gt: String
  childName_gte: String
  childName_contains: String
  childName_not_contains: String
  childName_starts_with: String
  childName_not_starts_with: String
  childName_ends_with: String
  childName_not_ends_with: String
  openId: String
  openId_not: String
  openId_in: [String!]
  openId_not_in: [String!]
  openId_lt: String
  openId_lte: String
  openId_gt: String
  openId_gte: String
  openId_contains: String
  openId_not_contains: String
  openId_starts_with: String
  openId_not_starts_with: String
  openId_ends_with: String
  openId_not_ends_with: String
  unionId: String
  unionId_not: String
  unionId_in: [String!]
  unionId_not_in: [String!]
  unionId_lt: String
  unionId_lte: String
  unionId_gt: String
  unionId_gte: String
  unionId_contains: String
  unionId_not_contains: String
  unionId_starts_with: String
  unionId_not_starts_with: String
  unionId_ends_with: String
  unionId_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  province: String
  province_not: String
  province_in: [String!]
  province_not_in: [String!]
  province_lt: String
  province_lte: String
  province_gt: String
  province_gte: String
  province_contains: String
  province_not_contains: String
  province_starts_with: String
  province_not_starts_with: String
  province_ends_with: String
  province_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  sessionKey: String
  sessionKey_not: String
  sessionKey_in: [String!]
  sessionKey_not_in: [String!]
  sessionKey_lt: String
  sessionKey_lte: String
  sessionKey_gt: String
  sessionKey_gte: String
  sessionKey_contains: String
  sessionKey_not_contains: String
  sessionKey_starts_with: String
  sessionKey_not_starts_with: String
  sessionKey_ends_with: String
  sessionKey_not_ends_with: String
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  gender: Int
  gender_not: Int
  gender_in: [Int!]
  gender_not_in: [Int!]
  gender_lt: Int
  gender_lte: Int
  gender_gt: Int
  gender_gte: Int
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  forbiddenAt: DateTime
  forbiddenAt_not: DateTime
  forbiddenAt_in: [DateTime!]
  forbiddenAt_not_in: [DateTime!]
  forbiddenAt_lt: DateTime
  forbiddenAt_lte: DateTime
  forbiddenAt_gt: DateTime
  forbiddenAt_gte: DateTime
  userStatus: Int
  userStatus_not: Int
  userStatus_in: [Int!]
  userStatus_not_in: [Int!]
  userStatus_lt: Int
  userStatus_lte: Int
  userStatus_gt: Int
  userStatus_gte: Int
  userRole: Int
  userRole_not: Int
  userRole_in: [Int!]
  userRole_not_in: [Int!]
  userRole_lt: Int
  userRole_lte: Int
  userRole_gt: Int
  userRole_gte: Int
  isChildAccount: Boolean
  isChildAccount_not: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbiddenAt_not: DateTime
  childAccountForbiddenAt_in: [DateTime!]
  childAccountForbiddenAt_not_in: [DateTime!]
  childAccountForbiddenAt_lt: DateTime
  childAccountForbiddenAt_lte: DateTime
  childAccountForbiddenAt_gt: DateTime
  childAccountForbiddenAt_gte: DateTime
  childAccountForbidden: Boolean
  childAccountForbidden_not: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeletedAt_not: DateTime
  childAccountDeletedAt_in: [DateTime!]
  childAccountDeletedAt_not_in: [DateTime!]
  childAccountDeletedAt_lt: DateTime
  childAccountDeletedAt_lte: DateTime
  childAccountDeletedAt_gt: DateTime
  childAccountDeletedAt_gte: DateTime
  childAccountDeleted: Boolean
  childAccountDeleted_not: Boolean
  allowEdit: Boolean
  allowEdit_not: Boolean
  expiredAt: DateTime
  expiredAt_not: DateTime
  expiredAt_in: [DateTime!]
  expiredAt_not_in: [DateTime!]
  expiredAt_lt: DateTime
  expiredAt_lte: DateTime
  expiredAt_gt: DateTime
  expiredAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  childAccounts: UserUpdateManyWithoutParentAccountInput
  parentAccount: UserUpdateOneWithoutChildAccountsInput
  refreshTokens: UserRefreshTokenUpdateManyWithoutOwnerInput
}

input UserUpdateManyDataInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
}

input UserUpdateManyMutationInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
}

input UserUpdateManyWithoutParentAccountInput {
  create: [UserCreateWithoutParentAccountInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutParentAccountInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutParentAccountInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutRefreshTokensInput {
  create: UserCreateWithoutRefreshTokensInput
  update: UserUpdateWithoutRefreshTokensDataInput
  upsert: UserUpsertWithoutRefreshTokensInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutChildAccountsInput {
  create: UserCreateWithoutChildAccountsInput
  update: UserUpdateWithoutChildAccountsDataInput
  upsert: UserUpsertWithoutChildAccountsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChildAccountsDataInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  parentAccount: UserUpdateOneWithoutChildAccountsInput
  refreshTokens: UserRefreshTokenUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutParentAccountDataInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  childAccounts: UserUpdateManyWithoutParentAccountInput
  refreshTokens: UserRefreshTokenUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutRefreshTokensDataInput {
  phone: String
  password: String
  salt: String
  userName: String
  nickName: String
  childName: String
  openId: String
  unionId: String
  birthday: DateTime
  avatar: String
  country: String
  province: String
  city: String
  language: String
  sessionKey: String
  remark: String
  gender: Int
  deletedAt: DateTime
  forbiddenAt: DateTime
  userStatus: Int
  userRole: Int
  isChildAccount: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbidden: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeleted: Boolean
  allowEdit: Boolean
  expiredAt: DateTime
  childAccounts: UserUpdateManyWithoutParentAccountInput
  parentAccount: UserUpdateOneWithoutChildAccountsInput
}

input UserUpdateWithWhereUniqueWithoutParentAccountInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutParentAccountDataInput!
}

input UserUpsertWithoutChildAccountsInput {
  update: UserUpdateWithoutChildAccountsDataInput!
  create: UserCreateWithoutChildAccountsInput!
}

input UserUpsertWithoutRefreshTokensInput {
  update: UserUpdateWithoutRefreshTokensDataInput!
  create: UserCreateWithoutRefreshTokensInput!
}

input UserUpsertWithWhereUniqueWithoutParentAccountInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutParentAccountDataInput!
  create: UserCreateWithoutParentAccountInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  salt: String
  salt_not: String
  salt_in: [String!]
  salt_not_in: [String!]
  salt_lt: String
  salt_lte: String
  salt_gt: String
  salt_gte: String
  salt_contains: String
  salt_not_contains: String
  salt_starts_with: String
  salt_not_starts_with: String
  salt_ends_with: String
  salt_not_ends_with: String
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  nickName: String
  nickName_not: String
  nickName_in: [String!]
  nickName_not_in: [String!]
  nickName_lt: String
  nickName_lte: String
  nickName_gt: String
  nickName_gte: String
  nickName_contains: String
  nickName_not_contains: String
  nickName_starts_with: String
  nickName_not_starts_with: String
  nickName_ends_with: String
  nickName_not_ends_with: String
  childName: String
  childName_not: String
  childName_in: [String!]
  childName_not_in: [String!]
  childName_lt: String
  childName_lte: String
  childName_gt: String
  childName_gte: String
  childName_contains: String
  childName_not_contains: String
  childName_starts_with: String
  childName_not_starts_with: String
  childName_ends_with: String
  childName_not_ends_with: String
  openId: String
  openId_not: String
  openId_in: [String!]
  openId_not_in: [String!]
  openId_lt: String
  openId_lte: String
  openId_gt: String
  openId_gte: String
  openId_contains: String
  openId_not_contains: String
  openId_starts_with: String
  openId_not_starts_with: String
  openId_ends_with: String
  openId_not_ends_with: String
  unionId: String
  unionId_not: String
  unionId_in: [String!]
  unionId_not_in: [String!]
  unionId_lt: String
  unionId_lte: String
  unionId_gt: String
  unionId_gte: String
  unionId_contains: String
  unionId_not_contains: String
  unionId_starts_with: String
  unionId_not_starts_with: String
  unionId_ends_with: String
  unionId_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  province: String
  province_not: String
  province_in: [String!]
  province_not_in: [String!]
  province_lt: String
  province_lte: String
  province_gt: String
  province_gte: String
  province_contains: String
  province_not_contains: String
  province_starts_with: String
  province_not_starts_with: String
  province_ends_with: String
  province_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  sessionKey: String
  sessionKey_not: String
  sessionKey_in: [String!]
  sessionKey_not_in: [String!]
  sessionKey_lt: String
  sessionKey_lte: String
  sessionKey_gt: String
  sessionKey_gte: String
  sessionKey_contains: String
  sessionKey_not_contains: String
  sessionKey_starts_with: String
  sessionKey_not_starts_with: String
  sessionKey_ends_with: String
  sessionKey_not_ends_with: String
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  gender: Int
  gender_not: Int
  gender_in: [Int!]
  gender_not_in: [Int!]
  gender_lt: Int
  gender_lte: Int
  gender_gt: Int
  gender_gte: Int
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  forbiddenAt: DateTime
  forbiddenAt_not: DateTime
  forbiddenAt_in: [DateTime!]
  forbiddenAt_not_in: [DateTime!]
  forbiddenAt_lt: DateTime
  forbiddenAt_lte: DateTime
  forbiddenAt_gt: DateTime
  forbiddenAt_gte: DateTime
  userStatus: Int
  userStatus_not: Int
  userStatus_in: [Int!]
  userStatus_not_in: [Int!]
  userStatus_lt: Int
  userStatus_lte: Int
  userStatus_gt: Int
  userStatus_gte: Int
  userRole: Int
  userRole_not: Int
  userRole_in: [Int!]
  userRole_not_in: [Int!]
  userRole_lt: Int
  userRole_lte: Int
  userRole_gt: Int
  userRole_gte: Int
  isChildAccount: Boolean
  isChildAccount_not: Boolean
  childAccountForbiddenAt: DateTime
  childAccountForbiddenAt_not: DateTime
  childAccountForbiddenAt_in: [DateTime!]
  childAccountForbiddenAt_not_in: [DateTime!]
  childAccountForbiddenAt_lt: DateTime
  childAccountForbiddenAt_lte: DateTime
  childAccountForbiddenAt_gt: DateTime
  childAccountForbiddenAt_gte: DateTime
  childAccountForbidden: Boolean
  childAccountForbidden_not: Boolean
  childAccountDeletedAt: DateTime
  childAccountDeletedAt_not: DateTime
  childAccountDeletedAt_in: [DateTime!]
  childAccountDeletedAt_not_in: [DateTime!]
  childAccountDeletedAt_lt: DateTime
  childAccountDeletedAt_lte: DateTime
  childAccountDeletedAt_gt: DateTime
  childAccountDeletedAt_gte: DateTime
  childAccountDeleted: Boolean
  childAccountDeleted_not: Boolean
  allowEdit: Boolean
  allowEdit_not: Boolean
  expiredAt: DateTime
  expiredAt_not: DateTime
  expiredAt_in: [DateTime!]
  expiredAt_not_in: [DateTime!]
  expiredAt_lt: DateTime
  expiredAt_lte: DateTime
  expiredAt_gt: DateTime
  expiredAt_gte: DateTime
  childAccounts_every: UserWhereInput
  childAccounts_some: UserWhereInput
  childAccounts_none: UserWhereInput
  parentAccount: UserWhereInput
  refreshTokens_every: UserRefreshTokenWhereInput
  refreshTokens_some: UserRefreshTokenWhereInput
  refreshTokens_none: UserRefreshTokenWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type VerificationCode {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  expiredAt: DateTime!
  code: String!
  codeType: Int
  phone: String!
}

type VerificationCodeConnection {
  pageInfo: PageInfo!
  edges: [VerificationCodeEdge]!
  aggregate: AggregateVerificationCode!
}

input VerificationCodeCreateInput {
  expiredAt: DateTime!
  code: String!
  codeType: Int
  phone: String!
}

type VerificationCodeEdge {
  node: VerificationCode!
  cursor: String!
}

enum VerificationCodeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  expiredAt_ASC
  expiredAt_DESC
  code_ASC
  code_DESC
  codeType_ASC
  codeType_DESC
  phone_ASC
  phone_DESC
}

type VerificationCodePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  expiredAt: DateTime!
  code: String!
  codeType: Int
  phone: String!
}

type VerificationCodeSubscriptionPayload {
  mutation: MutationType!
  node: VerificationCode
  updatedFields: [String!]
  previousValues: VerificationCodePreviousValues
}

input VerificationCodeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VerificationCodeWhereInput
  AND: [VerificationCodeSubscriptionWhereInput!]
  OR: [VerificationCodeSubscriptionWhereInput!]
  NOT: [VerificationCodeSubscriptionWhereInput!]
}

input VerificationCodeUpdateInput {
  expiredAt: DateTime
  code: String
  codeType: Int
  phone: String
}

input VerificationCodeUpdateManyMutationInput {
  expiredAt: DateTime
  code: String
  codeType: Int
  phone: String
}

input VerificationCodeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  expiredAt: DateTime
  expiredAt_not: DateTime
  expiredAt_in: [DateTime!]
  expiredAt_not_in: [DateTime!]
  expiredAt_lt: DateTime
  expiredAt_lte: DateTime
  expiredAt_gt: DateTime
  expiredAt_gte: DateTime
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  codeType: Int
  codeType_not: Int
  codeType_in: [Int!]
  codeType_not_in: [Int!]
  codeType_lt: Int
  codeType_lte: Int
  codeType_gt: Int
  codeType_gte: Int
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  AND: [VerificationCodeWhereInput!]
  OR: [VerificationCodeWhereInput!]
  NOT: [VerificationCodeWhereInput!]
}

input VerificationCodeWhereUniqueInput {
  id: ID
}
`
      }
    