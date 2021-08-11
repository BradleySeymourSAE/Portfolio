import React from 'react';
import styled from 'styled-components/macro';

const Layout = styled.div`
  padding: 5px 0px 10px;
  color: ${(props) => props.theme.colors.greyDarken4};
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.font};
`;

const Header = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    max-height: 750px;
    height: 300px;
    box-shadow: ${({ theme }) => theme.shadow.depth2};
    border-radius: ${({ theme }) => theme.radius.reg};
    margin-bottom: 2.5px;
`;

const Content = styled.div` 
    display: flex;
    flex-direction: column;
    flex: 3 0 auto;
    margin-top: 10px;
    margin-bottom: -20px;
    align-items: center;
    justify-content: center;
    background-color: ${(p) => p.bg};
`;

const Title = styled.div`
    font-size: 2.2rem;
    margin-bottom: 0.64rem;
`;

const Subtitle = styled.p`
    font-size: 1.15rem;
    opacity: 0.95;
    margin-bottom: 0.48rem;
`;

function FormLayout(props) {
  const { title, subtitle, color, scrolling } = props;
  return (
    <Layout>
      <Header>
        <Title children={title} />
        <Subtitle children={subtitle} />
      </Header>
      <Content bg={color}>
        {props.children}
      </Content>
    </Layout>
  );
}

export default FormLayout;