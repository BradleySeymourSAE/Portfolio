import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import styled from 'styled-components/macro';

const disabledStyles = css`
  background-color: ${(props) => props.theme.colors.greyLighten2};
  border-color: ${(props) => props.theme.colors.greyLighten2};
  color: white;
  opacity: 1;
`;

const StyledButton = styled.button`
    position: relative;
    font-size: 0.9em;
    font-weight: 550;
    font-family: inherit;
    border: none;
    color: inherit;
    background-color: ${(props) => props.theme.colors.greyLighten5};
    padding: 0.84rem 1.24rem;
    line-height: 1.235294118;
    border-radius: ${(props) => props.theme.radius.sml};
    width: 100%;
    transition: transform 50ms ease;

    ${(props) => props.disabled && disabledStyles};

    &:active {
      transform: scale(0.98);
    }

    /* &:focus {
      outline: none;
    }

    &:focus::before {
      content: '';
      right: 0.25em;
      top: 0.25em;
      bottom: 0.25em;
      left: 0.25em;
      position: absolute;
      border: 1px solid currentColor;
      border-radius: 1.25em;
      opacity: 0.75;
    }

    &:focus:active::before {
      content: none;
    }

    & + & {
      margin-top: 10px;
    } */
`;

const Button = ({ hidden, text, children, ...props }) =>
  !hidden && (
    <StyledButton {...props}>
      {text}
      {children}
    </StyledButton>
  );

Button.propTypes = {
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
    hidden: false,
    disabled: false,
};

export default Button;
