import React from 'react';
import { useTranslation } from 'react-i18next'

import {
    Container,
    TitleContainer,
    H1,
    H3,
    Quadrado,
    Retangulo
} from './styles';

const quadradoSrc = require('../../../assets/images/quadrado.png')
const retanguloSrc = require('../../../assets/images/retangulo.png')

const Presentation: React.FC = () => {


    const { t } = useTranslation()
    return (
        <Container id='home'>
            <Quadrado src={quadradoSrc} />
            <Retangulo src={retanguloSrc} />
            <TitleContainer>
                <H1>
                    {t('main.title')}
                </H1>
                <H3>
                    {t('main.subtitle')}
                </H3>
            </TitleContainer>
        </Container>
    )
}

export default Presentation;