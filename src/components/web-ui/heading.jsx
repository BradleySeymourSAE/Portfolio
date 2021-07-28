import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Heading = styled.h2`
  line-height: 1.25;
  margin: 0;
  font-size: 32px;
  color: ${(p) => p.color || 'inherit' };
`;

Heading.propTypes = {
  ...deprecatedRebassProps,
};

export default Heading;
