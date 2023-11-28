import { ReactNode } from "react";
type FlexBoxProps = {
  gap?: string | number;
  justifyContent?: "center" | "space-between" | "flex-start";
  alignItems?: "center" | "flex-start";
  direction?: "row" | "column";
  width?: string;
  children: ReactNode;
};

export const FlexBox = ({
  gap = "0.5rem",
  justifyContent = "center",
  alignItems = "center",
  direction = "row",
  width = "unset",
  children,
}: FlexBoxProps) => {
  return (
    <div
      style={{
        gap,
        justifyContent,
        alignItems,
        flexDirection: direction,
        display: "flex",
        width,
      }}
    >
      {children}
    </div>
  );
};
