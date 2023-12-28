import React from "react";
import Navbar from "../Navbar/Navbar";
import DesignList from "../DesignList/DesignList";
import Footer from "../Footer/Footer";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Navbar />
        <DesignList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
