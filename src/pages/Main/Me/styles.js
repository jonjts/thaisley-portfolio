import styled from 'styled-components'

export const ContactButton = styled.div`
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;

    :hover{
        color: #ccc;
        border-color: #ccc
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex: 1;
    margin: 24px 0 40px 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;
    padding-right: 120px;

    button {
        height: 48px;
        width: 200px;
        background-color: #fff;
        color: #000;
        background: #FFFFFF;
        border-radius: 50px;

        :hover{
            background-color: #ccc;
            color: #000
        }

        :focus {
            background-color: #ccc;
            color: #000
        }

        label {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            align-items: center;
            cursor: pointer;
        }
    }
    
    @media (min-width: 300px) {
        padding-top: 56px;
        height: 296px;
        padding-left: 36px;
        padding-right: 6px;

        button{
            position: fixed;
            bottom: 0;
            width: 100%;
            border: 0;
            border-radius: 0;
            background-color: #000;
            color: #fff;
            left: 0;
            right: 0;
            z-index: 1000;

            label {
                font-size: 23px;
                border-color: #000;
            }
        }
    }

    @media (min-width: 768px) {
        padding-left: 80px;
        padding-right: 200px;
            
        button {
            border: 1;
            height: 48px;
            width: 200px;
            background-color: #fff;
            color: #000;
            background: #FFFFFF;
            border-radius: 50px;
            position: relative;

            label {
                font-size: 16px;
            }
        }
    }


    @media (min-width: 992px) {
    }
`;

export const Button = styled.button`
`;