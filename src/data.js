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
  FaUser,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.jpg";
import work4 from "./assets/work4.jpg";
import work5 from "./assets/work5.png";

export const navLinks = ["home", "skills", "portfolio", "about", "contact"];

export const socialIcons = [<FaLinkedin />, <FaGithub />];

export const icons = [
  {
    id: 1,
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    id: 2,
    icon: <FaPhp />,
    title: "Php",
  },
  {
    id: 3,
    icon: <FaWordpress />,
    title: "Wordpress",
  },
  {
    id: 4,
    icon: <FaCss3 />,
    title: "CSS",
  },
  {
    id: 5,
    icon: <FaReact />,
    title: "React",
  },
  {
    id: 6,
    icon: <FaNodeJs />,
    title: "NodeJs",
  },
  {
    id: 7,
    icon: <FaSass />,
    title: "Sass",
  },
  {
    id: 8,
    icon: <FaFigma />,
    title: "Figma",
  },
  {
    id: 9,
    icon: <TbBrandNextjs />,
    title: "NextJs",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Haci Cömert",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+46 72 448 27 91",
  },
  {
    id: 3,
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
  },
  {
    id: 2,
    img: work4,
    name: "Airbnb-Clone",
    github: "https://github.com/Rikard-Johansson97/airbnb",
    live: "https://airbnb-jet-nine.vercel.app/",
  },
  {
    id: 3,
    img: work2,
    name: "Kanban-Board",
    github: "https://github.com/Haco11/kanban-board",
    live: "https://leafy-sfogliatella-119c4d.netlify.app/",
  },
  {
    id: 4,
    img: work5,
    name: "Spotify-Clone",
    github: "https://github.com/Haco11/spotify-clone",
    live: "",
  },
];
