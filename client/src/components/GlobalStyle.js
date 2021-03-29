import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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
    text-align: center;
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
  }
  `
/* weiß
 background-color: #ADA996;
 background: -webkit-linear-gradient(to bottom, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);
 background: linear-gradient(to bottom, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); 
 
 */

/* lila background-color:  #D3CCE3;
background: -webkit-linear-gradient(to bottom, #E9E4F0, #D3CCE3); 
background: linear-gradient(to bottom, #E9E4F0, #D3CCE3); */
