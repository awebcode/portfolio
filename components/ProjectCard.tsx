"use client";

import { deleteProject } from "@/app/(routes)/project/actions";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/cn";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import { toast } from "sonner";
import { Meteors } from "./ui/meteors";
import { Skeleton } from "./ui/skeleton";
import dynamic from "next/dynamic";
// Dynamically import the VideoPlayer component with no SSR (server-side rendering)
const VideoPlayer = dynamic(() => import("./VideoPlayer"), { ssr: false,loading:()=><Skeleton className="h-full w-full bg-muted rounded-xl" /> });
interface LinkItem {
  icon: React.ReactNode;
  type: string;
  href: string;
  name: string;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string | null;
  video?: string | null;
  links?: readonly LinkItem[];
  className?: string;
  isDbProject?: boolean;
  projectId?: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  href = "#",
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className = "",
  isDbProject = false,
  projectId,
}) => {

  const handleDelete = async () => {
    if (!projectId || !confirm("Are you sure you want to delete this project?")) return;
    try {
      // await deleteProject(projectId);
      toast.success("Project deleted successfully");
    } catch {
      toast.error("Failed to delete the project");
    }
  };

  const renderVideo = () => (
    <div className="relative mx-auto h-full w-full">
      <VideoPlayer
        src={video as any}
        title={title}
        onPlay={() => console.log(`${title} is playing`)}
        onEnd={() => console.log(`${title} has ended`)}
      />
      {/* {videoLoading && <Skeleton className="absolute h-full w-full bg-muted rounded-xl" />} */}
    </div>
  );

  const renderImage = () =>
    image && (
      <Image
        src={image}
        alt={title}
        // width={500}
        // height={300}
        loading="lazy"
        unoptimized
        className="h-full w-full object-contain"
        fill
      />
    );

  return (
    <Card
      className={cn(
        "group relative flex flex-col h-full overflow-hidden border bg-background transition-all hover:shadow-lg",
        className
      )}
    >
      {isDbProject && (
        <div className="absolute top-0 right-1 z-50 hidden p-2 group-hover:flex items-center gap-2">
          <Link
            href={`/project/new/${projectId}`}
            className="group p-2 rounded-full bg-gray-100 text-emerald-400 hover:underline"
          >
            <Edit className="h-3 w-3" />
          </Link>
          <span
            onClick={handleDelete}
            className="group p-2 rounded-full bg-gray-100 text-red-400 hover:underline cursor-pointer"
          >
            <Trash className="h-3 w-3" />
          </span>
        </div>
      )}
      <Link
        href={href}
        className={cn(
          "block relative cursor-pointer h-44 md:h-52"
        
        )}
      >
        {video ? renderVideo() : renderImage()}
      </Link>

      <CardHeader className="px-2">
        <CardTitle className="mt-1 text-base">{title}</CardTitle>
        <time className="text-xs font-sans">{dates}</time>
        {link && (
          <div className="hidden text-xs underline font-sans print:visible">
            {link}
          </div>
        )}
        <Markdown className="prose max-w-full text-pretty text-xs font-sans text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardHeader>

      <CardContent className="mt-auto px-2">
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-1 py-0 text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links&&links?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {links.map(({ icon, type,name, href }, idx) => (
              <Link key={idx} href={href} target="_blank">
                <Badge className="flex items-center gap-2 px-2 py-1 text-[10px]">
                  {icon}
                  {type||name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>

      <Meteors number={6} />
    </Card>
  );
};

export default ProjectCard;
