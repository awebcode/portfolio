"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { GrProjects } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
export default function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },

    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },

    {
      name: "Projects",
      link: "#projects",
      icon: <GrProjects className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "API",
      link: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
      icon: <TbApi className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
