import { ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  );
};
