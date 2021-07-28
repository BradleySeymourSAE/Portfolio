import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Input = styled.input`
    margin: 0;
    padding: 0.5rem;
    width: 100%;
    font-size: 16px;
    color: inherit;
    background-color: transparent;
    font-family: inherit;
    line-height: inherit;
    display: inline-block;
    vertical-align: middle;
    border: 0;
    appearance: none;
    cursor: default;

      &:active,
      &:focus {
        outline: none;
      }
`;

Input.propTypes = {
  ...deprecatedRebassProps,
};

export default Input;
