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
        <h3 className="name">Haci Cömert</h3>
      </div>
      <span className="title">Web Developer</span>
    </div>
  );
};

export default Home;
