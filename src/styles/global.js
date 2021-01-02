import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
  }
  body{
    font-size:18px;  
    position:relative;
    overflow: hidden;
    @media only screen and (max-width: 1200px) {
      & {
        overflow: unset;
      }
    }
    height:100vh;
    span,p,h1{
      color:${props=>props.theme.colors.text}
    }
    background-color:${props=>props.theme.colors.background}
  }
`;
// color:${(props) => props.theme.colors.text};  background:${(props) => props.theme.colors.background};
