import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import FloatingDockButtons from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <FloatingDockButtons />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default page;
