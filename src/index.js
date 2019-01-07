import { GraphQLServer, PubSub } from 'graphql-yoga';
import moment from 'moment';
import depthLimit from 'graphql-depth-limit';
import { prisma as db } from './generated/prisma-client';
import prisma from './graphql/prisma';
import config from './config';
import { getUser, formatResponse } from './utils';
import { formatError } from './utils/error';
import resolvers from './graphql/resolver';
import { errorMiddleware, logExecdTimeMiddleware } from './middlewares/log';
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers,
  middlewares: [logExecdTimeMiddleware, errorMiddleware],
  context: req => {
    const user = getUser(req);
    return {
      ...req,
      user,
      db,
      prisma,
      pubsub,
    };
  },
});

const options = {
  validationRules: [depthLimit(5)],
  formatError,
  formatResponse,
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
  port: 4800,
};

server.start(options, () => console.log('Server is running on http://localhost:4800'));
