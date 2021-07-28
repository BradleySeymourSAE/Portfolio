import React from 'react';
import PropTypes from 'prop-types';
import { compose, mapProps } from 'lib/recompose';
import styled from 'styled-components/macro';

const Link = styled.a`
  font-size: inherit;
  color: ${(props) => props.theme.colors.blueDarken1};
  cursor: default;

  &:hover {
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

function LinkComponent(props) {
  return <Link {...props} />;
}

LinkComponent.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
};

export default compose(
  mapProps((props) => {
    const rest = { ...props };

    delete rest.to;

    return {
      ...rest,
      href: props.to,
    };
  }),
)(LinkComponent);
