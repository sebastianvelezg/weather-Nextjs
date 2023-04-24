import { ColorsT } from "@/tokens/models/colors.model";
import { createGlobalStyle } from "styled-components";

type GlobalStylesProps = {
  theme: {
    TOKENS: ColorsT;
  };
};

// @ts-ignore
export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

  *, *::before, *::after {
    box-sizing: border-box;
    //border: 1px solid red !important;
  }


  * {
    margin: 0;
    font-family: sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }


  body {
    font-size: 1.6rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.TOKENS.T3.i800};
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  button {
    cursor: pointer;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
`;
