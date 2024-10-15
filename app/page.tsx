import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
// import FloatingDockButtons from "@/components/FloatingDock";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <div className="mx-auto w-full ">
      {/* max-w-2xl */}
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default page;
