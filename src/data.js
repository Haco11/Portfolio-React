import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaPaperPlane,
  FaPhoneAlt,
  FaReact,
  FaSass,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandGit,
  TbBrandRedux,
  TbBrandMongodb,
  TbBrandReactNative 
} from "react-icons/tb";

import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.1.png";
import work4 from "./assets/work4.jpg";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.jpeg";
import work7 from './assets/work7.png';
import work8 from './assets/work8.png';

export const navLinks = ["home", "skills", "portfolio", "about", "contact"];

export const socialIcons = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/haci-c%C3%B6mert/",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/Haco11",
  },
];

export const icons = [
  {
    id: 1,
    icon: <FaReact />,
    title: "React",
  },
  {
    id: 2,
    icon: <FaNodeJs />,
    title: "Node.js",
  },
  {
    id: 3,
    icon: <FaPhp />,
    title: "PHP",
  },
  {
    id: 4,
    icon: <FaWordpress />,
    title: "Wordpress",
  },
  {
    id: 5,
    icon: <TbBrandNextjs />,
    title: "Next.js",
  },
  {
    id: 6,
    icon: <TbBrandMongodb />,
    title: "MongoDB",
  },
  {
    id: 7,
    icon: <FaSass />,
    title: "Sass",
  },
  {
    id: 8,
    icon: <TbBrandRedux />,
    title: "Redux",
  },
  {
    id: 9,
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    id: 10,
    icon: <FaCss3 />,
    title: "CSS",
  },
  {
    id: 11,
    icon: <TbBrandGit />,
    title: "Git",
  },
  {
    id: 12,
    icon: <FaFigma />,
    title: "Figma",
  },
  {
    id: 13,
    icon: <TbBrandReactNative />,
    title: "React Native",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+46 72 448 27 91",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "Haci.Comert@outlook.com",
  },
];

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Bootcamp",
    company: "Techover",
  },
  {
    di: 2,
    year: "2022",
    position: "Frontend Developer Intern",
    company: "Dog Runner",
  },
  {
    id: 3,
    year: "2021",
    position: "Frontend Developer Intern",
    company: "Swedcon 18 AB",
  },
];

export const workImages = [
  {
    id: 1,
    img: work3,
    name: "Sorting Visualizer",
    github: "https://github.com/Rikard-Johansson97/sortVisualizer",
    live: "https://resonant-sherbet-9c964f.netlify.app/",
    tag: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    img: work4,
    name: "Airbnb-Clone",
    github: "https://github.com/Rikard-Johansson97/airbnb",
    live: "https://airbnb-jet-nine.vercel.app/",
    tag: ["React", "Sass", "Mongoose", "Express"],
  },
  {
    id: 3,
    img: work2,
    name: "Kanban-Board",
    github: "https://github.com/Haco11/kanban-board",
    live: "https://leafy-sfogliatella-119c4d.netlify.app/",
    tag: ["React", "Content Provider", "Drag and Drop"],
  },
  {
    id: 4,
    img: work5,
    name: "Spotify-Clone",
    github: "https://github.com/Haco11/spotify-clone",
    live: "",
    tag: ["React", "Redux", "Spotify API", "Material UI"],
  },
  {
    id: 5,
    img: work6,
    name: "Webshop-Clone",
    github: "https://github.com/Haco11/webshop-clone",
    live: "https://webshop-clone.vercel.app/",
    tag: ["NextJS", "Typescript", "Klarna", "SCSS"],
  },
  {
    id: 6,
    img: work8,
    name: "Pizzaria La Favorita",
    github: "https://github.com/Haco11/pizzaria-la-favorita",
    live: "https://pizzaria-la-favorita.vercel.app/",
    tag: ["React", "Typescript", "SCSS"],
  },

  {
    id: 8,
    img: work7,
    name: "On-Pitch-Performance",
    github: "",
    live: "https://www.onpitchperformance.com/",
    tag: ["React-Native", "Typescript", "Supabase", "Tailwind", "postgreSQL"],
  },
];
