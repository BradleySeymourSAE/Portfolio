import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Text = styled.p`
  font-size: 0.9em;
  margin: 0px;
  color: ${(p) => p.color || 'inherit'};
  text-shadow: 0px 1px 4px ${({ theme }) => theme.colors.alphaWhite30};
`;


Text.propTypes = {
  ...deprecatedRebassProps,
};

export default Text;
