/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import * as styles from "./styles";

const Profile = ({ delays }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delays[4],
        ease: [0, 0.71, 0.2, 1.01],
      }}
      css={styles.BodyContainer}
    >
      <span css={styles.Body}>A modern internet entrepreneur.</span>
      <span css={styles.Body}>
        I’ve created internet startups. I’ve launched AI systems for Fortune 500
        businesses. I’ve launched smart contracts on Blockchains.
      </span>
      <span css={styles.Body}>
        Hands on experience with every core discipline in the product lifecycle.
        From Design to Development to Go-To-Market.
      </span>
      <span css={styles.Body}>
        Currently developing a Marketing AI Agent that can manage digital
        marketing for any business.
      </span>
    </motion.div>
  );
};

Profile.propTypes = {
  delays: PropTypes.array.isRequired,
};

export default Profile;
