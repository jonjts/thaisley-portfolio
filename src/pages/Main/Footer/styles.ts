import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

export const ContactButton = styled(Button)`
    border-radius: 50%;
    border: 1px solid #FFFFFF;
`

export const Container = styled.div`
    @media (min-width:  768px) {
        height: 381px;
    }

    @media (max-width: 768px) {
        height: 411px;
        position: fixed;
    }

    background-color: #242424;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column

`
export const OndasContainer = styled.div`
    @media (min-width:  768px) {
        margin-top: -117px;
    }

    @media (max-width: 768px) {
        margin-top: -45px
    }
    display: flex;
    justify-content: center;
`

export const NavContainer = styled.div`

    margin-top: 58px;
    display: flex;
    justify-content: center;

    .btn-link{
        color: #fff
    }
`

export const Copyrigth = styled.div`

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 18px;
    /* identical to box height, or 180% */

    margin-top: 20px;
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    /* Branco */

    color: #FFFFFF;
`


export const ContactContainer = styled.div`

    @media (min-width:  768px) {    
       
    }

    @media (max-width: 768px) {
     
    }
    margin-top: 58px;
    display: flex;
    justify-content: center
    
`

export const Ondas = styled.img`
     @media (min-width:  768px) {
       width: 638px;
       height: 241px;
    }

    @media (max-width: 768px) {
        width: 241px;
        height: 91px;
    }
`

export const Dot = styled.div`

    height: 5px;
    width: 5px;
    background-color: #8ED0BD;
    border-radius: 50%;
    display: inline-block;
    align-self: center;
    margin: 0 25px 0 25px

    
`