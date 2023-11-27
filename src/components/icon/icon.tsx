import classNames from "classnames";
import styles from "./icon.module.scss";

type IconProps = {
  name: string;
};

export const Icon = ({ name }: IconProps) => {
  return <span className={classNames(styles.icon, `icon-${name}`)}></span>;
};
