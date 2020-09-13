import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 .submit-button {
    border: 1px solid #242424;
    box-sizing: border-box;
    border-radius: 50px;
    width: 187px;
    height: 37px;
    color: #fff;
    background-color: #242424;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: flex-start;
    margin: 0px 0px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
 }
`