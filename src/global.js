import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.main};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: ${({ theme }) => theme.font.main};
  }
`;
