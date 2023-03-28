import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../data";

export const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container" id="skills">
      <div className="title">
        <span>What I Expert</span>
        <h2>Skills And Experience</h2>
      </div>
      <div className="select">
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
      </div>
      <div className="skills">
        {active === 1 &&
          icons.map((icon, index) => {
            return (
              <div className="icon" key={index}>
                {icon}
              </div>
            );
          })}
      </div>
    </div>
  );
};
