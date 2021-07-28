import React from 'react';
import ApolloProvider from './apollo';
import ThemeProvider from './theme';
import Homepage from 'Homepage';


function Providers(props) {
  return (
        <ApolloProvider renderOnlyIf={props.apollo}>
            <ThemeProvider renderOnlyIf={props.theme}>
                <Homepage>
                  {props.children}
                </Homepage>
            </ThemeProvider>
        </ApolloProvider>
  );
}

export default Providers;
