/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import * as styles from "./styles";
import GlobalStyles from "../../GlobalStyles";
import { RightArrow } from "../icons";
import Profile from "../Profile";
import Portfolio from "../Portfolio";

const EMAIL = "hello@kvnlee.com";
const SUBJECT = "👋 Hello";

const delayIncrement = 0.3;

const delays = [
  1 * delayIncrement,
  2 * delayIncrement,
  3 * delayIncrement,
  4 * delayIncrement,
  5 * delayIncrement,
  6 * delayIncrement,
];

const Home = () => {
  const handleSayHelloClick = () => {
    const mailtoUrl = `mailto:${encodeURIComponent(
      EMAIL
    )}?subject=${encodeURIComponent(SUBJECT)}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div css={styles.Container}>
      <GlobalStyles />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: delays[0],
          ease: [0, 0.71, 0.2, 1.01],
        }}
        css={styles.NameColumn}
      >
        <span css={styles.Name}>Kevin Lee</span>
      </motion.div>
      <div css={styles.ContentColumn}>
        <div css={styles.Column}>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: delays[1],
              ease: [0, 0.71, 0.2, 1.01],
            }}
            css={styles.H1}
          >
            All Things Digital
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: delays[2],
              ease: [0, 0.71, 0.2, 1.01],
            }}
            css={styles.H2}
          >
            Multi-disciplinary. Cross-functional.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: delays[3],
              ease: [0, 0.71, 0.2, 1.01],
            }}
            css={styles.ButtonContainer}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              css={styles.Button}
              onClick={() => {
                handleSayHelloClick();
              }}
            >
              <span>Say Hello</span>
              <RightArrow />
            </motion.button>
          </motion.div>
          <Profile delays={delays} />
          <Portfolio delays={delays} />
        </div>
        <div css={styles.ColumnFill}></div>
      </div>
    </div>
  );
};

export default Home;
