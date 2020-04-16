import ApolloClient from 'apollo-boost';

// or you can use `import gql from 'graphql-tag';` instead

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/ivandaixivwork/thrival-covid19/dev/',
});

export default client;
