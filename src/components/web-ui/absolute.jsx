import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Absolute = styled.div`
  font-size: 0.75em;
`;

Absolute.propTypes = {
  ...deprecatedRebassProps,
};

export default Absolute;
