import Button from './button';
import styled from 'styled-components/macro';

const RoundedButton = styled(Button)`
  border-radius: ${({ theme }) => theme.radius.lrg};
`;

export default RoundedButton;
