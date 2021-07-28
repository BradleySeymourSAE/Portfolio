import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import theme from 'css/theme';


function ThemeProvider(props) {
  return <Provider theme={props.theme} children={props.children} />;
}

ThemeProvider.defaultProps = {
  theme: theme,
};

export default ThemeProvider;
