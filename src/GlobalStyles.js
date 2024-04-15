import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        display: flex;
        width: 100%;
        height: 100vh;
        color: #222;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input , button {
        font-family: 'Roboto', sans-serif;
    }
`;