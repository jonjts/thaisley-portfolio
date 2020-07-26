import styled from 'styled-components';
import RootNavbar from 'react-bootstrap/Navbar'
import RootToggleButton from 'react-bootstrap/ToggleButton';
import RootToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


export const Container = styled.div`
   
`

export const ToggleButtonGroup = styled(RootToggleButtonGroup)`
    border: 1px solid #E4E4E4 !important;
    box-sizing: border-box !important;
    border-radius: 100px !important;
    padding: 8px;
    min-width: 304px;
    
    .active{
      background-color: #242424 !important
    }
`

export const ToggleButton = styled(RootToggleButton)`
    height: 40px;
    width: 24px;
    font-size: 14px;
    line-height: 12px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-color: transparent;
    border-radius: 100px !important;
    color: #808080;
    margin-right: 4px;

    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: none !important;
`

export const Navbar = styled(RootNavbar)`

  background-color: #fff !important;

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

    @media (max-width: 576px) {
        visibility: hidden
    }

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
