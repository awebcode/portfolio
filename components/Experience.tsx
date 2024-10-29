"use client"
import React from "react";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "./data/DATA";
import { ResumeCard } from "./ResumeCard";
import Container from "./reusables/contents/Container";
import Wrapper from "./reusables/contents/Wrapper";
import useMediaQuery from "@/hooks/useMediaQuery";
const BLUR_FADE_DELAY = 0.04;
const Experience = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Wrapper id="work" className="">
      <Container>
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={isMobile?0:BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold font-syncopate">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={isMobile?0:BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={(work as any).href ?? "#"}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Experience;
