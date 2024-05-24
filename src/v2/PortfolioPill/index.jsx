/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import * as styles from "./styles";

const PortfolioPill = ({ name, url }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      css={styles.Pill}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <span>{name}</span>
    </motion.button>
  );
};

PortfolioPill.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PortfolioPill;
