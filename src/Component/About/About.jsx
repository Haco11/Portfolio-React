import React from "react";
import "./About.scss";
import Pf from "../../assets/Haci.jpg";
import { bios } from "../../data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h2>About me</h2>
      </div>
      <div className="about_container">
        <div className="about_left">
          <img src={Pf} alt="Img" />
        </div>
        <div className="about_right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            consequatur nesciunt reprehenderit quam dolores a, incidunt
            temporibus dolorum voluptatem fugiat delectus, labore consectetur
            debitis consequuntur.
          </p>

          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                  <span className="bioValue">{bio.value}</span>
                </span>
              </div>
            );
          })}
          <motion.a
            href="#"
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}>
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
