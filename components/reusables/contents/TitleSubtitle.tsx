// src/components/TitleSubtitle.jsx
import { cn } from "@/utils/cn";
import React from "react";

interface TitleSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle: string;
  leftLine?: boolean;
  titleClassName?: string;
  subTitleClassName?: string;
  subTitlePosition?: "top" | "bottom";
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  title,
  subtitle,
  leftLine = false,
  titleClassName = "",
  subTitleClassName = "",
  subTitlePosition = "top",
  ...props
}) => {
  return (
    <div className="text-left my-2 p-2" {...props}>
      {subTitlePosition === "top" && (
        <p
          className={cn(
            "inline-block text-primary dark:text-primary font-poppins tracking-widest relative  after:content-[''] after:absolute after:w-6 md:after:w-8 after:h-[1px] after:bg-primary after:top-1/2 after:-right-8 md:after:-right-12 after:transform after:-translate-y-1/2",
            leftLine
              ? "before:content-[''] before:absolute before:w-6 md:before:w-8 before:h-[1px] before:bg-primary before:top-1/2 before:-left-8 md:before:-left-12 before:transform before:-translate-y-1/2"
              : "before:hidden",
            titleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      <h1 className="text-3xl md:text-5xl font-thin text-black/80 dark:text-neutral-200 ">
        {title}
      </h1>
      {subTitlePosition === "bottom" && (
        <p
          className={cn(
            "inline-block  font-poppins tracking-widest relative   ",

            titleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleSubtitle;
