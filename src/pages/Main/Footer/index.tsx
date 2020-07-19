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
    Copyrigth,
    ContactColumn
} from './styles';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'


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
                    <Row 
                    className='align-items-center'
                    style={{justifyContent: 'center'}}
                    >
                        <ContactColumn
                            xs={6} sm={6} lg={2} md={2} xl={2}>
                            <ContactButton target='_blank' href='https://medium.com/@thaisley'>
                                <i className="fab fa-medium-m"></i>
                            </ContactButton>
                        </ContactColumn>
                        <ContactColumn
                            xs={6} sm={6} lg={2} md={2} xl={2}>
                            <ContactButton target='_blank' href='https://dribbble.com/thaisley'>
                                <i className="fab fa-dribbble"></i>
                            </ContactButton>
                        </ContactColumn>
                        <ContactColumn
                            xs={6} sm={6} lg={2} md={2} xl={2}>
                            <ContactButton target='_blank' href='https://www.linkedin.com/in/thaisley/'>
                                <i className="fab fa-linkedin-in"></i>
                            </ContactButton>
                        </ContactColumn>
                        <ContactColumn
                            xs={6} sm={6} lg={2} md={2} xl={2}>
                            <ContactButton target='_blank' href='https://www.instagram.com/thaisley.designer/'>
                                <i className="fab fa-instagram"></i>
                            </ContactButton>
                        </ContactColumn>
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