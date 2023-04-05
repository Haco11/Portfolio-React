import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Get In Touch</span>
        <h2>Contact Me</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-100, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="contact_form">
        <h3>Just Say Hi!</h3>
        <p>
          If you're interested in learning more about my work or collaborating
          on a project, please don't hesitate to get in touch with me. You can
          reach me via email or phone, and I'll be happy to discuss how I can
          help bring your ideas to life.
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
      </motion.div>
    </div>
  );
};

export default Contact;
