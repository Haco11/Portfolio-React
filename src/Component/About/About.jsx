import React from "react";
import "./About.scss";
import Pf from "../../assets/Haci2.png";
import { bios } from "../../data";
import { motion } from "framer-motion";
import resume from "../../assets/Haci_Cömert_CV.pdf";
import { LazyLoadImage } from "react-lazy-load-image-component";
import W from "../../assets/work1.png";

const About = () => {
  return (
    <div className="container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Who Am I?</span>
        <h2>About me</h2>
      </motion.div>
      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <LazyLoadImage
            alt="profile"
            height={550}
            width={650}
            effect="black-and-white"
            src={Pf}
            placeholderSrc={W}
          />
        </motion.div>
        <motion.div
          initial={{ x: -0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_right">
          <p>
            As a full-stack developer with a wealth of experience in web
            development, I possess a diverse skill set across various
            technologies and platforms, ranging from front-end to back-end and
            databases. Additionally, I have a proven track record of quickly
            learning new technologies, enabling me to create high-quality and
            innovative solutions that meet your specific requirements and exceed
            your expectations.
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
            href={resume}
            download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}>
            Download Cv
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
