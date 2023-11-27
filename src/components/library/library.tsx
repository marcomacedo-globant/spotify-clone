import { ReactNode } from "react";
import { Label, LabelProps } from "../label";
import styles from "./library.module.scss";

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
