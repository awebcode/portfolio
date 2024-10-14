import { cn } from "@/utils/cn";
import React from "react";
interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children, className = "", ...props }) => {
  return (
    <section
      className={cn(
        `py-4  md:py-6  flex justify-center items-center`,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Wrapper;
