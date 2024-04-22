import React from "react";
import { cn } from "~/utils/cn";

interface BarProps {
  id?: string;
  className?: string;
}

export const ZekeBar: React.FC<BarProps> = ({ className, id }) => {
  return (
    <div id={id} className={cn("h-[3px] w-full rounded-full", className)}></div>
  );
};
