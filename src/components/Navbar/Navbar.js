import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <span className={styles.Logo}>KVN</span>
      </div>
      <div className={styles.Right}>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
