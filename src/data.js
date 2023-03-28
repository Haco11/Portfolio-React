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
} from "react-icons/fa";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaLinkedin />, <FaGithub />];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
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
