import { css } from "@emotion/react";
import { themeOld } from "../../theme";

export const Container = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ListOfDesigns = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FigmaIframe = css`
  display: flex;
  width: 100%;
  height: 400px;
  border: none;
`;
export const DesignItem = css`
  border-radius: 24px;
  padding: 20px;
  background-color: ${themeOld.primary100};
`;

export const ShareContainer = css`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;
export const LogoButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  &:hover {
    background-color: ${themeOld.primary200};
    border-radius: 5px;
  }
  &:active {
    background-color: ${themeOld.primary100};
    border-radius: 5px;
  }
`;
