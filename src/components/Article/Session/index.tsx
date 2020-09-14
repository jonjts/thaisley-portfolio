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
                                    : item?.type === 'link' ?
                                        <a
                                            className='mt-4 mb-4'
                                            href={item.value}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-link mr-2"></i>
                                            {item.value}
                                        </a >
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