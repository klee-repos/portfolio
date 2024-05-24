/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import * as styles from "./styles";

const FigmaIframe = ({ url }) => {
  return <iframe css={styles.FigmaIframe} src={url} allowfullscreen></iframe>;
};

FigmaIframe.propTypes = {
  url: PropTypes.string.isRequired,
};

export default FigmaIframe;
