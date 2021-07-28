import React from 'react';
import Text from 'components/web-ui/text';
import { branch, compose, renderNothing } from 'recompose';
import styled from 'styled-components/macro';

const Container = styled.div`
  background-color: ${({ theme, level }) => theme.colors.messages[level]};
  text-align: center;
`.withComponent(({ level, ...props }) => <div {...props} />);

Container.defaultProps = {
  p: '10px',
};

function Message(props) {
  const { text, level, isVisible, ...rest } = props;
  return (
    <Container {...rest} level={level}>
      <Text children={text} />
    </Container>
  );
}

export default compose(
  //
  branch(({ isVisible }) => !isVisible, renderNothing),
)(Message);
