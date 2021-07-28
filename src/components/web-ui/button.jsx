import styled from 'styled-components/macro';

const Button = styled.button`
  font-weight: 400;
  padding-left: 32px;
  padding-right: 32px;
  background-color: ${(p) => p.bg};
  background: ${(p) => p.background};
  color: ${(p) => p.color};
  border: 0;
  cursor: default;

    &:hover {
      outline: none;
    }

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px ${(p) => adjustContrast(p.bg)};
    }
`;

export default Button;
