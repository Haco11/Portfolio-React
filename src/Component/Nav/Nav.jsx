import React from "react";
import { navLinks } from "../../data";
import "./Nav.scss";
const Nav = () => {
  return (
    <div>
      <div className="nav_container">
        <div className="logo">
          <h3>H.C</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={`${item}`}>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
