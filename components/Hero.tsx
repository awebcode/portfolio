"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Container from "./reusables/contents/Container";
import PrimaryButton from "./reusables/buttons/PrimaryButton";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import GoToArrowDown from "./reusables/contents/GoToArrowDown";
import { Spotlight } from "./ui/spotlight";
import { Cover } from "./ui/cover";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Hero() {
   const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    
    <BackgroundBeamsWithCollision className="relative min-h-screen h-full">
      <Spotlight className="top-14 left-10 md:left-52 md:-top-20 " fill="white" />
      <HeroHighlight containerClassName=" bg-white dark:bg-black shadow-none min-h-screen h-full py-10">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center font-opensans text-4xl md:text-6xl font-extrabold text-neutral-800 dark:text-white"
          >
            <span className="font-syncopate"> Hi, I’m </span>
            <Cover>
              <span className="font-bold font-glory text-transparent  bg-gradient-to-r from-violet-500 via-pink-400 to-emerald-400  bg-clip-text">
                Asikur Rahman
              </span>{" "}
            </Cover>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: isMobile ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isMobile ? 0 : 0.2, duration: isMobile ? 0.1 : 0.5 }}
            className="mt-4 font-opensans text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl text-center mx-auto"
          >
            I build beautiful interfaces , real-time and full-stack applications using
            modern web technologies like
            <span className="font-semibold"> Next.js,</span>{" "}
            <span className="font-semibold">Node.js,</span>, and{" "}
            <span className="font-semibold">Medusa</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isMobile ? 0.2 : 0.4, duration: isMobile ? 0.1 : 0.5 }}
            className="mt-8 flex justify-center space-x-6"
          >
            <PrimaryButton href="#projects">Explore My Work</PrimaryButton>

            <PrimaryButton href="#contact" className="bg-primary hover:bg-indigo-400">
              Get in Touch
            </PrimaryButton>
          </motion.div>
        </Container>
      </HeroHighlight>
      <GoToArrowDown to="about" className="block" />
    </BackgroundBeamsWithCollision>
  );
}
