import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { Coompras, Tinbolt, Sara, Imc } from '../../../store/cases'
import { ICaseGroup, ICase } from '../../../store/cases/interfaces'
import {
    useHistory,
    useParams,
} from "react-router-dom";
import { interfaces } from "../../../store";
import { IProject } from "../../../store/Projects";


import ContactButtonContainer from '../../../components/container/ContactButton'
import { Row, Col } from 'react-bootstrap'
import Card from "../../../components/cards/Image";
import Article from "../../../components/Article";
import {
    Container
} from "react-bootstrap";
import {
    BackButton,
    ContenContainer,
    ContainerSeeMore
} from "./styles";

interface MyCases {
    coompras: ICaseGroup,
    tinbolt: ICaseGroup,
    'sara-play': ICaseGroup,
    'imc-calculadora': ICaseGroup
}

const cases: MyCases = {
    coompras: Coompras,
    tinbolt: Tinbolt,
    'sara-play': Sara,
    'imc-calculadora': Imc
}


const Content: React.FC = () => {

    const history = useHistory()
    const { key } = useParams<{ key: string }>()
    const { t, i18n } = useTranslation()
    const [readToo, setReadToo] = useState(new Array<IProject>())

    useEffect(() => {
        setReadToo(interfaces.filter(item => item.id !== key))
    }, [key])

    function handleGoBack(e: React.MouseEvent) {
        history.goBack()
    }

    return (
        <Container>
            <ContenContainer>
                <Article
                    //@ts-ignore
                    caso={cases[key][i18n.language === 'en' ? 'en' : 'pt-br'] as ICase}
                >
                    <BackButton
                        onClick={handleGoBack}
                    >
                        <img
                            alt='back'
                            src={require('../../../assets/images/icons/arrow-back.svg')}
                        />
                        <label>
                            {t('cases.back')}
                        </label>
                    </BackButton>
                </Article>
            </ContenContainer>
            <ContactButtonContainer
                style={{
                    marginBottom: 150,
                    marginTop: 100
                }}
            />
            <ContainerSeeMore>
                <label>
                    {
                        t('see_more')
                    }
                </label>
            </ContainerSeeMore>
            <Row
                style={{ paddingBottom: 100 }}
            >
                <Col
                    className='mb-5'
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <Card
                        imageSorce={readToo[0]?.image}
                        categoria={t(readToo[0]?.categoria)}
                        title={readToo[0]?.title}
                        onClick={() => { history.push(`/cases/${readToo[0]?.id}`) }}
                    />
                </Col>
                <Col>
                    <Card
                        imageSorce={readToo[1]?.image}
                        categoria={t(readToo[1]?.categoria)}
                        title={readToo[1]?.title}
                        onClick={() => { history.push(`/cases/${readToo[1]?.id}`) }}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Content;
