import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../Navbar/Navbar";
import DesignList from "../DesignList/DesignList";

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Navbar />
        <DesignList />
      </div>
    </div>
  );
};

export default Home;
