import { css } from "@emotion/react";
import { theme } from "../../theme";

export const Pill = css`
  display: inline-flex;
  border-radius: 10px;
  border: 1px solid ${theme.color.grey300};
  background: #424243;
  padding: 4px 10px;
  justify-content: center;
  align-self: center;
  gap: 10px;
  cursor: pointer;
`;
