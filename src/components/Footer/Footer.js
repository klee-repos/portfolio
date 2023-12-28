import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Row}>
        <span className={styles.FooterText}>© kvnlee</span>
        <span className={styles.FooterText}>San Francisco, CA</span>
      </div>
    </div>
  );
};

export default Footer;
