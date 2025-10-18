import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  body {
    font-family: "Degular";
    min-height: 100vh;
   
  }


  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration:none;
  }


  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    box-shadow: 12px 12px 4px #f5f5f5f; 
     }

  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

 
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  } 
   &::-webkit-scrollbar {
    width: 10px;
  }

  
  div[role='responsive-region'], main section{
        ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  
`;
