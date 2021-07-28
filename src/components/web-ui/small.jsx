import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Small = styled.small`
  font-size: 0.75em;
`;

Small.propTypes = {
  ...deprecatedRebassProps,
};

export default Small;
