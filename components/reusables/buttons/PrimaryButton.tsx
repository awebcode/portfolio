"use client";
import React, { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { CoolMode } from "@/components/ui/cool-mode";

// Define the types for the Button Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  className?: string;
  isOutlineAnimation?: boolean;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: FC<ButtonProps> = ({
  children,
  onClick,
  iconLeft,
  iconRight,
  className,
  isOutlineAnimation = false,
  ...props
}) => {
  // Define animation props separately
  const animations = {
    whileTap: { scale: 0.95 },
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.3 },
  };

  return (
    <CoolMode>
      <motion.button
        {...animations}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.3 }}
        className={cn(
          "px-5 md:px-8 py-3 md:py-4  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] Brutal",
          className
        )}
        onClick={onClick}
        {...(props as any)}
      >
        {children}
      </motion.button>
    </CoolMode>
  );
};

export default PrimaryButton;
