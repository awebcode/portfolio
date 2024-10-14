import IconCloud, { type DynamicCloudProps } from "@/components/ui/icon-cloud";
import TitleSubtitle from "./reusables/contents/TitleSubtitle";
import Container from "./reusables/contents/Container";

const slugs: DynamicCloudProps["iconSlugs"] = [
  "typescript",
  "javascript",
  "react",
  "nextjs",
  "nodejs",
  "python",
  "expressjs",
  "nestjs",
  "android",
  "html5",
  "css3",
  "sass",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Skills() {
  return (
    <div className=" bg-white w-full dark:bg-black relative flex flex-col size-full  items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 ">
      <Container className="max-w-lg mx-auto">
        <TitleSubtitle title="Skills" subtitle="I have experienced with" />
        <IconCloud iconSlugs={slugs} />
      </Container>
    </div>
  );
}
