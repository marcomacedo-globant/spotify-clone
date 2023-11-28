import { ReactNode } from "react";

type GridProps = {
  gap?: string | number;
  rows: string;
  columns: string;
  children: ReactNode;
};

export const Grid = ({ gap, rows, columns, children }: GridProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gap,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
