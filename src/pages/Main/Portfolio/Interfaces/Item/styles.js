import styled from 'styled-components'

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Img = styled.img`
    @media (min-width: 300px) {
        height: 330px;
        width: 300px
    }

    @media (min-width: 768px) {
        height: 597px;
        width: 597px;
        align-self: center;
    }


    @media (min-width: 992px) {
        height: 597px;
        width: 597px;
        align-self: center;
    }
`;

export const ImgPocket = styled.img`
    @media (min-width: 300px) {
        height: 200px
    }

    @media (min-width: 768px) {
        height: 597px;
        width: 790px;
        align-self: center;
    }


    @media (min-width: 992px) {
        height: 597px;
        width: 790px;
        align-self: center;
    }
`;

export const Tool = styled.img`
    width: 40px;
    height: 40px;
    justify-content: 'flex-end';
    align-items: 'flex-end';
`;

export const ImageItem = styled.div`
    display: flex;
    /* flex: 1;
    justify-content: center; */

`;

export const Container = styled.div`
    color: #fff;
    background-color: ${props => props.background};
    height: 82%;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 48px 48px 48px 48px;

    @media (min-width: 300px) {
        height:83%;
    }

    @media (min-width: 768px) {
        height: 82%;
        .title{
            margin-bottom: 10px
        }
    }


    @media (min-width: 992px) {
        height: 82%;
    }

`;

export const Description = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.5px;
`;