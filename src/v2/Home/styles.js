import { css } from "@emotion/react";
import { theme } from "../../theme";

export const Container = css`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 100px 200px;
  box-sizing: border-box;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const NameColumn = css`
  display: flex;
  padding-top: 70px;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

export const Name = css`
  font-size: 28px;
  font-weight: 700;
`;

export const ContentColumn = css`
  display: flex;
`;

export const Column = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
`;

export const ColumnFill = css`
  display: flex;
  width: 30%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const H1 = css`
  font-size: 27px;
  font-weight: 700;
`;
export const H2 = css`
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonContainer = css`
  display: flex;
`;

export const Button = css`
  display: inline-flex;
  color: ${theme.color.red800};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  background: none;
  align-self: flex-start;
  gap: 5px;
`;
