import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body 
  {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.neutral.lightGray};
    color: ${({ theme }) => theme.colors.primary.marineBlue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export default GlobalStyle;
