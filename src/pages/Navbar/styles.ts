import styled from 'styled-components';
import RootNavbar from 'react-bootstrap/Navbar'
import RootToggleButton from 'react-bootstrap/ToggleButton';
import RootToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export const ToggleButtonGroup = styled(RootToggleButtonGroup)`
  .active{
      background-color: #242424 !important
  }
`

export const ToggleButton = styled(RootToggleButton)`
    height: 16px;
    width: 24px;
    font-size: 10px;
    line-height: 12px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E4E4E4;
    border-color: transparent;
    color: #808080

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

    @media (max-width: 990px) {
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
