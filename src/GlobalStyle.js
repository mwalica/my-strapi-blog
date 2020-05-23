import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f2f2f2;
        color: #3B4C7C;
        font-size: 16px;
    }

    p {
        line-height: 1.8;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    strong {
        font-weight: 600;
        color: #233646;
    }


`;

export default GlobalStyle;
