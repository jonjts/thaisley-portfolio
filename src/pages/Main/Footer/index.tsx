import React from 'react';
import { useTranslation } from 'react-i18next'

import {
    Container,
    Ondas,
    OndasContainer,
    Dot,
    NavContainer,
    ContactContainer,
    ContactButton,
    Copyrigth
} from './styles';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ondasSrc = require('../../../assets/images/ondas.png')

const Footer: React.FC = () => {

    const { t } = useTranslation()

    return (
        <>
            <Container>
                <OndasContainer >
                    <Ondas src={ondasSrc} />
                </OndasContainer>
                <NavContainer>
                    <Button variant='link' href="#home">{t('menu.home')}</Button>
                    <Dot />
                    <Button variant='link' href="#about-me">{t('menu.about_me')}</Button>
                    <Dot />
                    <Button variant='link' href="#contact">{t('menu.contact')}</Button>
                </NavContainer>
                <ContactContainer>
                    <Row className='align-items-center'>
                        <Col
                            style={{ justifyContent: 'center', display: 'flex' }}
                            className="mb-2"
                            xs={4} sm={4} lg={2} md={2} xl={2}>
                            <ContactButton>
                                <i className="fab fa-medium-m"></i>
                            </ContactButton>
                        </Col>
                        <Col
                            style={{ justifyContent: 'center', display: 'flex' }}
                            className="mb-2"
                            xs={4} sm={4} lg={2} md={2} xl={2}>
                            <ContactButton>
                                <i className="fab fa-behance"></i>
                            </ContactButton>
                        </Col>
                        <Col
                            style={{ justifyContent: 'center', display: 'flex' }}
                            className="mb-2"
                            xs={4} sm={4} lg={2} md={2} xl={2}>
                            <ContactButton>
                                <i className="fab fa-dribbble"></i>
                            </ContactButton>
                        </Col>
                        <Col
                            style={{ justifyContent: 'center', display: 'flex' }}
                            xs={4} sm={4} lg={2} md={2} xl={2}>
                            <ContactButton>
                                <i className="fab fa-linkedin-in"></i>
                            </ContactButton>
                        </Col>
                        <Col
                            style={{ justifyContent: 'center', display: 'flex' }}
                            className='align-self-center' xs={4} sm={4} lg={2} md={2} xl={2}>
                            <ContactButton>
                                <i className="fab fa-instagram"></i>
                            </ContactButton>
                        </Col>
                        <Col
                            style={{ justifyContent: 'center', display: 'flex' }}
                            xs={4} sm={4} lg={2} md={2} xl={2}>
                            <ContactButton>
                                <i className="fab fa-whatsapp"></i>
                            </ContactButton>
                        </Col>
                    </Row>

                </ContactContainer>
                <Copyrigth>
                    {`© ${(new Date()).getFullYear()} • Casal de Desenvolvedores • Todos Direitos Reservados `}
                </Copyrigth>
            </Container>

        </>
    )
}

export default Footer;