import React from 'react';
import Text from 'components/web-ui/text';
import styled from 'styled-components/macro';
import Spinner from './spinner';

const ScreenContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${(p) => p.theme.colors.alphaBlack50};
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 80%;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.white};
  text-align: center;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default (props) => {
  if (!props.active) return false;

  return (
    <ScreenContainer>
      <ModalContainer p="15px" pb="3px">
        <Text children={props.children} />
        <Spinner fill="rgba(0,0,0,0.5)" />
      </ModalContainer>
    </ScreenContainer>
  );
};
