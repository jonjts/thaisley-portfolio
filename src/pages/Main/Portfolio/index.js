import React, { useState, useRef } from 'react';

import SelectButton from '../../../components/SelectButton'
import { Container, MenuBar, ContentContainer } from './styles'
import { Subtitle } from '../styles/index'
import Interfaces from './Interfaces'
import Identidades from './Identidades'

export default () => {

    const [content, setContent] = useState(<Interfaces />)

    const myContainer = useRef()

    function scrollToTop() {
        myContainer.current.scrollTo(0, 0);
    }

    function handleInterfacesClicked() {
        setContent(<Interfaces />)
        scrollToTop()
    }

    function handleIdentidaesClicked() {
        setContent(<Identidades />)
        scrollToTop()
    }

    return (
        <Container ref={myContainer}>
            <MenuBar >
                <Subtitle className='subtitle'>
                    Conheça um pouco do meu trabalho
                </Subtitle>
                <SelectButton
                    onInterfacesCliecked={handleInterfacesClicked}
                    onIdentidadeClicked={handleIdentidaesClicked}
                />
            </MenuBar>
            <ContentContainer>
                {content}
            </ContentContainer>
        </Container>
    );
}
