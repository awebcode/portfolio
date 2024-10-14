import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FloatingDockButtons from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto w-full  space-y-8">
      {/* max-w-2xl */}
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <FloatingDockButtons />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default page;
