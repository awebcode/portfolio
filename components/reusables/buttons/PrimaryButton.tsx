"use client";
import React, { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { CoolMode } from "@/components/ui/cool-mode";
import { useRouter } from "next/navigation";

// Define mutually exclusive prop types
type ButtonWithHref = {
  href?: string;
  onClick?: never; // `onClick` is not allowed if `href` is present
};

type ButtonWithOnClick = {
  onClick?: () => void;
  href?: never; // `href` is not allowed if `onClick` is present
};

// Define the full ButtonProps type by combining both
type ButtonProps = (ButtonWithHref | ButtonWithOnClick) &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    className?: string;
    isOutlineAnimation?: boolean;
    type?: "button" | "submit" | "reset";
  };

const PrimaryButton: FC<ButtonProps> = ({
  children,
  onClick,
  href,
  iconLeft,
  iconRight,
  className,
  isOutlineAnimation = false,
  type = "button",
  ...props
}) => {
  const router = useRouter();
  // Warn if both `href` and `onClick` are provided (this should never happen due to TypeScript)
  React.useEffect(() => {
    if (href && onClick) {
      console.warn(
        "[PrimaryButton]: Both 'href' and 'onClick' are provided. Please provide only one at a time."
      );
    }
  }, [href, onClick]);

  // Define animation props separately
  const animations = {
    whileTap: { scale: 0.95 },
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.3 },
  };

  // Handle navigation or click logic
  const goTo = () => {
    if (href && href.startsWith("#")) {
      const targetElement = document.getElementById(href.slice(1));
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    } else if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <CoolMode>
      <motion.button
        {...animations}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.3 }}
        className={cn(
          "px-5 md:px-8 py-3 md:py-4 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] Brutal",
          className
        )}
        onClick={goTo}
        type={type}
        {...(props as any)}
      >
        {children}
      </motion.button>
    </CoolMode>
  );
};

export default PrimaryButton;
