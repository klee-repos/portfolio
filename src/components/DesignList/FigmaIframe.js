import React from "react";
import PropTypes from "prop-types";
import styles from "./DesignList.module.scss";

const FigmaIframe = ({ url }) => {
  return (
    <iframe className={styles.FigmaIframe} src={url} allowfullscreen></iframe>
  );
};

FigmaIframe.propTypes = {
  url: PropTypes.string.isRequired,
};

export default FigmaIframe;
