import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import RootCol from 'react-bootstrap/Col'
import RootNav from 'react-bootstrap/Nav';

export const Nav = styled(RootNav)`
    
    .nav-link{
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 150%;
        color: #fff !important;
        letter-spacing: 0.5px;   
    }

    .active{
        border-bottom: 1px #27AE60 solid ;
    }

    .navbar-nav{
        flex: 1;
        justify-content: center
    }
`

export const ContactColumn = styled(RootCol)`
    @media (min-width:  768px) {
        margin-right: 20px;
    }

    
    @media (max-width: 768px) {
        width: 40px
    }

    justify-content: center;
    display: flex;
    margin-bottom: 24px

`

export const ContactButton = styled(Button)`
    border-radius: 50%;
    border: 1px solid #FFFFFF;

    :hover{
        background-color: #8ED0BD;
        color: #242424
    }
`

export const Container = styled.div`
    @media (min-width:  768px) {
        height: 381px;
        margin-top: 120px;
    }

    @media (max-width: 768px) {
        height: 411px;
        margin-top: 50px
    }

    background-color: #242424;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 14px

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
    margin-top: 32px;
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