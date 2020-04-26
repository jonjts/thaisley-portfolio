import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    img {
        
    }
    
    @media (min-width: 300px) {
        min-height: 100px;

        img {
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        height: 100%
    }


    @media (min-width: 992px) {

    }
`;