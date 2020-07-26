import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'

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

    const Identidades = ({ }) => (
        <CardRow>
            <CardColumn xs={12} sm={12} md={12} lg={4}>
                <Card
                    imageSorce={require('../../../assets/images/identidades/rim.png')}
                    categoria={t('categoria.nutricionista')}
                    title='Claúdia Ribeiro'
                    onClick={() => { }}
                />
            </CardColumn>
            <CardColumn xs={12} sm={12} md={12} lg={4}>
                <Card
                    imageSorce={require('../../../assets/images/identidades/maison.png')}
                    categoria={t('categoria.beleza')}
                    title='Maison'
                    onClick={() => { }}
                />
            </CardColumn>
            <CardColumn xs={12} sm={12} md={12} lg={4}>
                <Card
                    imageSorce={require('../../../assets/images/identidades/vade.png')}
                    categoria={t('categoria.direito')}
                    title='Vade'
                    onClick={() => { }}
                />
            </CardColumn>
            <CardColumn xs={12} sm={12} md={12} lg={4}>
                <Card
                    imageSorce={require('../../../assets/images/identidades/kids.png')}
                    categoria={t('categoria.loja_infantil')}
                    title='Aquarela Kids'
                    onClick={() => { }}
                />
            </CardColumn>
            <CardColumn xs={12} sm={12} md={12} lg={4}>
                <Card
                    imageSorce={require('../../../assets/images/identidades/arquiteto.png')}
                    categoria={t('categoria.arquitetura')}
                    title='Rebeka Barros'
                    onClick={() => { }}
                />
            </CardColumn>
            <CardColumn xs={12} sm={12} md={12} lg={4}>
                <Card
                    imageSorce={require('../../../assets/images/identidades/conforfit.png')}
                    categoria={t('categoria.app_sporte')}
                    title='Conforfit'
                    onClick={() => { }}
                />
            </CardColumn>
        </CardRow>
    )

    const Interfaces = ({ }) => (
        <CardRow>
            <CardColumn
                xs={12} sm={12} md={12} lg={4}
            >
                <Card
                    imageSorce={require('../../../assets/images/interfaces/tinbolt.png')}
                    categoria={t('categoria.ux_ui_redesign')}
                    title='Tinbolt'
                    onClick={() => { }}
                />
            </CardColumn>
            <CardColumn
                xs={12} sm={12} md={12} lg={4}
            >
                <Card
                    imageSorce={require('../../../assets/images/interfaces/imc.png')}
                    categoria={t('categoria.app_design')}
                    title='IMC Calculadora'
                    onClick={() => { }}
                />
            </CardColumn>
            <CardColumn
                xs={12} sm={12} md={12} lg={4}
            >
                <Card
                    imageSorce={require('../../../assets/images/interfaces/sara.png')}
                    categoria={t('categoria.ux_ui_redesign')}
                    title='SaraPlay'
                    onClick={() => { }}
                />
            </CardColumn>
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