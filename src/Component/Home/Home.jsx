import React from "react";
import Pf from "../../assets/Haci.jpg";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container" id="home">
      <div className="profile">
        <img src={Pf} alt="profile" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Haci Cömert</span>
        </h3>
        <span className="job">Web Developer</span>
        <span className="text">
          Passionated <br /> Web Developer
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}>
          Connect With Me
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
