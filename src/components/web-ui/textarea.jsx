import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Textarea = styled.textarea`
  margin: 0px;
  padding: 8px;
  width: 100%;
  color: inherit;
  background-color: transparent;

  font-family: inherit;
  font-size: inherit;
  border: 0;
  box-shadow: inset 0 0 0 1px gray2;
  appearance: none;
`;

Textarea.propTypes = {
  ...deprecatedRebassProps,
};

export default Textarea;
