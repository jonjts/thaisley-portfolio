import React from 'react';
import { useTranslation } from 'react-i18next'

import {
    Container,
    Item,
    Dot,
    LinkContainer
} from './styles';

const Referencias: React.FC<{ referencias: Array<string> }> = ({ referencias }) => {

    const { t } = useTranslation()

    return (
        <Container>
            <h2>
                {t('cases.reference')}
            </h2>
            {
                referencias.map((referencia, key) =>
                    (
                        <Item key={key}>
                            <div>
                                <Dot />
                            </div>
                            <LinkContainer>
                                <a
                                    href={referencia}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    {referencia}
                                </a>
                            </LinkContainer>
                        </Item>
                    ))
            }
        </Container>
    )
}

export default Referencias;