"use client"
import IconCloud, { type DynamicCloudProps } from "@/components/ui/icon-cloud";
import TitleSubtitle from "./reusables/contents/TitleSubtitle";
import Container from "./reusables/contents/Container";
import Wrapper from "./reusables/contents/Wrapper";
import { Badge } from "./ui/badge";
import { useEffect,  useState } from "react";
// File "Icon.tsx"
import { FaReact, FaNodeJs,FaDocker } from "react-icons/fa";
import {IoDocumentTextOutline,IoKeyOutline} from "react-icons/io5"
import {PiStack} from "react-icons/pi"
const iconSlugs: DynamicCloudProps["iconSlugs"] = [
  "typescript",
  "javascript",
  "react",
  "nextjs",
  "nodejs",
  "python",
  "php",
  "laravel",
  "java",
  "express",
  "nestjs",
  "tailwindcss",
  "prisma",
  "mongodb",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "androidstudio",
  "figma",
  "zod",
];

const technologies = [
  {
    title: "Front-End",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux-Toolkit",
      "React-Query",
      "Zustand",
      "Zod",
      "React-Hook-Form",
    ],
    icon: <FaReact className="w-8 h-8 text-primary"/>, // Add an icon name if using Lucide or React Icons
  },
  {
    title: "Back-End",
    items: [
      "Node.js",
      "Express",
      "Nest.js",
      "Socket.io",
      "Apollo GraphQL",
      "Microservices Architecture",
    ],
    icon: <FaNodeJs  className="w-8 h-8 text-primary"/>, // Add an icon name if using Lucide or React Icons
  },
  {
    title: "DevOps",
    items: ["Docker", "Nginx", "Github Actions"],
    icon: <FaDocker  className="w-8 h-8 text-primary"/>, // Add an icon name if using Lucide or React Icons
  },
  {
    title: "Docs",
    items: ["Swagger", "Postman", "Insomnia"],
    icon: <IoDocumentTextOutline className="w-8 h-8 text-primary"/>, // Add an icon name if using Lucide or React Icons
  },
  {
    title: "Familiarities (AUTH | CRUD)",
    items: ["PHP", "Laravel", "Vue"],
    icon: <IoKeyOutline className="w-8 h-8 text-primary"/>,
  },
  {
    title: "Primary Stack",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Prisma (ORM)",
      "Shadcn",
      "Aceternity",
      "Material UI",
      "Framer Motion",
      "Swiper",
      "Auth.js",
      "Clerk",
      "Passport",
      "Firebase",
      "React Hook Form",
      "Zod",
      "Jest",
      "Next-Intl",
    ],
    icon: <PiStack className="w-8 h-8 text-primary" />,
  },
];

export default function Skills() {


  return (
    <Wrapper id="skills">
      <Container className="max-w-[850px] mx-auto">
        <TitleSubtitle title="Skills" subtitle="I have experience with" />

        {/* Icon cloud for visual appeal */}
        <IconCloud iconSlugs={iconSlugs} />

        {/* Render each technology category */}
        <div className="space-y-4 mt-6 grid grid-cols-1  md:grid-cols-2 gap-2">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className={`p-4 flex flex-col gap-2 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 
              `}
            >
              <div className="w-12 bg-indigo-100 p-2 rounded-full hover:bg-indigo-200 transition-all cursor-pointer">
                {/* Render Icon */}
                {tech.icon && tech.icon}
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-gray-100 text-lg">
                {tech.title}
              </h3>
              <ul className="flex flex-wrap gap-1">
                {tech.items.map((item, index) => (
                  <Badge
                    key={index}
                    className="bg-indigo-100 text-indigo-500 cursor-pointer hover:!text-blue-500 hover:bg-violet-50"
                  >
                    {item}
                  </Badge>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}






