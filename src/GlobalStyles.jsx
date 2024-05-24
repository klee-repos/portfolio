import { Global, css } from "@emotion/react";
import { theme } from "./theme";

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
        font-size: ${theme.font.size};
        font-family: ${theme.font.family};
        background-color: ${theme.color.grey800};
        color: white;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        color: black;
      }

      button {
        all: unset;
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyles;
