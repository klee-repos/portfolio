/** @jsxImportSource @emotion/react */
import FigmaIframe from "./FigmaIframe";
import { v4 as uuidv4 } from "uuid";
import * as styles from "./styles";
import { XLogo, FacebookLogo } from "./logos";

const embedUrls = [
  "https://www.figma.com/file/2aH4bO3N0x527DDpv9vcFX/Color-Palette?type=design&node-id=0%3A1&mode=design&t=HJveCVT45RbuqJ8b-1",
  "https://www.figma.com/file/y3dwv3e04yIQxygKQUwtJY/LoopGenius-Home?type=design&node-id=0%3A1&mode=design&t=wpRlGWtWZw3YKTUo-1",
];

const DesignList = () => {
  return (
    <div css={styles.Container}>
      <div css={styles.ListOfDesigns}>
        {embedUrls.map((url) => (
          <div key={uuidv4()} css={styles.DesignItem}>
            <FigmaIframe
              url={`https://www.figma.com/embed?embed_host=share&url=${url}`}
            />
            <div css={styles.ShareContainer}>
              <a
                css={styles.LogoButton}
                href={`https://twitter.com/intent/tweet?text=https://www.figma.com/embed?embed_host=share&url=${url}`}
                target="_blank"
                rel="noreferrer"
              >
                <XLogo />
              </a>
              <a
                css={styles.LogoButton}
                target="_blank"
                rel="noreferrer"
                href={`https://www.facebook.com/sharer/sharer.php?u=${url};src=sdkpreparse`}
              >
                <FacebookLogo />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignList;
