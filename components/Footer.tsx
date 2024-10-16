// components/Footer.tsx
import React from "react";
import  Link  from "next/link";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full md:font-syncopate bg-white dark:bg-gray-900 text-black dark:text-white py-4 ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-sm ">
          &copy; {currentYear} Asikur Rahman. All Rights Reserved.
        </p>
        <div className="flex space-x-4">

           <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/api`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            API
          </Link>
          <Link
            href="https://github.com/awebcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/awebcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/awebcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
