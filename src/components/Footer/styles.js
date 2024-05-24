import { css } from "@emotion/react";
import theme from "../../theme";

export const Container = css`
  display: flex;
  padding: 20px;
`;

export const Row = css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const FooterText = css`
  color: ${theme.primary600};
`;