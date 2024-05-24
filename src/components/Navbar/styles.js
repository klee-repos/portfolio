import { css } from "@emotion/react";
import theme from "../../theme";

export const Container = css`
  display: flex;
  padding: 20px;
`;

export const Left = css`
  display: flex;
  flex: 1 1 20%;
  align-items: center;
`;

export const Right = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 80%;
  gap: 10px;
`;

export const Logo = css`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  font-family: ${theme.logoFontFamily};
`;

export const SayHello = css`
  display: flex;
  font-size: ${theme.buttonFontSize};
  line-height: ${theme.buttonLineHeight};
  padding: ${theme.buttonPadding};
  border-radius: ${theme.buttonBorderRadius};
  font-weight: ${theme.buttonFontWeight};
  &:hover {
    background-color: ${theme.primary300};
    border-radius: 10px;
  }
  &:active {
    background-color: ${theme.primary200};
  }
`;
