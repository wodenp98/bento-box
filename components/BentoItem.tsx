// components/BentoItem.tsx

import React, { ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  colStart?: string;
  colSpan?: string;
  rowStart?: string;
  rowSpan?: string;
  className?: string;
}

const BentoItem: React.FC<BentoItemProps> = ({
  children,
  colStart = "col-start-1",
  colSpan = "col-span-1",
  rowStart = "row-start-1",
  rowSpan = "row-span-1",
  className = "",
}) => {
  return (
    <div
      className={`${colStart} ${colSpan} ${rowStart} ${rowSpan} ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoItem;
