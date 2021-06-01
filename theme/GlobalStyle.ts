import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #f2f2f2;
        color: #333;
        font-family: "Nunito";
    }
`;

export default GlobalStyle;