import React from 'react';
import { useTranslation } from 'react-i18next'

import {
    Container,
    HeaderContainer
} from './styles';
import { S1 } from '../../styles'

import SelectButton from "../../../components/SelectButton";

const Content: React.FC = () => {

    const { t } = useTranslation()

    function handleShowInterfaces() {

    }

    function handleShowIndentidades() {

    }

    return (
        <Container>
            <HeaderContainer>
                <S1 style={{ marginBottom: 26 }}>
                    {t('label.show_me')}
                </S1>
                <SelectButton
                    onIdentidadeClicked={handleShowIndentidades}
                    onInterfacesCliecked={handleShowInterfaces}
                />
            </HeaderContainer>
        </Container>
    )
}

export default Content;