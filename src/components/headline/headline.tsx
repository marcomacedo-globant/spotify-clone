import classNames from "classnames";
import styles from "./headline.module.scss";

type HeadlineProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  variant: "main" | "sub";
  children: React.ReactNode;
};

export const Headline: React.FC<HeadlineProps> = ({
  as = "h1",
  variant,
  children,
}) => {
  const Component = as;
  return (
    <Component className={classNames(styles[variant])}>{children}</Component>
  );
};
