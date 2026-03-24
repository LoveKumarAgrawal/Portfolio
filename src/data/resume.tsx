import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Love Kumar Agrawal",
  initials: "LA",
  url: "https://www.linkedin.com/in/love-kumar-agrawal-898337281/s",
  location: "Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer who loves to code and build stuff.",
  summary:
    "Hey, I’m a software engineer passionate about system architecture, web3, and advanced algorithms. I’m currently a Software Engineer & Pod Lead at WhatBytes, where I work across the full stack building scalable backend services with Node.js, NestJS, and Django, developing clean and performant frontends with React and Next.js, and handling deployment pipelines to ensure smooth, reliable releases. I also lead a team of developers, manage project timelines, and coordinate cross-functional teams to deliver high-quality products. Before this, I interned at Ignis Tech Solutions as a Software Developer, where I built full-stack applications, engineered RESTful APIs, and integrated Scrapy-based web scrapers for real-time data automation.",
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "NestJS",
    "React",
    "Typescript",
    "Node.js",
    "Solidity",
    "Python",
    "Postgres",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Java",
    "C",
    "Rust"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "loveagrawal204@gmail.com",
    tel: "+91 6397640050",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LoveKumarAgrawal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/love-kumar-agrawal-898337281/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/love_agrawal99",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:loveagrawal204@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "WhatBytes",
      badges: [],
      href: "https://www.whatbytes.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/whatbytes.png",
      start: "Nov 2025",
      end: "Present",
      description:
        "Contributed in NestJS backend services for multi-module LMS, handling workflows, background jobs, and user operations. Improved ticker/position extraction logic in portfolio documents to enhance data accuracy. Worked closely with the team at Raven (YC S22) to ship backend features and APIs supporting their product requirements. Architected an AI-powered RAG (Retrieval-Augmented Generation) application using FastAPI and PostgreSQL, improving data retrieval accuracy and processing speed by 30%",
    },
    {
      company: "WhatBytes",
      badges: [],
      href: "https://www.whatbytes.com/",
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/whatbytes.png",
      start: "Apr 2025",
      end: "Oct 2025",
      description:
        "Contributing to the development of scalable, responsive web interfaces using Next.js and React.js for client-facing applications. Collaborating with backend and design teams to integrate APIs and ensure UI/UX consistency across multiple pages. Actively involved in code reviews, feature planning, and maintaining code quality through reusable component architecture.",
    },
    {
      company: "Ergosphere Solutions",
      href: "https://www.linkedin.com/company/ergosphere-solutions/",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/ignis_tech_solution.png",
      start: "Sep 2024",
      end: "Feb 2025",
      description:
        "Developed and deployed full-stack web applications using Python (Django) with seamless frontend integration via React.js improving UI responsiveness and overall functionality. Engineered scalable RESTful APIs using Django REST Framework (DRF), and integrated them with a Scrapy based web scraping system to automate real-time product data extraction and processing.",
    }
  ],
  education: [
    {
      school: "GLA University",
      href: "https://www.gla.ac.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/GLA_University.png",
      start: "2022",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "AlgoArena",
      href: "https://github.com/LoveKumarAgrawal/AlgoArena",
      active: true,
      description:
        "Engineered a full-stack competitive programming platform inspired by Codeforces, featuring real-time code execution, live leaderboards, and timed contests. Built with a scalable microservices architecture in a Turborepo monorepo, enabling efficient builds and shared packages. Developed a secure code execution engine using Judge0 and Docker with strict sandboxing and resource isolation. Implemented an asynchronous judging pipeline with webhooks to handle high-concurrency submissions with deterministic scoring. Delivered a type-safe developer experience using Next.js, Prisma, and Zod, alongside a modern UI with Monaco Editor integration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Turborepo",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Zod",
        "Docker",
        "Judge0"
      ],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/1Rkao8p1k1RCNJ7gPqmQ9M2diwcEOMSn2/view?usp=drive_link",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/LoveKumarAgrawal/AlgoArena",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/AlgoArena.png",
      video: "",
    },
    {
      title: "Decentralized CrowdFunding Platform",
      href: "https://github.com/LoveKumarAgrawal/decentralized-crowdfunding-platform",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Built a decentralized crowdfunding app with campaign creation and funding on the blockchain. Implemented wallet-based authentication for secure, seamless interaction and fund management. Integrated smart contracts using Wagmi, Viem, and React Query for reliable, high-performance UX.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Solidity",
        "Wagmi",
        "Viem",
        "Tanstack React Query",
        "Foundry"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/LoveKumarAgrawal/decentralized-crowdfunding-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crowdfunding_platform.png",
      video: "",
    },
    {
      title: "Certify Track",
      href: "https://github.com/LoveKumarAgrawal/Certify-Track-Backend",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Designed a role-based system to streamline certificate handling among students, teachers, and administrators. Empowered students to manage their certificate uploads while enabling teachers to approve or reject submissions with administrative oversight for user management using role-based access. Delivered a seamless user experience with a clean, responsive interface. ",
      technologies: [
        "Next.js",
        "NestJS",
        "Typescript",
        "MongoDB",
        "Material UI",
      ],
      links: [
        {
          type: "Source (frontend)",
          href: "https://github.com/LoveKumarAgrawal/Certify-Track-Frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source (backend)",
          href: "https://github.com/LoveKumarAgrawal/Certify-Track-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Certify_Track.png",
      video: "",
    },
    {
      title: "StorEase",
      href: "https://stor-ease.vercel.app/",
      dates: "",
      active: true,
      description:
        "StorEase is a streamlined cloud storage solution designed to securely store and manage your digital files, including images, videos, and text documents. Built for simplicity and efficiency, StorEase offers an intuitive interface and reliable performance, making it easy to upload, access, and organize your content anytime, anywhere.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Appwrite"
      ],
      links: [
        {
          type: "Website",
          href: "https://stor-ease.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/LoveKumarAgrawal/StorEase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/storease.png",
      video: "",
    },
    {
      title: "Anonymous Feedback",
      href: "https://anonymous-feedback-two.vercel.app/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Created a platform where users can receive anonymous feedback via a shareable link without compromising their identity. Implemented features to moderate incoming messages, including accept/reject workflows. Prioritized UI simplicity and responsiveness to improve engagement. ",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://anonymous-feedback-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/LoveKumarAgrawal/anonymous-feedback",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/anonymous-feedback.png",
      video: "",
    }
  ],
} as const;
