import { css } from "@emotion/react";
import { theme } from "../../theme";

export const BodyContainer = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Body = css`
  font-size: ${theme.font.size};
  line-height: ${theme.font.lineHeight};
  font-weight: ${theme.font.weight};
  color: ${theme.color.grey300};
`;
