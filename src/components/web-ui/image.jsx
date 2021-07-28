import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const Image = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
`;

Image.propTypes = {
  ...deprecatedRebassProps,
};

export default Image;
