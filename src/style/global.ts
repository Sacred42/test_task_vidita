import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    #root{
     display:flex;
     justify-content: center;
    }
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
    }
}
`;
