import { ReactNode } from "react";
type FlexBoxProps = {
  gap?: string | number;
  justifyContent?: "center" | "space-between";
  alignItems?: "center" | "flex-start";
  direction?: "row" | "column";
  children: ReactNode;
};

export const FlexBox = ({
  gap = "0.5rem",
  justifyContent = "center",
  alignItems = "center",
  direction = "row",
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
      }}
    >
      {children}
    </div>
  );
};
