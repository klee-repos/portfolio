/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import * as styles from "./styles";
import GlobalStyles from "../../GlobalStyles";
import { RightArrow } from "../icons";
import PortfolioLinks from "../portfolioLinks";
import PortfolioPill from "../PortfolioPill";

const EMAIL = "hello@kvnlee.com";
const SUBJECT = "👋 Hello";

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
      <div css={styles.NameColumn}>
        <span css={styles.Name}>Kevin Lee</span>
      </div>
      <div css={styles.ContentColumn}>
        <div css={styles.Column}>
          <span css={styles.H1}>All Things Digital</span>
          <span css={styles.H2}>Full-spectrum. Multi-disciplinary.</span>
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
          <span css={styles.Body}>A modern internet entrepreneur.</span>
          <span css={styles.Body}>
            I’ve built internet startups. I’ve launched AI systems for Fortune
            500 businesses. I’ve launched smart contracts on Blockchains.
          </span>
          <span css={styles.Body}>
            Hands on experience with every discipline in the product lifecycle.
            From Design to Development to Go-To-Market.
          </span>
          <span css={styles.Body}>
            Currently building the first Marketing AI Agent that can manage
            digital marketing for any business.
          </span>
          <div css={styles.PortfolioContainer}>
            <span css={styles.SectionTitle}>Portfolio</span>
            <div css={styles.Portfolio}>
              {PortfolioLinks.map((link, index) => {
                return (
                  <PortfolioPill key={index} name={link.name} url={link.url} />
                );
              })}
            </div>
          </div>
        </div>
        <div css={styles.ColumnFill}></div>
      </div>
    </div>
  );
};

export default Home;
