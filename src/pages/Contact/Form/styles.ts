import styled from 'styled-components';
import RootForm from 'react-bootstrap/Form'
import RootButton from 'react-bootstrap/Button'

export const ContactButton = styled(RootButton)`
    background: #8ED0BD;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    margin-right: 20px;
`

export const ContactButtonContainer = styled.div`
    display: flex;
    justify-content: space-space-between;
    flex: 1;
    margin-top: 24px;
    margin-bottom: 29px;
`

export const SubmitContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex:1;
    padding-top: 48px;
`

export const SubmitButtom = styled(RootButton)`
    border: 1px solid #242424;
    box-sizing: border-box;
    border-radius: 50px;
    width: 187px;
    height: 37px;
    color: #fff;
    background-color: #242424;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: flex-start;
    margin: 0px 0px;
    text-transform: uppercase;
`

export const Container = styled.div`
    @media (min-width:  768px) {
        padding: 53px 15% 40px 15%;
    }

    @media (max-width: 768px) {
        padding: 35px 24px 24px 24px;
    }

    display: flex;
    flex-direction: column;
`

export const Form = styled(RootForm)`

    @media (min-width:  768px) {
        width: 350px;
    }

    @media (max-width: 768px) {
        
    }

    justify-content: center !important;    
`

export const FormContainer = styled.div`
    @media (min-width:  768px) {
        justify-content: space-between
    }

    @media (max-width: 768px) {
        justify-content: center
    }

    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const HeaderContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Quadrado = styled.img`
    @media (min-width:  768px) {
        
    }

    @media (max-width: 768px) {
        visibility: hidden;
        position: absolute;
    }

    height: 170px;
    width: 170px

`
