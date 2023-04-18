import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import "./Scroll.scss";

const ArrowButton = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight / 9) {
        setShowArrow(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const jumpVariants = {
    animation: {
      y: [0, -10],
      transition: {
        yoyo: Infinity,
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="arrow-container">
      {showArrow && (
        <motion.div
          className="arrow-button"
          variants={jumpVariants}
          animate="animation">
          <FaArrowDown />
        </motion.div>
      )}
    </div>
  );
};

export default ArrowButton;
