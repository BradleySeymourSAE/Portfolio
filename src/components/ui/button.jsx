import React from 'react';
import { compose, withHandlers } from 'recompose';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Base from 'components/ui/base/button';

const ButtonBase = styled(Base)`
  border-radius: ${(props) => props.theme.radius.sml};
  background-color: ${(props) => props.theme.colors.greyLighten4};
  color: black;
  border: none;
  padding: 1.5em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: default;
  outline: none;

    :active,
    :focus {
      box-shadow: none;
    }
    :active {
      opacity: 0.75;
    }
    :hover {
      box-shadow: none;
    }
`;

const Button = styled.button``.withComponent(
  ({ children, handleClick, icon, iconSize, link, openInNewPage, subText, text, ...props }) => (
    <ButtonBase {...props}>
      {!!icon && icon}
      {text}
      {children}
    </ButtonBase>
  ),
);

Button.propTypes = {
  disabled: PropTypes.bool,
  iconSize: PropTypes.number,
  link: PropTypes.string,
  onClick: PropTypes.func,
  openInNewPage: PropTypes.bool,
  subText: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  iconSize: 20,
  openInNewPage: false,
  type: 'submit',
};

const handlers = withHandlers({
  handleClick: ({ link, openInNewPage }) => (event) => {
    if (!link) return; // eg form submit
    if (openInNewPage) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  },
});

export default compose(handlers)(Button);
