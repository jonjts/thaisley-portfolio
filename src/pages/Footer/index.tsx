import React from 'react';
import { useTranslation } from 'react-i18next'
import  ContactButton from 'react-bootstrap/Button'

import {
    useLocation
  } from "react-router-dom";

import {
    Container,
    Ondas,
    OndasContainer,
    Dot,
    NavContainer,
    ContactContainer,
    // ContactButton,
    Copyrigth,
    ContactColumn,
    Nav
} from './styles';
import Row from 'react-bootstrap/Row'


const ondasSrc = require('../../assets/images/ondas.png')

const Footer: React.FC = () => {

    const location = useLocation()
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <OndasContainer >
                    <Ondas src={ondasSrc} />
                </OndasContainer>
                <NavContainer>
                    <Nav>
                        <Nav.Link active={location.pathname === '/home'} href="/home">{t('menu.home')}</Nav.Link>
                        <Dot />
                        <Nav.Link active={location.pathname === '/about-me'} href="/about-me">{t('menu.about_me')}</Nav.Link>
                        <Dot />
                        <Nav.Link active={location.pathname === '/contact'} href="/contact">{t('menu.contact')}</Nav.Link>
                    </Nav>
                </NavContainer>
                <ContactContainer>
                    <Row
                        className='align-items-center'
                        style={{ justifyContent: 'center', gap: '32px' }}
                          
                    >
                        <ContactColumn >
                            <ContactButton target='_blank' href='https://medium.com/@thaisley'
                             >
                                <i className="fab fa-medium-m"></i>
                            </ContactButton>
                        </ContactColumn>
                        <ContactColumn >
                            <ContactButton target='_blank' href='https://dribbble.com/thaisley'>
                                <i className="fab fa-dribbble"></i>
                            </ContactButton>
                        </ContactColumn>
                        <ContactColumn >
                            <ContactButton target='_blank' href='https://www.linkedin.com/in/thaisley/'>
                                <i className="fab fa-linkedin-in"></i>
                            </ContactButton>
                        </ContactColumn>
                        <ContactColumn>
                            <ContactButton  target='_blank' href='https://www.instagram.com/thaisley.designer/'>
                                <i className="fab fa-instagram"></i>
                            </ContactButton>
                        </ContactColumn>
                    </Row>

                </ContactContainer>
                <Copyrigth>
                    {`${(new Date()).getFullYear()} • Casal de Desenvolvedores`}
                </Copyrigth>
            </Container>

        </>
    )
}

export default Footer;