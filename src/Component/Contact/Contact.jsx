import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <span>Get In Touch</span>
        <h2>Contact Me</h2>
      </div>
      <div className="contact_form">
        <h3>Just Say Hi!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          cumque labore enim reiciendis placeat beatae nihil, inventore quia,
          asperiores libero expedita, aut doloremque quis? Labore provident
          sequi officiis assumenda doloribus?
        </p>
        <div className="contact_info">
          <div>
            <h3>Address</h3>
            <p>Sweden,Stockholm</p>
          </div>
          <div>
            <h3>Mail</h3>
            <p>Haci.Comert@outlook.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+46 72 448 27 91</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
