import { compose, lifecycle } from 'recompose';
import styled from 'styled-components/macro';
import config from 'config';

const Base = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  position: relative;
`;

const withLifecycle = lifecycle({
    componentDidMount()
    {
      if (config.debugging)
        console.log(`Application mounted!`);
    }
});

export default compose(
  withLifecycle
)(Base);