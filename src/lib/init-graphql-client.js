import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import Authentication from 'lib/authentication';
import config from 'config';


const httpLink = createHttpLink({
  uri: `${config.apiHost}/graphql`,
  credentials: 'same-origin'
});

const cleanTypename = new ApolloLink((operation, forward) => {
  if (operation.variables){
    const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }
  return forward(operation).map((data) => {
    return data;
  });
});

const authMiddleware = setContext(() => {
  const token = Authentication.getToken();
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const link = ApolloLink.from([authMiddleware, cleanTypename, httpLink]);

export const cache = new InMemoryCache({ addTypename: true });

export default new ApolloClient({ link, cache });
