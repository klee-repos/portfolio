/** @jsxImportSource @emotion/react */
import * as styles from "./styles";

const Footer = () => {
  return (
    <div css={styles.Container}>
      <div css={styles.Row}>
        <span css={styles.FooterText}>© kvnlee</span>
        <span css={styles.FooterText}>Made in ☀️ California, USA</span>
      </div>
    </div>
  );
};

export default Footer;
