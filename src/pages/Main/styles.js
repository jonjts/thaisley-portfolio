import styled from 'styled-components'

export const Container = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media (min-width: 300px) {
        flex-direction: column;
    }

    @media (min-width: 768px) {
        flex-direction: row-reverse;
    }


    @media (min-width: 992px) {
        
    }
`;

export const Sidebar = styled.div`
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;


    @media (min-width: 300px) {
        position: relative;
        width: 100%;
        height: 296px;
    }

    @media (min-width: 768px) {
        height: 100%;
        width: 33%;
        position: fixed;
    }


    @media (min-width: 992px) {

    }
`;

export const Content = styled.div`
    position: static;

     @media (min-width: 300px) {
        width: 100%;
        margin-left: 0%;
        float: none;
        clear: none;
        margin-bottom: 48px;
    }

    @media (min-width: 768px) {
        width: 66.6%;
        margin-bottom: 0;
        position: relative;
    }


    @media (min-width: 992px) {

    }
`;