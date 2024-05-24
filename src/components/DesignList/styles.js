import { css } from "@emotion/react";
import theme from "../../theme";

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
  width: 600px;
  height: 400px;
  border: none;
  @media (min-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;
export const DesignItem = css`
  border-radius: 10px;
  padding: 20px;
  background-color: ${theme.primary100};
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
    background-color: ${theme.primary200};
    border-radius: 5px;
  }
  &:active {
    background-color: ${theme.primary100};
    border-radius: 5px;
  }
`;
