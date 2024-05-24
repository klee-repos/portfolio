/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import * as styles from "./styles";

const EMAIL = "hello@kvnlee.com";
const SUBJECT = "👋 Hello";

const Navbar = () => {
  const handleClick = () => {
    // Construct the mailto URL
    const mailtoUrl = `mailto:${encodeURIComponent(
      EMAIL
    )}?subject=${encodeURIComponent(SUBJECT)}`;

    // Open the mailto link in a new tab
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div css={styles.Container}>
      <div css={styles.Left}>
        <span css={styles.Logo}>KVN</span>
      </div>
      <div css={styles.Right}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            handleClick();
          }}
        >
          👋 Say Hello
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
