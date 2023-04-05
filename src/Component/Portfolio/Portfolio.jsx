import React from "react";
import "./Portfolio.scss";
import { workImages } from "../../data";
import { FiEye, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>My Work</span>
        <h2>Awsome Projects</h2>
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="workImages">
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
                  transition={{ duration: 0.3 }}
                  target="_blank">
                  <FiGithub />
                </motion.a>
                <motion.a
                  href={work.live}
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  target="_blank">
                  <FiEye />
                </motion.a>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;
