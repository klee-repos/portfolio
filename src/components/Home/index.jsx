/** @jsxImportSource @emotion/react */
import Navbar from "../Navbar";
import DesignList from "../DesignList";
import Footer from "../Footer";
import * as styles from "./styles";

const Home = () => {
  return (
    <div css={styles.Container}>
      <div css={styles.Content}>
        <Navbar />
        <DesignList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
