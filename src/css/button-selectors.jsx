import { css } from 'styled-components';

const ButtonClickSelectors = css`
  :hover,
  :focus,
  :active {
    border: 0;
    box-shadow: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  :active {
    opacity: 0.5;
  }
`;

export default ButtonClickSelectors;
