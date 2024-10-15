"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./reusables/contents/Container";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { HeroHighlight } from "./ui/hero-highlight";
import TitleSubtitle from "./reusables/contents/TitleSubtitle";
import { Spotlight } from "./ui/spotlight";
import BlurFade from "./ui/blur-fade";
import Wrapper from "./reusables/contents/Wrapper";

export default function About() {
  return (
    <Wrapper id="about">
    <BackgroundBeamsWithCollision className=" min-h-screen h-full">
      <Spotlight className="-top-10 left-10 md:left-32 md:-top-20" fill="white" />
      <HeroHighlight containerClassName="bg-white dark:bg-black  min-h-screen h-full py-10 ">
        <Container className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-10">
          {/* Left Section - About Me Text */}

          <BlurFade inView delay={0.5} className="md:w-1/2">
            <TitleSubtitle
              title={
                <>
                  <span className="text-primary">About </span> Me
                </>
              }
              subtitle="Get to know me"
            />
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              I’m Asikur Rahman, a full-stack developer with a passion for solving
              problems and building scalable web applications. My expertise spans both
              frontend and backend, including technologies like{" "}
              <span className="font-semibold text-primary">Next.js</span>,
              <span className="font-semibold text-primary">Express</span>,{" "}
              <span className="font-semibold text-primary">Socket.io</span>, and{" "}
              <span className="font-semibold text-primary">TypeScript</span>.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              I work with modern databases like{" "}
              <span className="font-semibold text-primary">PostgreSQL</span>
              and <span className="font-semibold text-primary">MongoDB</span> to ensure
              data integrity and performance. Using{" "}
              <span className="font-semibold text-primary">Prisma ORM</span> and{" "}
              <span className="font-semibold text-primary">Docker</span>, I streamline
              workflows and ensure efficient deployment.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              When I’m not coding, I enjoy learning new tools and technologies to stay
              ahead in the industry. My goal is to build impactful applications that solve
              real-world problems.
            </p>
          </BlurFade>

          {/* Right Section - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <BlurFade inView delay={0.5}>
              <Image
                src="/images/hero.png"
                alt="Asikur Rahman"
                width={1000}
                height={1000}
                className="rounded-lg  object-cover"
              />
            </BlurFade>
          </motion.div>
        </Container>
      </HeroHighlight>
    </BackgroundBeamsWithCollision>
    </Wrapper>
  );
}
