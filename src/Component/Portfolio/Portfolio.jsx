import React from "react";
import "./Portfolio.scss";
import { workImages } from "../../data";
import { FiEye, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <div className="title">
        <span>My Work</span>
        <h2>Awsome Projects</h2>
      </div>
      <div className="workImages">
        {workImages.map((work) => {
          return (
            <div className="workImage">
              <img src={work.img} alt="work" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hoverLayer">
                <motion.a
                  href={work.github}
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}>
                  <FiGithub />
                </motion.a>
                <motion.a
                  href={work.live}
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}>
                  {" "}
                  <FiEye />
                </motion.a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
