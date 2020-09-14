import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    /* identical to box height, or 112% */

    display: flex;
    align-items: center;
    letter-spacing: 0.15px;

    /* Primária */

    color: #242424;

    margin-bottom: 40px;

    @media (max-width:  600px) {
      font-size: 22px;
    }
  }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const Dot = styled.div`
    background: #242424;
    border-radius: 50%;
    width: 8px;
    height: 8px;
`
export const LinkContainer = styled.div`

    margin-left: 24px;
    a {
        word-break: break-all;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.5px;
        
        color: #242424;


        @media (max-width:  600px) {
          font-size: 12px;
        }


    }
`