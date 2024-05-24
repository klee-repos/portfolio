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
`;

export const NameColumn = css`
  display: flex;
  padding-top: 60px;
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
  gap: 30px;
  box-sizing: border-box;
`;

export const ColumnFill = css`
  display: flex;
  width: 40%;
  box-sizing: border-box;
`;

export const H1 = css`
  font-size: 27px;
  font-weight: 700;
`;
export const H2 = css`
  font-size: 20px;
  font-weight: 600;
`;
export const Body = css`
  font-size: ${theme.font.size};
  line-height: ${theme.font.lineHeight};
  font-weight: ${theme.font.weight};
  color: ${theme.color.grey500};
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

export const SectionTitle = css`
  color: ${theme.color.red800};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const PortfolioContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Portfolio = css`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
`;
