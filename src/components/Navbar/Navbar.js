import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <span className={styles.Logo}>KVN</span>
      </div>
      <div className={styles.Right}>
        <a
          className={styles.SayHello}
          href="mailto:kevin@kvnlee.com?subject=Hello 👋"
        >
          👋 Say Hello
        </a>
        <button type="button">Get Figma Access</button>
      </div>
    </div>
  );
};

export default Navbar;
