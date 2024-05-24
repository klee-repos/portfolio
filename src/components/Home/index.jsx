/** @jsxImportSource @emotion/react */
import Navbar from "../Navbar";
import DesignList from "../DesignList";
import Footer from "../Footer";
import * as styles from "./styles";
import GlobalStyles from "../../GlobalStyles";

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <div css={styles.Container}>
        <div css={styles.Content}>
          <Navbar />
          <DesignList />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
