import React from 'react';
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router-dom";
import { interfaces  } from "../../../store";

import ContactButtonContainer from '../../../components/container/ContactButton'
import Card from "../../../components/cards/Image";
import {
    Container,
    HeaderContainer,
    CardContainer,
    CardColumn,
    CardRow
} from './styles';
import { S1 } from '../../styles'

const Content: React.FC = () => {

    const { t } = useTranslation()
    const history = useHistory()


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
                            onClick={() => { history.push(`/cases?key=${item.id}`) }}
                        />
                    </CardColumn>
                ))
            }
        </CardRow>
    )

    return (
        <Container id='jobs'>
            <CardContainer>
                <Interfaces />
            </CardContainer>
            <ContactButtonContainer
                style={{ marginBottom: 113 }}
            />
        </Container>
    )
}

export default Content;