import ApolloClient from 'apollo-boost';

// or you can use `import gql from 'graphql-tag';` instead

const client = new ApolloClient({
  uri: 'http://localhost:4466/',
});

export default client;
