import { Prisma } from 'prisma-binding';
import { typeDefs } from '../generated/prisma-client/prisma-schema';

const prisma = new Prisma({
  typeDefs,
  endpoint: 'http://localhost:4466/auth',
});

export default prisma;
