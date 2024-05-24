import { css } from "@emotion/react";
import { theme } from "../../theme";

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
