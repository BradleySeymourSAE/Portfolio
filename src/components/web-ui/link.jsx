import React from 'react';
import { PropTypes } from 'prop-types';
import { compose, mapProps } from 'lib/recompose';
import styled from 'styled-components/macro';

const Link = styled.a`
  margin: 0;
  font-size: 1em;
  color: ${(p) => p.color || 'blue'};
  background-color: ${(p) => p.bg};
  cursor: default;

    &:hover {
      outline: none;
      background-color: ${(p) => p.bg};
    }

    &:active {
      outline: none;
      background-color: ${(p) => p.bg};
    }

    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px ${(p) => p.bg};
    }
`;

function LinkComponent(props) {
  return <Link {...props} />;
}

LinkComponent.propTypes = {
    color: PropTypes.string,
    to: PropTypes.string,
};

// Export defaut compose and map new properties as to and delete href
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
