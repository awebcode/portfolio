"use client";

import React, { useEffect, useState } from "react";
const ProjectCard = dynamic(() => import("./ProjectCard"), {
  ssr: false,
  loading: () => <ProjectCardSkeleton />,
});
import BlurFade from "./ui/blur-fade";
import Wrapper from "./reusables/contents/Wrapper";
import Container from "./reusables/contents/Container";
import TitleSubtitle from "./reusables/contents/TitleSubtitle";
import PrimaryButton from "./reusables/buttons/PrimaryButton";
import { getProjects } from "@/app/(routes)/project/actions";
import type { Link as LinkType, Project } from "@prisma/client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DATA } from "./data/DATA";
import useMediaQuery from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import ProjectCardSkeleton from "./skeletons/ProjectCardSkeleton";

const BLUR_FADE_DELAY = 0.1;

type ProjectWithLinks = Project & {
  links: LinkType[];
};

const Projects = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const INITIAL_ITEMS_COUNT = isMobile ? 4 : 9;

  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_COUNT);
  const [showAll, setShowAll] = useState(false);
  const [items, setItems] = useState<ProjectWithLinks[]>(DATA.projects as any);

  useEffect(() => {
    // Fetch projects and set the items state
    getProjects()
      .then((fetchedProjects) => {
        setItems((prev) => [
          ...prev,
          ...fetchedProjects.filter(
            (project) =>
              !prev.some((existingProject) => existingProject.id === project.id)
          ),
        ]);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + INITIAL_ITEMS_COUNT);
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(INITIAL_ITEMS_COUNT, prev - INITIAL_ITEMS_COUNT));
  };

  const handleToggle = () => {
    setShowAll(!showAll);
    setVisibleCount(showAll ? INITIAL_ITEMS_COUNT : items.length);
  };

  useEffect(() => {
    setShowAll(visibleCount >= items.length);
  }, [visibleCount, items?.length]);

  return (
    <Wrapper id="projects" className="">
      <Container className="mx-auto">
        <div className="my-8 flex flex-col md:flex-row items-start gap-2 justify-between">
          <div className="basis-full md:basis-3/4">
            <TitleSubtitle
              subTitlePosition="bottom"
              title={
                <>
                  My <span className="text-primary">Projects</span>
                </>
              }
              subtitle="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
            />
          </div>
          <Link
            href="/project/new/create"
            className="group flex items-center justify-between text-right gap-2 text-primary hover:underline"
          >
            <span>Create New</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 mx-auto">
          {items.slice(0, visibleCount).map((project, id) => (
            <BlurFade
              key={project.id}
              delay={isMobile ? 0 : BLUR_FADE_DELAY * 3 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={(project.links as any) || []}
                isDbProject={project.isDbProject}
                projectId={project.id}
              />
            </BlurFade>
          ))}
        </div>
        <div className="flex justify-center gap-2 my-2">
          {visibleCount < items?.length && !showAll && (
            <PrimaryButton onClick={handleShowMore}>Show More</PrimaryButton>
          )}
          {visibleCount > INITIAL_ITEMS_COUNT && !showAll && (
            <PrimaryButton onClick={handleShowLess}>Show Less</PrimaryButton>
          )}
          {showAll && (
            <PrimaryButton
              className="bg-rose-500 hover:bg-red-300"
              onClick={handleToggle}
            >
              Show Less
            </PrimaryButton>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Projects;
