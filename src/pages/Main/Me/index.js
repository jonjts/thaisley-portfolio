import React from 'react';

import { Container, ContactButton, ContactContainer } from './styles.js'
import { H1, H5 } from '../styles/index.js'
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import {
    Button
} from 'reactstrap';


export default () => {

    function handleGoTo(path) {
        window.open(path, '_blank');
    }

    function handleSendEmail() {
        window.location.href = "mailto:thaisley@live.com?subject=&body=";
    }

    return (
        <>
            <Container>
                <H1>
                    Olá!
            </H1>
                <H5>
                Sou a Thaisley, Designer de Interface & Identidade Visual.
            </H5>
                <ContactContainer>
                    <ContactButton >
                        <FaLinkedinIn onClick={() => handleGoTo('https://www.linkedin.com/in/thaisley/')} />
                    </ContactButton>
                    <ContactButton>
                        <FaWhatsapp onClick={() => handleGoTo('https://wa.me/5579999270150?text=ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20um%20projeto%20novo')} />
                    </ContactButton>
                    <ContactButton>
                        <FaInstagram onClick={() => handleGoTo('https://www.instagram.com/thaisley.designer/')} />
                    </ContactButton>
                </ContactContainer>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button onClick={handleSendEmail}>
                        <label>
                            Conversar
                        </label>
                    </Button>
                </div>
            </Container>
        </>
    );
}
