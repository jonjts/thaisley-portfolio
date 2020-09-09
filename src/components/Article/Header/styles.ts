import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;

   h1 {
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 68px;
    line-height: 120%;

    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    text-transform: uppercase;

    /* Primária */

    color: #242424;
  }

  caption{
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    letter-spacing: 0.5px;

    /* Primária */

    color: #242424;
  }

  @media (max-width:  600px) {
      h1{
        font-size: 32px;
      }

      caption {
        font-size: 14px;
      }

    }

`;

export const Banner = styled.img`
    width: 678px;
    height: 238px;
    margin: 80px 0 80px 0;

     @media (max-width:  600px) {
      width: 334px;
      height: 111px;
    }

`