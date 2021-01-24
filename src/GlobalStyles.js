import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: atialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #1c1c1c;
        width: 100%;
        color: #333333;
        font-size: 16px;
        margin: 0px;
        overflow-x: hidden;
    }
`