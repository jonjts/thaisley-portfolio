import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 672px;

    @media (max-width:  600px) {
        width: 334px;
    }

    .date{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 150%;
        /* identical to box height, or 18px */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.4px;
        margin-top: 40px;
        text-transform: capitalize;

        /* Gray 50 */

        color: #808080;
    }
`;
