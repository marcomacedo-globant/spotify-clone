import { ReactNode } from "react";
import styles from "./card.module.scss";
import classNames from "classnames";

type CardProps = {
  children: ReactNode;
  className?: string;
  padding?: string;
};

export const Card = ({
  children,
  className,
  padding = "1rem 0.5rem",
}: CardProps) => {
  return (
    <div className={classNames(styles.card, className)} style={{ padding }}>
      {children}
    </div>
  );
};
