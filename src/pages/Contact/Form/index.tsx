import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import axios from "axios";

import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import {
    Container,
    Quadrado,
    FormContainer,
    HeaderContainer,
    Form,
    SubmitButtom,
    SubmitContainer
} from './styles';
import {
    H2
} from '../../styles'

const quadradoSrc = require('../../../assets/images/quadrado.png')


interface IError {
    email?: boolean,
    nome?: boolean,
    mensagem?: boolean
}

interface IAlert {
    msg: string,
    color: string
}

console.log(process.env)
const ContactForm: React.FC = () => {

    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false)

    const [error, setError] = useState<IError>({} as IError)
    const [alert, setAlert] = useState<IAlert>({} as IAlert)

    async function handleSendEmail(): Promise<void> {
        if (validForm()) {
            setSending(true)
            await sendEmail()
        }
    }

    async function sendEmail() {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/send-email`,
                {
                    subject:`${name} <${email}>`,
                    body: `
                    Nome: ${name}
                    Email: ${email}
                    
${message}
                    `
                })

            setAlert({
                color: 'success',
                msg: t('contact.form.success_send')
            })
            setName('')
            setMessage('')
            setEmail('')
        } catch (error) {
            console.error(error)
            setAlert({
                color: 'danger',
                msg: t('contact.form.error_send')
            })
        }
        setSending(false)
        setTimeout(() => setAlert({} as IAlert), 8000)

    }

    function validForm(): boolean {
        const newError = {} as IError
        if (name.length === 0) {
            newError.nome = true
        }
        if (email.length === 0 || !validateEmail(email)) {
            newError.email = true
        }
        if (message.length === 0) {
            newError.mensagem = true
        }
        setError(newError)

        return Object.keys(newError).length === 0
    }

    function validateEmail(email: string) {
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <H2>
                    {t('contact.title')}
                </H2>
            </HeaderContainer>
            <FormContainer>
                <Quadrado src={quadradoSrc} />
                <Form validated={false}>
                    <Form.Group >
                        <Form.Label>{t('contact.form.name')}</Form.Label>
                        <Form.Control
                            isInvalid={error.nome}
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            isInvalid={error.email}
                            type="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>{t('contact.form.message')}</Form.Label>
                        <Form.Control
                            isInvalid={error.mensagem}
                            as='textarea'
                            value={message}
                            onChange={({ target }) => setMessage(target.value)}
                        />
                    </Form.Group>
                    <SubmitContainer>
                        <SubmitButtom
                            disabled={sending}
                            onClick={handleSendEmail}>
                            {
                                sending &&
                                <Spinner
                                    className='mr-2'
                                    size='sm'
                                    animation='border'
                                    variant='secondary'
                                />
                            }
                            {t('contact.send_email')}
                        </SubmitButtom>
                    </SubmitContainer>
                    <Alert
                        className='mt-2'
                        variant={alert.color}
                        onClose={() => setAlert({} as IAlert)}
                        transition
                        show={!!alert.msg}
                        dismissible>
                        <p>
                            {alert.msg}
                        </p>
                    </Alert>
                </Form>
                <Quadrado src={quadradoSrc} />
            </FormContainer>
        </Container>
    )
}

export default ContactForm;