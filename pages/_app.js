import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css';
import client from './apollo-client';

const MyApp = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
