import { ReactNode } from "react";
import { Label, LabelProps } from "../label";
import ContentLoader from "react-content-loader";
import styles from "./library.module.scss";
import { Card } from "..";

type LibraryProps = {
  children: ReactNode;
};

export const Library = ({ children }: LibraryProps) => {
  return <section className={styles.library}>{children}</section>;
};

type LibrarySongName = LabelProps;
export const LibrarySongName = ({ children }: LibrarySongName) => {
  return <Label className={styles["song-name"]}>{children}</Label>;
};

export const LibrarySongCredits = ({ children }: LabelProps) => {
  return <Label className={styles["song-credits"]}>{children}</Label>;
};

export const LibraryLoadingRecord = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={66}
    viewBox="0 0 266 66"
    backgroundColor="#1a1a1a"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="" rx="6" ry="6" width="64" height="64" />
    <rect x="76" y="20" rx="2" ry="2" width="80" height="12" />
    <rect x="76" y="38" rx="2" ry="2" width="70" height="8" />
  </ContentLoader>
);

export const LibraryLoadingShorcut = () => (
  <Card padding="0" className={styles["loading-shorcut"]}>
    <ContentLoader
      speed={6}
      width="200"
      height={66}
      viewBox="0 0 200 66"
      backgroundColor="#2a2a2a"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="6" ry="6" width="64" height="64" />
      <rect x="76" y="25" rx="2" ry="2" width="80" height="12" />
    </ContentLoader>
  </Card>
);
