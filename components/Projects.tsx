"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
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
import { useMediaQuery } from "@uidotdev/usehooks";

const BLUR_FADE_DELAY = 0.1;
type ProjectWithLinks = Project & {
  links: LinkType[];
};
const Projects = () => {
  const isMobile=useMediaQuery("(max-width: 768px)");
  const INITIAL_ITEMS_COUNT =isMobile? 4 : 9;
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_COUNT);
  const [showAll, setShowAll] = useState(false);
  const [items, setItems] = useState<ProjectWithLinks[]>(DATA.projects as any); // Initialize items as an empty array

  useEffect(() => {
    // Fetch projects and set the items state
    getProjects()
      .then((fetchedProjects) => {
        console.log(fetchedProjects);

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
    setVisibleCount((prev) => Math.max(INITIAL_ITEMS_COUNT, prev - INITIAL_ITEMS_COUNT)); // Prevent going below INITIAL_ITEMS_COUNT
  };

  const handleToggle = () => {
    if (showAll) {
      setVisibleCount(INITIAL_ITEMS_COUNT);
    } else {
      setVisibleCount((prev) => prev + INITIAL_ITEMS_COUNT);
    }
  };

  useEffect(() => {
    if (visibleCount >= items.length) {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, [visibleCount, items.length]);

  return (
    <Wrapper id="projects" className="">
      <Container className=" mx-auto">
        <Link
          href="/project/new/create"
          className="group flex items-center justify-end text-right gap-2 text-primary hover:underline"
        >
          <span> Create New</span>{" "}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
        </Link>
        <div className="my-8">
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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mx-auto">
          {items.slice(0, visibleCount).map((project, id) => (
            <BlurFade key={project.id} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.id} // Use project.id for unique key
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={(project.links as any) || []}
                isDbProject={project.id?.length>15}
                projectId={project.id}
              />
            </BlurFade>
          ))}
        </div>
        <div className="flex-center gap-2 my-2">
          {visibleCount < items.length && !showAll && (
            <PrimaryButton onClick={handleShowMore}>Show More</PrimaryButton>
          )}

          {visibleCount > INITIAL_ITEMS_COUNT && !showAll && (
            <PrimaryButton onClick={handleShowLess}>Show Less</PrimaryButton>
          )}

          {visibleCount >= items.length && showAll && (
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
