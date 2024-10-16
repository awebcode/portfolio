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

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string | null;
  video?: string | null;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
    name: string;
  }[];
  className?: string;
  isDbProject?: boolean;
  projectId?: string;
}

export default function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  isDbProject,
  projectId,
}: Props) {
  const [play, setPlay] = React.useState<string | null>(null);
  const [videoLoading, setVideoLoading] = React.useState(true);
  const deleteProjectHandler = async () => {
    if (projectId && confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(projectId);
        toast.success("Project deleted successfully");
      } catch (error) {
        toast.error("Failed to delete the project");
      }
    }
  };

  return (
    <Card
      className={
        "group relative flex bg-background flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {isDbProject && (
        <div className="hidden absolute top-0 right-1 group-hover:flex items-center justify-end gap-2">
          <Link
            href={`/project/new/${projectId}`}
            className="group p-2 cursor-pointer bg-gray-100 rounded-full text-emerald-400 flex items-center justify-end text-right gap-2 text-primary hover:underline transition-all"
          >
            <Edit className="h-3 w-3 " />
          </Link>
          <span
            onClick={deleteProjectHandler}
            className="group p-2 cursor-pointer bg-gray-100 rounded-full flex items-center text-red-400 justify-end text-right gap-2 text-primary hover:underline"
          >
            <Trash className="h-3 w-3 " />
          </span>
        </div>
      )}
      <Link
        href={href || "#"}
        className={cn(
          "block h-44 md:h-52 cursor-pointer",
          { "border border-primary": play === title },
          className
        )}
      >
        {video&&!image && (
          <div className="relative mx-auto h-full w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              autoFocus
              preload="auto"
              onPlay={() => setPlay(title)}
              onEnded={() => setPlay(null)}
              onError={() => setPlay(null)} // Optional: Handle error events
              onLoadStart={() => setVideoLoading(true)} // Set loading to true when video starts loading
              onLoadedData={() => setVideoLoading(false)} // Set loading to false when video data is loaded
              className={`pointer-events-none h-full w-full object-cover object-top ${
                videoLoading ? "hidden" : "block"
              }`} // Hide video while loading
            >
              <source src={video} type="video/mp4" />
              {/* You can add more source tags for different formats here */}
            </video>

            {/* Fallback content */}
            {videoLoading && (
              <Image
                src="/images/fallback3.png"
                alt={title}
                width={500}
                height={300}
                className="h-full w-full overflow-hidden object-cover object-top"
              />
            )}
          </div>
        ) }

        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type || link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
      {/* Meaty part - Meteor effect */}
      <Meteors number={6} />
    </Card>
  );
}
