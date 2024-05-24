import { Global, css } from "@emotion/react";
import theme from "./theme";

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        scroll-behavior: smooth;
      }

      body {
        width: 100%;
        height: 100%;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: ${theme.primaryFontSize};
        font-family: ${theme.primaryFontFamily};
        background-color: ${theme.primary200};
      }

      a {
        text-decoration: none;
        cursor: pointer;
        color: black;
      }

      button {
        display: flex;
        border-radius: ${theme.buttonBorderRadius};
        cursor: pointer;
        background-color: ${theme.primary800};
        color: white;
        border: none;
        font-family: ${theme.primaryFontFamily};
        font-size: ${theme.buttonFontSize};
        line-height: ${theme.buttonLineHeight};
        padding: ${theme.buttonPadding};
        font-weight: ${theme.buttonFontWeight};
      }

      button:hover {
        background-color: ${theme.primary700};
      }

      button:active {
        background-color: ${theme.primary800};
      }
    `}
  />
);

export default GlobalStyles;
