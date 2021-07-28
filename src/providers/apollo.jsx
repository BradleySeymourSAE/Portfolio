import React from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import apolloClient from 'lib/init-graphql-client';

  function ApolloProvider(props) {
    return <Provider client={props.client} children={props.children} />;
  }

  ApolloProvider.defaultProps = {
    client: apolloClient,
  };

export default ApolloProvider;