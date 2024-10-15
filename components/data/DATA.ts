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
      company: "E-commerce Platforms",
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
      image: "", ///images/xx1/ar1.png
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959577/portfolio-videos-never-delete/2024-10-15_08-14-15_zf9lfd.mkv",
    },
    {
      title: "Amazon Ecommerce",
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
        "Cloudinary",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://amazonecommerceapp.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Github Client",
          href: "https://github.com/awebcode/amazone_client",
          icon: Icons.github,
        },
        {
          type: "Github Admin",
          href: "https://github.com/awebcode/amazone_admin",
          icon: Icons.github,
        },
      ],
      image: "", ///images/xx1/1.png
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959608/portfolio-videos-never-delete/2024-10-15_08-17-01_s8rbsy.mkv",
    },
    {
      title: "Quickbuy - Ecommerce",
      href: "https://quickbuy-store.vercel.app/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Developed and sold animated UI components for developers, enhancing user experience and engagement on a modern eCommerce platform.",
      technologies: [
        "Next.js",
        "Express.js",
        "Medusa",
        "Strapi",
        "Prisma",
        "Typescript",
        "PostgreSQL",
        "Redis",
        "TailwindCSS",
        "Stripe",
        "Paypal",
        "Sendgrid",
        "Cloudinary",
      ],
      links: [
        {
          type: "Store",
          href: "https://quickbuy-store.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Admin",
          href: "https://quickbuy-admin.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Api",
          href: "https://medusa-ecommerce-1.onrender.com/health",
          icon: Icons.globe,
        },
        {
          type: "Github",
          href: "https://github.com/awebcode/quickbuy-ecommerce",
          icon: Icons.github,
        },
      ],
      image: "", ///images/xx1/1.png
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959639/portfolio-videos-never-delete/2024-10-15_08-02-35_iat4ov.mkv",
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
        "Express.js",
        "MongoDB",
        "Redux",
        "Framer-motion",
        "Firebase",
        "Lightbox Gallery",
        "Swiper",
      ],
      links: [
        {
          type: "Website",
          href: "https://jhenaidahpolyasik.netlify.app",
          icon: Icons.globe,
        },
        {
          type: "Github",
          href: "https://github.com/awebcode",
          icon: Icons.github,
        },
      ],
      image: "", ///images/jhpi/about.png
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959595/portfolio-videos-never-delete/2024-10-15_08-13-04_ovefi5.mkv",
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
    {
      title: "Welcome Homes -House Builder App",
      href: "https://housebuilder.vercel.app",
      dates: "January 2023 - February 2023",
      active: true,
      description:
        "Welcome Homes is a house builder app that streamlines the home construction process, offering project management, real-time updates, and easy collaboration between homeowners and contractors.",
      technologies: [
        "Next.js",
        "Redux",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Google Maps",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://housebuilder.vercel.app",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/welcome-home-kaya",
          icon: Icons.github,
        },
      ],
      image: "", ///images/chatiaa/1.jpeg
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959627/portfolio-videos-never-delete/2024-10-15_08-09-22_jfxicf.mkv",
    },
    {
      title: "Sales Manager -Sales Management App",
      href: "https://sales-asikur.vercel.app/",
      dates: "September 2024 -September  2024",
      active: true,
      description:
        "Sales Manager is a sales management app designed to track leads, manage customer relationships, and monitor sales performance with real-time analytics and reporting.",
      technologies: ["Next.js", "TailwindCSS", "ShadCn", "Figma"],
      links: [
        {
          type: "Website",
          href: "https://sales-asikur.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/sales",
          icon: Icons.github,
        },
      ],
      image: "", ///images/chatiaa/1.jpeg
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959620/portfolio-videos-never-delete/2024-10-15_08-06-15_wkaxyh.mkv",
    },
    {
      title: "Study Destination – Education Management App",
      href: "https://studydistenation.vercel.app/",
      dates: "September 2024 -September  2024",
      active: true,
      description:
        "An education management app for organizing courses, tracking progress, managing assignments, and enabling seamless collaboration.",
      technologies: ["Next.js", "TailwindCSS", "ShadCn", "Figma"],
      links: [
        {
          type: "Website",
          href: "https://studydistenation.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/sales",
          icon: Icons.github,
        },
      ],
      image: "", ///images/chatiaa/1.jpeg
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959608/portfolio-videos-never-delete/2024-10-15_08-07-47_fs6ngk.mkv",
    },
    {
      title: "Portfolio 2020 - Portfolio Website",
      href: "https://asikurportfolio.netlify.app/",
      dates: "April 11, 2020 - April 12,  2020",
      active: true,
      description:
        "A showcase of projects, skills, and achievements, designed to highlight personal and professional growth through an elegant and responsive web experience.",
      technologies: ["HTML5", "CSS3", "Javascript", "Jquery"],
      links: [
        {
          type: "Website",
          href: "https://asikurportfolio.netlify.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/",
          icon: Icons.github,
        },
      ],
      image: "", ///images/chatiaa/1.jpeg
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959581/portfolio-videos-never-delete/2024-10-15_08-24-36_hojzch.mkv",
    },
    {
      title: "Portfolio 2023 - Portfolio Website",
      href: "https://asikur.vercel.app/",
      dates: "Feb  2023 - April  2023",
      active: true,
      description:
        "A showcase of projects, skills, and achievements, designed to highlight personal and professional growth through an elegant and responsive web experience.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Firebase",
        "Node.js",
        "Express.js",
        "Socket.Io",
        "ChakraUi",
        "MongoDB",
        "Facebook",
        "Google",
      ],
      links: [
        {
          type: "Website",
          href: "https://asikur.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/asikur-portfolio",
          icon: Icons.github,
        },
      ],
      image: "", ///images/chatiaa/1.jpeg
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959584/portfolio-videos-never-delete/2024-10-15_08-26-19_hs73e3.mkv",
    },

    {
      title: "Portfolio Latest",
      href: "https://asikur-portfolio.vercel.app/",
      dates: "October  2024 - Present",
      active: true,
      description:
        "A showcase of projects, skills, and achievements, designed to highlight personal and professional growth through an elegant and responsive web experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "ShadCn",
        "Prisma",
        "PostgreSQL",
        "Resend",
        "Cloudinary",
        "Framer Motion",
        "Vercel",
        "Github",
      ],
      links: [
        {
          type: "Website",
          href: "https://asikur-portfolio.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/portfolio",
          icon: Icons.github,
        },
      ],
      image: "", ///images/chatiaa/1.jpeg
      video:
        "https://res.cloudinary.com/asikur/video/upload/v1728959597/portfolio-videos-never-delete/2024-10-15_08-10-19_gprydw.mkv",
    },

    {
      title: "DuoLancer – Earning & Multi-Referral Platform",
      href: "https://duolancer.vercel.app/",
      dates: "January 2023 - April  2023",
      active: true,
      description:
        "DuoLancer is a platform combining earning opportunities with a nested referral system, enabling users to earn through multiple streams and manage referrals efficiently.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Material UI",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Framer-Motion",
        "Recharts",
        "Swiper",
        "Socket.Io",
        "Paypal",
        "Cloudinary",
        "Vercel",
        "Namecheap",
        "Github",
      ],
      links: [
        {
          type: "Website",
          href: "https://duolancer.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/awebcode/earning",
          icon: Icons.github,
        },
      ],
      image: "/images/xx1/du1.png", ///images/chatiaa/1.jpeg
      video: "",
    },
  ],
} as const;


