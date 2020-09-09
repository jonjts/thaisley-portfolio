import React from 'react';

import { Container, Content, ImageContent } from './styles';
import { ISession } from '../../../store/cases/interfaces'

const Session: React.FC<{ session: ISession }> = ({ session }) => {
    return (
        <Container>
            <h2>
                {
                    session.title
                }
            </h2>
            {
                session.paragraphs.map((paragraph, key) => (
                    <Content key={key}>
                        <h4>
                            {
                                paragraph.title
                            }
                        </h4>
                        {
                            paragraph.text.map((item, key) => (
                                item?.type === 'image'
                                    ?
                                    <ImageContent
                                        width={item?.width as number}
                                        height={item?.height as number}
                                        key={key}
                                        alt='detalhe'
                                        src={item.value}
                                    />
                                    :
                                    <p key={key}>
                                        {item.value}
                                    </p>
                            ))
                        }
                    </Content>
                ))
            }
        </Container>
    );
}

export default Session;