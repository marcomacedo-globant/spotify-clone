import { ReactNode } from "react";

type LibraryProps = {
  children: ReactNode;
};

export const Library = ({ children }: LibraryProps) => {
  return <section>{children}</section>;
};
