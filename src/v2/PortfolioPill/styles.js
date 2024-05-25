import { css } from "@emotion/react";
import { theme } from "../../theme";

export const Pill = css`
  display: inline-flex;
  border-radius: 10px;
  background: #424243;
  padding: 6px 14px;
  justify-content: center;
  align-self: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${theme.color.grey500};
`;
