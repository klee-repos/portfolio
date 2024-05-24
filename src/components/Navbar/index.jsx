/** @jsxImportSource @emotion/react */
import * as styles from "./styles";

const Navbar = () => {
  return (
    <div css={styles.Container}>
      <div css={styles.Left}>
        <span css={styles.Logo}>KVN</span>
      </div>
      <div css={styles.Right}>
        {window.innerWidth > 768 ? (
          <a
            css={styles.SayHello}
            href="mailto:kevin@kvnlee.com?subject=Hello 👋"
          >
            👋 Say Hello
          </a>
        ) : null}

        <button type="button">Get Figma Access</button>
      </div>
    </div>
  );
};

export default Navbar;
