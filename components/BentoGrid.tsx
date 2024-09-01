// BentoGrid.tsx
import React from "react";

const BentoGrid = ({ children }: any) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-4 w-screen h-screen">
      {children}
    </div>
  );
};

export default BentoGrid;
