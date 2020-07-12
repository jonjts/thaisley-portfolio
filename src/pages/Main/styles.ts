import styled from 'styled-components';
import RootNavbar from 'react-bootstrap/Navbar'

export const Navbar = styled(RootNavbar)`
    @media (min-width: 768px) {
        padding-left: 150px;
        padding-right: 150px;
    }

    .nav-link{
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 150%;
        color: #242424 !important;
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

export const Dot = styled.div`
    height: 5px;
    width: 5px;
    background-color: #242424;
    border-radius: 50%;
    display: inline-block;
    align-self: center;
    margin: 0 25px 0 25px
`

export const Brand = styled(RootNavbar.Brand)`
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
`
