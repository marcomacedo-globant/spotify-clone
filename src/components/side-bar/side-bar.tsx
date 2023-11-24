import React from "react";
import styles from "./side-bar.module.scss";
import classNames from "classnames";

type SideBarProps = {
  children: React.ReactNode;
  isExpanded: boolean;
};
export const SideBar = ({ children, isExpanded }: SideBarProps) => {
  return (
    <nav
      className={classNames([
        styles.container,
        isExpanded && styles["is-expanded"],
      ])}
    >
      {children}
    </nav>
  );
};
