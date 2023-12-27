import React from "react";
import styles from "./DesignList.module.scss";
import FigmaIframe from "./FigmaIframe";
import { v4 as uuidv4 } from "uuid";

const embedUrls = [
  "https://www.figma.com/file/2aH4bO3N0x527DDpv9vcFX/Color-Palette?type=design&node-id=0%3A1&mode=design&t=HJveCVT45RbuqJ8b-1",
  "https://www.figma.com/file/y3dwv3e04yIQxygKQUwtJY/LoopGenius-Home?type=design&node-id=0%3A1&mode=design&t=wpRlGWtWZw3YKTUo-1",
];

const DesignList = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ListOfDesigns}>
        {embedUrls.map((url) => (
          <FigmaIframe
            key={uuidv4()}
            url={`https://www.figma.com/embed?embed_host=share&url=${url}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignList;
