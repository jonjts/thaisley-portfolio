import React from 'react';

import Me from './Me/index'
import Portfolio from './Portfolio'
import { Container, Sidebar, Content } from './styles.js'

export default ({ }) => {

    return (
        <Container>
            <Sidebar>
                <Me />
            </Sidebar>
            <Content>
                <Portfolio />
            </Content>
        </Container >
    );
}
