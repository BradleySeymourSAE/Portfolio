import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Select = styled.select`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  appearance: none;
  width: 100%;
  margin: 0;
  color: inherit;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  outline: none;
  box-shadow: inset 0 0 0 1px gray2;
  padding: 15px;
`;

Select.propTypes = {
  ...deprecatedRebassProps,
};
export default Select;
