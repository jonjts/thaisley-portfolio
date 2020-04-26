import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContentContainer = styled.div`
    width: 100%;
    margin: 0 auto;

    @media (min-width: 300px) {
        min-height: 100px
    }

    @media (min-width: 768px) {
        
    }


    @media (min-width: 992px) {

    }
`

export const MenuBar = styled.div`
    background-color: #fff;
    height: 18%;
    width: 100%;
    display: flex;    
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;


    @media (min-width: 300px) {
        position: sticky;
        top: 0;
        height: 193px;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;

        .select-button-container {
            width: 85%;
            height: 62px;

            div {
                font-size: 16px
            }
        }

        .subtitle{
            margin-bottom: 24px;
            margin-top: 10px;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        height: 128px;
        justify-content: space-around;
        top: 0;
        position: sticky;

        .select-button-container{
            width: 40%;
        }

        .subtitle{
            margin-bottom: 24px;
        }
    }

    @media (min-width: 992px) {
        height: 128px;
        justify-content: space-around;
        top: 0;
        position: sticky;
        justify-content: space-around;

        .select-button-container{
            width: 40%;
        }
        
        .subtitle{
            margin-bottom: 24px
        }
    }
`;