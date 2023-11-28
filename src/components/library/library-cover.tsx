import classNames from "classnames";
import styles from "./library.module.scss";

type LibraryCoverProps = {
  src: string;
  alt: string;
  size?: "small" | "fluid-width";
};

export const LibraryCover = ({
  src,
  alt,
  size = "small",
}: LibraryCoverProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        styles["library-cover"],
        styles[`library-cover--${size}`]
      )}
    />
  );
};
