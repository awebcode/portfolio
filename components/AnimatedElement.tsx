// utils/AnimatedElement.tsx
"use client";

import React, { ElementType, forwardRef, Ref } from "react";
import { motion, MotionProps } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

interface AnimatedElementProps<T extends ElementType> extends MotionProps {
  children: React.ReactNode;
  as?: T; // Accept any HTML tag or React component
  className?: string;
  onClick?: React.ComponentPropsWithoutRef<T>["onClick"]; // Support event handlers
}

// Updated the component to be generic and accept props based on the element type
const AnimatedElement = <T extends ElementType = "div">(
  {
    children,
    as: Component = "div" as T,
    className,
    ...motionProps
  }: AnimatedElementProps<T>,
  ref: Ref<React.ElementRef<T>> // Set the ref type correctly
) => {
  const isMobile = useMediaQuery("max-width: 768px");

  // Ensure the Component is a valid element type for Framer Motion
  const MotionComponent = motion(Component as any); // Use `as any` to bypass the type error
  const WithoutMotion = Component as ElementType;
  if (isMobile) {
    return (
      <WithoutMotion
        ref={ref} // Using ref as is
        className={className}
        {...(motionProps as React.ComponentPropsWithoutRef<T>)} // Ensure motionProps are valid
      >
        {children}
      </WithoutMotion>
    );
  }

  return (
    <MotionComponent ref={ref} className={className} {...motionProps}>
      {children}
    </MotionComponent>
  );
};

// Forward ref correctly with generics
const ForwardedAnimatedElement = forwardRef(AnimatedElement);

ForwardedAnimatedElement.displayName = "AnimatedElement";

export default ForwardedAnimatedElement;
