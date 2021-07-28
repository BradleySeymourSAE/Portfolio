import { css } from 'styled-components';

const verticalSmoothScrolling = css`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  /* This prevents this bug => https://s3.amazonaws.com/timothyfletcher/semitization-nonrepresentationalism-mirish-lecaniid.mov */
  transform: translate3d(0, 0, 0);
`;

export default verticalSmoothScrolling;
