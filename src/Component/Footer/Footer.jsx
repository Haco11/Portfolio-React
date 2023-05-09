import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../data";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyRight">
        <p>
          Copyright &copy; 2023 All rights reserved | Made by
          <span> Haci Cömert</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((item, index) => {
            return (
              <a href={item.link} key={index} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
