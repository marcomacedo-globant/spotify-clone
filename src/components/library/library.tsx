import { ReactNode } from "react";
import styles from "./library.module.scss";

type LibraryProps = {
  children: ReactNode;
};

export const Library = ({ children }: LibraryProps) => {
  return <section className={styles.library}>{children}</section>;
};
