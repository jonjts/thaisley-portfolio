import React, { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom";

import { Container } from './styles';
import { Button } from 'react-bootstrap'

const ContactButton: React.FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    function handleGoToContact(e: React.MouseEvent) {
        e.preventDefault()
        navigate('/contact')
    }

    return (
        <Container
            className={className}
            style={style}
        >
            <h3>
                {
                    t('did_you_like')
                }
            </h3>
            <div>
                <Button
                    className='submit-button'
                    onClick={handleGoToContact}
                >
                    {
                        t('contact_me')
                    }
                </Button>
            </div>
        </Container>
    )
}

export default ContactButton;