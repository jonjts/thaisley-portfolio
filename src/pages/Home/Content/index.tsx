import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router-dom";
import { interfaces, logos } from "../../../store";

import Card from "../../../components/cards/Image";
import {
    Container,
    HeaderContainer,
    CardContainer,
    CardColumn,
    CardRow
} from './styles';
import { S1 } from '../../styles'

import SelectButton from "../../../components/SelectButton";

const Content: React.FC = () => {

    const { t } = useTranslation()
    const history = useHistory()
    const [selected, setSelected] = useState('interfaces')


    function focus() {
        window.location.href = '#jobs'
    }
    function handleShowInterfaces() {
        setSelected('interfaces')
        focus()
    }

    function handleShowIndentidades() {
        setSelected('identidades')
        focus()
    }

    const Identidades = () => (
        <CardRow>
            {
                logos.map((logo, key) => (
                    <CardColumn xs={12} sm={12} md={12} lg={4}>
                        <Card
                            imageSorce={logo.image}
                            categoria={t(logo.categoria)}
                            title={logo.title}
                            onClick={() => { history.push(`/cases/${logo.id}`) }}
                        />
                    </CardColumn>
                ))
            }
        </CardRow>
    )

    const Interfaces = () => (
        <CardRow>
            {
                interfaces.map((item, key) => (
                    <CardColumn
                        xs={12} sm={12} md={12} lg={4}
                        key={key}
                    >
                        <Card
                            imageSorce={item.image}
                            categoria={t(item.categoria)}
                            title={item.title}
                            onClick={() => { history.push(`/cases/${item.id}`) }}
                        />
                    </CardColumn>
                ))
            }
        </CardRow>
    )

    return (
        <Container id='jobs'>
            <HeaderContainer>
                <S1 style={{ marginBottom: 26 }}>
                    {t('label.show_me')}
                </S1>
                <SelectButton
                    onIdentidadeClicked={handleShowIndentidades}
                    onInterfacesCliecked={handleShowInterfaces}
                    onClick={focus}
                />
            </HeaderContainer>

            <CardContainer>
                {
                    selected === 'interfaces' ?
                        <Interfaces />
                        :
                        <Identidades />
                }
            </CardContainer>
        </Container>
    )
}

export default Content;