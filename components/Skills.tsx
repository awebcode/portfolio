"use client"
import IconCloud, { type DynamicCloudProps } from "@/components/ui/icon-cloud";
import TitleSubtitle from "./reusables/contents/TitleSubtitle";
import Container from "./reusables/contents/Container";
import Wrapper from "./reusables/contents/Wrapper";
import { Badge } from "./ui/badge";
// File "Icon.tsx"
import { FaReact, FaNodeJs,FaDocker } from "react-icons/fa";
import {IoDocumentTextOutline,IoKeyOutline} from "react-icons/io5"
import {PiStack} from "react-icons/pi"
import useMediaQuery from "@/hooks/useMediaQuery";
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
  "graphql", // GraphQL for APIs
  "vuejs", // Vue.js framework
  "svelte", // Svelte framework
  "redux", // State management library
  "axios", // Promise-based HTTP client
  "webpack", // Module bundler
  "babel", // JavaScript compiler
  "eslint", // Linter for JavaScript
  "prettier", // Code formatter
  "tailwindcss", // Utility-first CSS framework
  "materialui", // React UI framework
  "bootstrap", // CSS framework
  "sass", // CSS pre-processor
  "sqlite", // Lightweight database
  "redis", // In-memory data structure store
  "jupyter", // Jupyter notebooks for data science
  "tensorflow", // Machine learning library
  "kubernetes", // Container orchestration
  "aws", // Amazon Web Services
  "azure", // Microsoft Azure
  "gcp", // Google Cloud Platform
  "heroku", // Cloud platform for apps
  "stripe", // Payment processing
  "webpack", // Module bundler for modern JavaScript applications
  "storybook", // UI component explorer
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
    icon: <FaReact className="w-8 h-8"/>, // Add an icon name if using Lucide or React Icons
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
    icon: <FaNodeJs  className="w-8 h-8"/>, // Add an icon name if using Lucide or React Icons
  },
  {
    title: "DevOps",
    items: ["Docker", "Nginx", "Github Actions"],
    icon: <FaDocker  className="w-8 h-8"/>, // Add an icon name if using Lucide or React Icons
  },
  {
    title: "Docs",
    items: ["Swagger", "Postman", "Insomnia"],
    icon: <IoDocumentTextOutline className="w-8 h-8"/>, // Add an icon name if using Lucide or React Icons
  },
  {
    title: "Familiarities (AUTH | CRUD)",
    items: ["PHP", "Laravel", "Vue"],
    icon: <IoKeyOutline className="w-8 h-8"/>,
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
    icon: <PiStack className="w-8 h-8" />,
  },
];

export default function Skills() {
  const isMobile = useMediaQuery("(max-width: 768px)");


  return (
    <Wrapper id="skills">
      <Container className=" mx-auto">
        <TitleSubtitle title="Skills" subtitle="I have experienced with." />

        {/* Icon cloud for visual appeal */}
        {/* <Meteors number={12} /> */}

        {!isMobile && <IconCloud iconSlugs={iconSlugs} />}

        {/* Render each technology category */}
        <div className="space-y-4 mt-6 grid grid-cols-1  md:grid-cols-2 gap-2">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className={`group p-4 flex flex-col gap-2 rounded-md  bg-gray-50 dark:bg-gray-800/80 shadow-sm 
              `}
            >
              <div className="w-12 bg-indigo-100 text-primary dark:bg-gray-700 p-2 rounded-full  dark:group-hover:!text-emerald-400 group-hover:!text-orange-400 dark:group-hover:!bg-gray-600 group-hover:!bg-orange-100 dark:hover:bg-gray-500 transition-all cursor-pointer">
                {/* Render Icon */}
                {tech.icon && tech.icon}
              </div>
              <h3 className="font-semibold font-syncopate text-neutral-800 dark:text-gray-100 text-lg">
                {tech.title}
              </h3>
              <ul className="flex flex-wrap gap-1">
                {tech.items.map((item, index) => (
                  <Badge
                    key={index}
                    className="bg-indigo-100 dark:bg-gray-700 text-indigo-500 dark:text-primary cursor-pointer dark:group-hover:!text-emerald-400 group-hover:!text-orange-400 dark:group-hover:!bg-gray-600 group-hover:!bg-orange-100  transition-all"
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






