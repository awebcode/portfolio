import React from "react";
import Container from "./reusables/contents/Container";
import Wrapper from "./reusables/contents/Wrapper";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "./data/DATA";
import { ResumeCard } from "./ResumeCard";
const BLUR_FADE_DELAY = 0.04;
const Education = () => {
  return (
    <Wrapper id="education" >
      <Container>
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold font-syncopate">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Education;
