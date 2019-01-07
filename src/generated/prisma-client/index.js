"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "LogError",
    embedded: false
  },
  {
    name: "LogSession",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserRefreshToken",
    embedded: false
  },
  {
    name: "VerificationCode",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/auth`
});
exports.prisma = new exports.Prisma();
