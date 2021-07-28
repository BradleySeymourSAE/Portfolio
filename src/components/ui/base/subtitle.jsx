import React from 'react';
import styled from 'styled-components/macro';
import BaseHeading from 'components/web-ui/heading';

const Heading = styled.h3`
    color: ${(props) => props.theme.colors[props.color] || props.theme.colors[props.defaultColor]};
    font-family: ${(props) => props.theme.font};
    font-weight: ${(props) => props.theme.fonts.weights[props.fontWeight] || props.theme.fonts.weights[props.defaultWeight]};
    line-height: 1.5;
`.withComponent(({ defaultColor, ...rest }) => <BaseHeading {...rest} />);

Heading.defaultProps = {
  is: 'h3',
  fontWeight: 'normal',
  fontSize: '1.2rem',
  defaultColor: 'greyDarken3',
};

export default Heading;
