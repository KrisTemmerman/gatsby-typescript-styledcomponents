import { createGlobalStyle } from 'styled-components'

const ResetCSS = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline-color:white;

  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    color:#fff;
    margin-top: 0;
    font-family: 'Roboto',sans-serif;
  }

  body {
    font-family: 'Source Sans Pro',sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    background-color:black;
    color:#fff;
  }

  p{
    color:#fff;
    line-height: 2;
    margin: 0 0 1.7em 0;
  }
  
  input, textarea, select, button{font-family: 'Source Sans Pro',sans-serif;}

  ul,ol {
    margin: 0;
    padding: 0;
  }

  a {
      text-decoration:none;
      background-size: 3px 3px;
      color: #fff;
      border-bottom: 2px solid #fff;
  }

  a:hover {
    text-decoration: none;
    border-bottom: none;
  }

  blockquote{
    font-family: 'Roboto',sans-serif;
    font-weight: 500;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #f5f5f5;
  }

  pre[class*="language-"] {
    padding: 1.5em;
    margin: 2em 0;
    overflow: auto;
  }

  table {
    display: block;
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 2.7em;
    line-height: 1.6;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  table th{
    font-weight: 500;
  }

  table td,
  table th {
    border: 1px solid #dfe2e5;
    padding: .4em 1em;
  }

  .nav-sticky{
    .header {
      box-shadow: 0 0 15px rgba(0,0,0,.08);
      .navbar{
        @media (min-width: 1400px) {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        @media (min-width: 1200px) {
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
    }
    
  }
  .particles canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $color-black;
  z-index: -1;
  overflow: hidden;
}

`
export default ResetCSS
