import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import {
  BsGlobe,
  BsCodeSlash,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { RiNextjsFill } from 'react-icons/ri'
import { GiArtificialIntelligence } from "react-icons/gi";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
  {
    interest: "Web Development",
    icon: RiNextjsFill,
  }
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Markdown",
    icon: BsMarkdown,
  },
];



export const projectsData = [
  {
    type: "WEB-APP",
    title: "Certify Track",
    image: "Certify Track",
    link: null,
    source: "https://github.com/LoveKumarAgrawal/Certify-Track-Frontend",
  },
  {
    type: "WEB-APP",
    title: "ShoeSavvy - Shoe Website",
    image: "ShoeSavvy",
    link: null,
    source: "https://github.com/LoveKumarAgrawal/E-commerce-Shoe-Website",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/LoveKumarAgrawal",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://in.linkedin.com/in/love-kumar-agrawal-898337281",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  }
];
