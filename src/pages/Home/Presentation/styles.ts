import styled from 'styled-components';

export const Container = styled.div`

    @media (min-width: 768px) {
      height: 400px
    }

    @media (max-width: 768px) {
        margin-bottom: 35px
    }

    display: flex;
    justify-content: center;
    position: relative
`

export const Quadrado = styled.img`
    @media (min-width:  768px) {
        right: 0;
        margin-right: 15%;
        height: 30%;
    }

    @media (max-width: 768px) {
        height: 52px;
        position: absolute;
        top:0;
    }

    position: absolute;
    top:0;
`

export const Retangulo = styled.img`
    @media (min-width:  768px) {
        left: 0;
        margin-left: 15%;
        height: 52%;
    }

    @media (max-width: 768px) {
        visibility: hidden;
    }

    position: absolute;
    bottom:0;
`

export const H1 = styled.div`

    @media (min-width:  768px) {
        font-size: 68px;
        margin-bottom: 56px;
    }

    @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 12px
    }

    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 68px;
    line-height: 36px;
    letter-spacing: 0.15px;
    text-transform: uppercase;
`

export const H3 = styled.div`

    @media (min-width:  768px) {
        font-size: 32px;
    }

    @media (max-width: 768px) {
        font-size: 16px
    }

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    letter-spacing: 0.5px;
`

export const TitleContainer = styled.div`
    @media (min-width:  768px) {
        margin-top: 10%;
    }

    @media (max-width: 768px) {
        margin-top: 35%;
    }

    display: flex;
    align-items: center;
    flex-direction: column;

`