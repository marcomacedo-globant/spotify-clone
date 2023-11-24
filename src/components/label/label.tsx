import React, { ReactNode } from "react";
import styles from "./label.module.scss";

type LabelProps = {
  children: ReactNode;
};

export const Label = ({ children }: LabelProps) => {
  return <p className={styles.label}>{children}</p>;
};
