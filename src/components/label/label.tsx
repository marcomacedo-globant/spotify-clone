import React, { ReactNode } from "react";
import styles from "./label.module.scss";
import classNames from "classnames";

export type LabelProps = {
  children: ReactNode;
  className?: string;
};

export const Label = ({ className, children }: LabelProps) => {
  return <p className={classNames(styles.label, className)}>{children}</p>;
};
