// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full md:font-syncopate bg-white dark:bg-gray-900 text-black dark:text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-sm ">
          &copy; {currentYear} Asikur Rahman. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/awebcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/awebcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/awebcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
