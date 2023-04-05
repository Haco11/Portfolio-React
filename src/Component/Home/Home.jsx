import React from "react";
import Pf from "../../assets/Haci.jpg";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="container"
      id="home">
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
          variants={moveVariants}
          animate="animation"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}>
          Connect With Me
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Home;
