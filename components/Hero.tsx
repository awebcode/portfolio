"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Container from "./reusables/contents/Container";
import PrimaryButton from "./reusables/buttons/PrimaryButton";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import GoToArrowDown from "./reusables/contents/GoToArrowDown";
export default function Hero() {
    return (
      <BackgroundBeamsWithCollision className="h-auto">
        <HeroHighlight containerClassName="bg-white dark:bg-black shadow-none">
          <Container>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-center text-5xl md:text-6xl font-extrabold text-neutral-800 dark:text-white"
            >
              Hi, I’m <span className="text-primary">Asikur Rahman</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            >
              Passionate Full-Stack Developer working with{" "}
              <span className="font-semibold text-primary">Next.js</span>,{" "}
              <span className="font-semibold text-primary">React</span>,{" "}
              <span className="font-semibold text-primary">Nest.js</span>, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex justify-center space-x-6"
            >
              <PrimaryButton href="#projects">
               View My Work
              </PrimaryButton>

              <PrimaryButton href="#contact" className="bg-primary hover:bg-indigo-400">
               Contact Me
              </PrimaryButton>
            </motion.div>
          </Container>
        </HeroHighlight>
        <GoToArrowDown to="contact"  />
      </BackgroundBeamsWithCollision>
    );
}
