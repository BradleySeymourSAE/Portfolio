import styled from 'styled-components/macro';
import { deprecatedRebassProps } from './deprecated';

const BackgroundImage = styled.div`
  width: 100%;
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-position: center;
  height: 0;
  padding-bottom: ${(p) => (p.ratio ? p.ratio * 100 : 75)}%;
`;

BackgroundImage.propTypes = {
  ...deprecatedRebassProps,
};

export default BackgroundImage;
