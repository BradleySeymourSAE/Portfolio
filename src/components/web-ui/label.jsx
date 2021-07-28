import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Label = styled.label`
  margin-bottom: 0.64rem;
  font-size: 0.9em;
  display: flex;
  align-items: center;
`;

Label.propTypes = {
  ...deprecatedRebassProps,
};

export default Label;
