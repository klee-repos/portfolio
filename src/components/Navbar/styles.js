import { css } from "@emotion/react";
import { themeOld } from "../../theme";

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
  font-family: ${themeOld.logoFontFamily};
`;

export const SayHello = css`
  display: flex;
  font-size: ${themeOld.buttonFontSize};
  line-height: ${themeOld.buttonLineHeight};
  padding: ${themeOld.buttonPadding};
  border-radius: ${themeOld.buttonBorderRadius};
  font-weight: ${themeOld.buttonFontWeight};
  &:hover {
    background-color: ${themeOld.primary300};
    border-radius: 10px;
  }
  &:active {
    background-color: ${themeOld.primary200};
  }
`;
