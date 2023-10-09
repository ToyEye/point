import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
}

body {
    font-size: 14px;
    letter-spacing: 0.02em;
    background-color: ${({ theme }) => theme.mainBgColor};
}

a {
    text-decoration: none;
    color:inherit;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
    height:auto;
}

button {
    font-family: inherit;
    letter-spacing: inherit;
}

`;
