import styled from 'styled-components';

export const BackButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 170px;

  margin-top: 100px;
  margin-bottom: 92px;

  label {
      cursor: pointer;
  }
`;

export const ContenContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ContainerSeeMore = styled.div`

  margin-bottom: 54px;

  label{
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    display: flex;
    align-items: center;
    letter-spacing: 0.5px;

  }
`