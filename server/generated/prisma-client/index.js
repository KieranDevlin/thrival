"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "JobPost",
    embedded: false
  },
  {
    name: "Employer",
    embedded: false
  },
  {
    name: "Contact",
    embedded: false
  },
  {
    name: "Applicant",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4467`
});
exports.prisma = new exports.Prisma();
