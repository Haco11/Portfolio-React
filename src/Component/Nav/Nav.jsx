import { useState, useEffect } from "react";
import { navLinks } from "../../data";
import { socialIcons } from "../../data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Nav.scss";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={scroll ? "header active" : "header"}>
      <div className="nav_container">
        <div className="logo">
          <h3>H.C</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          })}
        </ul>
        <div className="social_icon">
          {socialIcons.map((item, index) => {
            return (
              <a href={item.link} key={index} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </div>
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
          <motion.div
            className="closeMenu"
            variants={menuVariants}
            initial="hidden"
            animate={toggle ? "visible" : "hidden"}></motion.div>
          <motion.div
            className="menuX"
            variants={navLinkVariants}
            animate={toggle ? "visible" : "hidden"}>
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
