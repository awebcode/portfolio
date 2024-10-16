"use client";
import React, { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { CoolMode } from "@/components/ui/cool-mode";
import { useRouter } from "next/navigation";
import ShimmerButton from "@/components/ui/shimmer-button";
import useMediaQuery from "@/hooks/useMediaQuery";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
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
      <ShimmerButton shimmerDuration={isMobile?"5s":"3s"} onClick={goTo} className={cn(`shadow-2xl text-white `,className)}>
        <motion.span
          {...animations}
          transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.3 }}
          className={cn(
            " text-white  uppercase  transition duration-200 text-base/relaxed md:text-sm "
          )}
          type={type}
          {...(props as any)}
        >
          {children}
        </motion.span>
      </ShimmerButton>
    </CoolMode>
  );
};

export default PrimaryButton;
