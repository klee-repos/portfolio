/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import * as styles from "./styles";
import PortfolioLinks from "../portfolioLinks";
import PortfolioPill from "../PortfolioPill";

const Portfolio = ({ delays }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delays[5],
        ease: [0, 0.71, 0.2, 1.01],
      }}
      css={styles.PortfolioContainer}
    >
      <span css={styles.SectionTitle}>Portfolio</span>
      <div css={styles.Portfolio}>
        {PortfolioLinks.map((link, index) => {
          return <PortfolioPill key={index} name={link.name} url={link.url} />;
        })}
      </div>
    </motion.div>
  );
};

Portfolio.propTypes = {
  delays: PropTypes.array.isRequired,
};

export default Portfolio;
