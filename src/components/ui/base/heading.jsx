import React from 'react';
import styled from 'styled-components/macro';
import BaseHeading from 'components/web-ui/heading';

const Heading = styled.h2`
  color: ${(props) => props.theme.colors[props.color] || props.theme.colors[props.defaultColor]};
  font-family: ${(props) => props.theme.font};
  font-weight: ${(props) => props.theme.fonts.weights[props.fontWeight] || props.theme.fonts.weight[props.defaultWeight]};
  letter-spacing: -0.45px;
  line-height: 1.2;
`.withComponent(({ defaultColor, ...rest }) => <BaseHeading {...rest} />);

Heading.defaultProps = {
  is: 'h2',
  fontWeight: 'bold',
  fontSize: '34px',
  defaultColor: 'veryDarkPurple',
};

export default Heading;