// Positive Reviews
// Sample positive review sentences for a full-stack developer
export const positiveReviews = [
  "Working with this developer was a game-changer for our project. Highly recommended!",
  "Exceptional skills and a true professional. My project was completed ahead of schedule!",
  "Their attention to detail and understanding of user experience is outstanding.",
  "This developer brought our vision to life with their expertise and creativity.",
  "They took the time to understand our needs and delivered a top-notch solution.",
  "Highly communicative and collaborative. I couldn't ask for a better partner!",
  "The quality of their work is impeccable. Truly exceeded my expectations!",
  "Fantastic problem-solving skills! They tackled challenges with ease.",
  "I appreciate their dedication and commitment to delivering results.",
  "A reliable and talented developer who is always willing to go the extra mile.",
  "Their knowledge of both front-end and back-end technologies is impressive.",
  "They transformed our outdated platform into a modern, user-friendly experience.",
  "I was blown away by their innovative ideas and implementation.",
  "Great understanding of project management and timelines.",
  "They provided excellent support even after the project was completed.",
  "I would not hesitate to hire them again for future projects.",
  "Their work helped us streamline our processes significantly.",
  "I love how they take feedback and iterate quickly. Very agile!",
  "A true expert in their field. Their coding skills are top-notch!",
  "Thanks to them, we launched on time and on budget!",
  "They helped us navigate technical challenges with ease.",
  "I appreciate their ability to explain complex technical concepts clearly.",
  "They delivered exactly what we needed, and more!",
  "An absolute pleasure to work with. Highly professional and skilled.",
  "Their debugging skills saved us countless hours of frustration.",
  "I was impressed with how quickly they adapted to our workflow.",
  "They provided valuable insights that improved our overall project outcome.",
  "The user interface they created is beautiful and intuitive.",
  "Their collaborative approach made the entire process enjoyable.",
  "I'm grateful for their support during our busy launch period.",
  "Their commitment to quality is evident in everything they do.",
  "A developer who genuinely cares about their clients and their success.",
  "I highly recommend them to anyone looking for a full-stack developer!",
];
