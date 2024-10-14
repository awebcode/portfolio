import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FiFacebook } from "react-icons/fi";

export const DATA = {
  name: "Asikur Rahman",
  initials: "AR",
  url: "https://asikur-portfolio.vercel.app",
  location: "Bangladesh,BD",
  locationLink: "https://www.google.com/maps/place/bangladesh",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Express",
    "NestJS",
    "TailwindCSS",
    "Laravel",
    "Django",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "asikurrahaman997@gmail.com",
    tel: "+8801893585782",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/awebcode",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/awebcode/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/awebcode",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/awebcode",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:asikurrahaman997@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
      facebook: {
        name: "Facebook",
        url: "https://facebook.com/awebcodee",
        icon: FiFacebook,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "E-commerce Platform",
      href: "https://amazonecommerceapp.vercel.app",
      badges: [
        "Remote",
        "Medusa",
        "Open Source",
        "Full-Stack Development",
        "Payload",
        "Strapi",
      ],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/icons/ecommerce-icon.png",
      start: "July 2023",
      end: "Present",
      description:
        "Developed scalable backend services for an eCommerce system using Medusa. Integrated custom plugins and optimized APIs to improve checkout flows. Actively contributed to the open-source Medusa repository, improving documentation and core functionality.",
    },
    {
      company: "Freelance Projects",
      badges: ["Freelance", "Full-Stack Development", "Front End Development"],
      location: "Remote",
      title: "Freelance Developer",
      logoUrl: "/icons/freelance-icon.png",
      start: "October 2022",
      end: "Present",
      description:
        "Built custom websites and web applications for various clients using React, Next.js, and Node.js. Developed REST APIs, integrated payment gateways, and implemented real-time features using Socket.io. Collaborated with clients to meet deadlines and ensure satisfaction.",
    },
    {
      company: "Tech Internship Program",
      badges: ["Internship", "Individual & Team Collaboration"],
      location: "Remote",
      title: "Full-Stack Intern",
      logoUrl: "/icons/intern-icon.png",
      start: "March 2022",
      end: "September 2022",
      description:
        "Worked on individual and team projects, building web components with React and backend services using Node.js. Automated CI/CD pipelines and deployed microservices using Docker. Gained hands-on experience in Agile development.",
    },
    {
      company: "Open-Source Contribution Program",
      href: "https://github.com/awebcode",
      badges: ["Open Source", "Remote"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/icons/opensource-icon.png",
      start: "November 2021",
      end: "April 2023",
      description:
        "Collaborated on multiple open-source projects, focusing on building RESTful APIs and React components. Led bug-fixing efforts and contributed to documentation for developer onboarding. Developed testing suites using Jest to maintain high-quality code.",
    },
  ],

  education: [
    {
      school: "Northern University",
      href: "https://nub.ac.bd/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/icons/university-icon.png",
      start: "2025",
      end: "2029",
    },
    {
      school: "Jhenaidah Polytechnic Institute",
      href: "https://jhenaidah.polytech.gov.bd/",
      degree: "Diploma in Computer Science & Engineering",
      logoUrl: "/icons/jhpi-icon.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Artrium -Multipage Website",
      href: "https://artrium.vercel.app/",
      dates: "Jan 2022 - Feb 2022",
      active: true,
      description:
        "A multipage website showcasing creative artworks and design portfolios, optimized for seamless navigation and user engagement.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://artrium.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/artrium_app",
          icon: Icons.github,
        },
      ],
      image: "/images/xx1/ar1.png",
      video: "",
    },
    {
      title: "Ecommerce Website",
      href: "https://amazonecommerceapp.vercel.app/",
      dates: "June 2023 - October 2023",
      active: true,
      description:
        "Developed and sold animated UI components for developers, enhancing user experience and engagement on a modern eCommerce platform.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Stripe",
        "Paypal",
      ],
      links: [
        {
          type: "Website",
          href: "https://amazonecommerceapp.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Store",
          href: "https://github.com/awebcode/amazone_client",
          icon: Icons.github,
        },
        {
          type: "Admin",
          href: "https://github.com/awebcode/amazone_admin",
          icon: Icons.github,
        },
      ],
      image: "/images/xx1/1.png",
      video: "",
    },
    {
      title: "University Management System",
      href: "https://jhenaidahpolyasik.netlify.app",
      dates: "April 2022 - September 2022",
      active: true,
      description:
        "A web application to streamline university administration, featuring student registration, course management, and attendance tracking to enhance the educational experience.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Redux",
        "Frmaer-motion",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://jhenaidahpolyasik.netlify.app",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode",
          icon: Icons.github,
        },
      ],
      image: "/images/jhpi/about.png",
      video: "",
    },
    {
      title: "Chatiaa - Realtime Chat App",
      href: "https://chatiaa.vercel.app",
      dates: "April 2023 - March 2024",
      active: true,
      description:
      "A real-time chat application enabling seamless communication with user authentication, group chats, and message notifications for an enhanced chatting experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "React Query",
        "Redux Toolkit",
        "Zustand",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatiaa.vercel.app",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/chatiaa",
          icon: Icons.github,
        },
      ],
      image: "/images/chatiaa/1.jpeg",
      video: "",
    },
  ],
} as const;
