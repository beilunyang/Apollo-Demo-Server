import fs from 'fs';
import path from 'path';

let resolvers = {
  Query: {},
  Mutation: {},
  Subscription: {},
};

fs.readdirSync(__dirname).forEach(filename => {
  if (filename !== 'index.js') {
    const item = require(path.join(__dirname, filename));
    const { Query, Mutation, Subscription, ...props } = item.default;
    const { Query: rQuery, Mutation: rMutation, Subscription: rSubscription, ...other } = resolvers;
    resolvers = {
      Query: {
        ...rQuery,
        ...Query,
      },
      Mutation: {
        ...rMutation,
        ...Mutation,
      },
      Subscription: {
        ...rSubscription,
        ...Subscription,
      },
      ...props,
      ...other,
    };
  }
});

export default resolvers;
