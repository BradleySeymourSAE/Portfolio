import React from 'react';
import styled from 'styled-components/macro';
import Base from './base';
import { compose, pure } from 'recompose';


const Layout = styled(Base)`
    background-color: white;
`;

function BasicLayout(props)
{
    const { component: Component, ...rest } = props;
    return (
        <Layout>
            <Component {...rest} />
        </Layout>
    );
}

export default compose(
    pure,
)(BasicLayout);
