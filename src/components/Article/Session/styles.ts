import styled from 'styled-components';

export const Container = styled.div`
  
  h2 {
    margin-bottom: 40px;
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
  }

  h4{
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
  }

  @media (max-width:  600px) {
      h2{
          font-size: 24px;
      }

      h4 {
          font-size: 18px;
      }
    }


   
`;

export const Content = styled.div`
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
`

interface ImageContentProps {
    width: number,
    height: number
}

export const ImageContent = styled.img<ImageContentProps>`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    align-self: center;
    margin: 40px 0 40px 0;

    @media (max-width:  600px) {
        width: ${props => `${props.width / 2}px`};
        height: ${props => `${props.height / 2}px`};
    }

`