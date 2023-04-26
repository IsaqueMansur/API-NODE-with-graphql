import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    allUsers: [String]!
    paoDoce: String!
  }
  type Mutation {
    createUser(name: String!): String!
  }
`;

const users: String[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      allUsers: () => {
        return users;
      },
      paoDoce: () => {
        return 'Pão doce !';
      },
    },

    Mutation: {
      createUser: (parent, args, ctx) => {
        users.push(args.name);
        return args.name;
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`Rodando em ${url}`);
});
