import styled from 'styled-components';

export const LinkedinButton = styled.a`
    padding: 4px;
    border: 1px solid #8ED0BD;
    box-sizing: border-box;
    border: none;
    width: 187px;
    height: 37px;
    background-color: transparent;
    color: #8ED0BD;

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
        display: flex;
        flex-direction: row;
        justify-content: center
    }

    @media (max-width: 768px) {
        padding: 35px 24px 24px 24px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column
    }
    
`

export const MeContainer = styled.div`
    @media (min-width:  768px) {
      padding: 65px 15% 0px 40px
    }

    @media (max-width: 768px) {
        padding: 35px 24px 24px 24px;
        justify-content: center;
        text-align: center
    }
`

export const WebHello = styled.h2`
    @media (min-width:  768px) {
        visibility: visible;
    }

    @media (max-width: 768px) {
       visibility: hidden;
       position: absolute;
    }

    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    /* or 112% */

    align-items: center;
    letter-spacing: 0.15px
`

export const PhoneHello = styled.h2`
    @media (min-width:  768px) {
        visibility: hidden;
        position: absolute;
    }

    @media (max-width: 768px) {
        visibility: visible;
        text-align: center;
    }

    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    /* or 112% */

    align-items: center;
    letter-spacing: 0.15px;

    small {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }
`

export const Description = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.5px;

    /* Primária */

    color: #242424;
`

export const DescriptionDetail = styled(Description)`

    color: #808080;
`

export const MyPhoto = styled.img`

    @media (min-width:  768px) {    
        width: 422px;
        height: 422px;  
    }

    @media (max-width: 768px) {
        width: 164px;
        height: 164px;
    }
`