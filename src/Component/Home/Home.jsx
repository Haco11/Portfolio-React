import React from "react";
import Pf from "../../assets/Haci.jpg";
import "./Home.scss";
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
          Passionate <br /> Webdeveloper
        </span>
        <a href="contact">Connect with me</a>
      </div>
    </div>
  );
};

export default Home;
