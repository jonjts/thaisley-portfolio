import styled from 'styled-components';
import RootCard from 'react-bootstrap/Card';

export const Card = styled(RootCard)<{ opacity: number; cursor: string }>`
  transition: 0.3s;
  cursor: ${props => props.cursor};

  @media (min-width: 1111px) {
    width: auto;
  }

  @media (min-width: 768px) {
    width: auto;
    max-width: 95%;
  }

  @media (max-width: 768px) {
    width: auto;
    max-width: 369px;
  }

  border-radius: 10px 10px 10px 10px;
  border-color: transparent;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

  :hover {
    opacity: ${props => props.opacity};
  }

  .loading {
    background-color: #e4e4e4;
    color: #e4e4e4;

    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.7;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  .invisible {
    display: none;
  }

  .gonne {
    visibility: hidden;
  }
`;

export const Sinnher = styled.div`
  width: 100%;
  height: 75%;
  z-index: 1;
  position: absolute;
  background-color: #e4e4e4;

  @media (min-width: 500px) {
    height: 75%;
  }

  @media (min-width: 1400px) {
    height: 80%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 13px;
  padding-left: 16px;
`;
