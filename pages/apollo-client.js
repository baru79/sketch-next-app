import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.uri,
  cache: new InMemoryCache({ typePolicies: { Query: { fields: { share: { merge: true } } } } }),
});

export default client;
