import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  // background addnew form
  --color-lightblack :#111;
  --color-white: white; // var(--color-white);
  --color-boxshadow: #eee; // var(--color-boxshadow);
  --color-transparent: transparent; // var(--color-transparent);
  --color-black: black; // var(--color-black);
  --color-grey: grey; // var(--color-grey);
  --color-cards: #ffffff; // var(--color-cards);
  }

  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family:  'Helvetica Neue', sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
    font-size:12px;
    height: 100vh;
    text-transform: uppercase;
    text-align: center !important;
    background-color: var(--color-white);
  }
  input{
    text-align:center;
    outline: none;
    caret-color: transparent;
    padding: 5px;
    font-size:12px;
    border:none;
    ::placeholder {
      letter-spacing: 0.2em;
      text-align: center;
      opacity: 1;
      text-transform: uppercase;
    }
    &:focus {
      box-shadow: 2px 3px #cc99ff;
    }
    button{
      outline: none;
      :focus {
    outline: black;
}}
    
    img {
      outline: black;
      :focus {
    outline: black;
}}
  }
  `
