import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { omitProps } from 'lib/recompose';
import BaseInput from 'components/web-ui/input';

const errorState = css`
  border-color: ${(props) => props.theme.colors.redDarken1};
  color: ${(props) => props.theme.colors.redDarken1};

    &:focus {
      border-color: ${(props) => props.theme.colors.redDarken1};
      color: ${(props) => props.theme.colors.redDarken1};
    }
`;

const TextInput = styled.input`
  border-radius: ${(props) => props.theme.radius.sml};
  line-height: 1.2;
  border: 1px solid ${(props) => props.theme.colors.greyDarken1};
  padding-left: 10px;
  padding-right: 10px;

    ::placeholder {
      color: ${(props) => props.theme.colors.alphaBlack60};
    }

    :focus {
      border: 1px solid ${(props) => props.theme.colors.blueDarken4};
      box-shadow: none;
    }

    ${(props) => props.errors && errorState};
`.withComponent(omitProps('errors', 'mb')(BaseInput));

TextInput.defaultProps = {
  mb: '5px',
};

export default TextInput;
