import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../data";
import { experiences } from "../../data";
import { motion } from "framer-motion";

export const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title">
        <span>What I Expert</span>
        <h2>Skills And Experience</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="select">
        <button
          onClick={() => {
            setActive(1);
          }}
          className={active === 1 ? "active" : ""}>
          Skills
        </button>
        <button
          onClick={() => {
            setActive(2);
          }}
          className={active === 2 ? "active" : ""}>
          Experience
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="skills">
        {active === 1 &&
          icons.map((icon) => {
            return (
              <div className="icon" key={icon.id}>
                {icon.icon}
                {icon.title}
              </div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="experiencs">
        {active === 2 &&
          experiences.map((exper) => {
            return (
              <div className="experience" key={exper.id}>
                <span>{exper.year}</span>
                <div className="position">
                  <h3>{exper.position}</h3>
                  <p>{exper.company}</p>
                </div>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};
