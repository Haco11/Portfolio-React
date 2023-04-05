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

import work1 from "./assets/work1.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

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
    value: "+4672442791",
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
    position: "Frontend Developer",
    company: "Dog Runner",
  },
  {
    id: 3,
    year: "2021",
    position: "Frontend Developer",
    company: "Swedcon 18 AB",
  },
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    github: "www.facebook.com",
    live: "www.facebook.com",
  },
  {
    id: 2,
    img: work1,
    name: "project 2",
    github: "www.facebook.com",
    live: "www.facebook.com",
  },
  {
    id: 3,
    img: work1,
    name: "project 3",
    github: "www.facebook.com",
    live: "www.facebook.com",
  },
  {
    id: 4,
    img: work1,
    name: "project 4",
    github: "www.facebook.com",
    live: "www.facebook.com",
  },
  {
    id: 5,
    img: work1,
    name: "project 5",
    github: "www.facebook.com",
    live: "www.facebook.com",
  },
  {
    id: 6,
    img: work1,
    name: "project 6",
    github: "www.facebook.com",
    live: "www.facebook.com",
  },
];
