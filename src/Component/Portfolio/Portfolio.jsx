import React, { useState } from "react";
import "./Portfolio.scss";
import { workImages } from "../../data";
import { FiEye, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import W from "../../assets/work1.png";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTap = (workId) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [workId]: true,
    }));
    setTimeout(() => {
      setIsOpen((prevState) => ({
        ...prevState,
        [workId]: false,
      }));
    }, 4000);
  };
  return (
    <>
      <div className="container" id="portfolio">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="title">
          <span>My Work</span>
          <h2>Awesome Projects</h2>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="workImages">
          {workImages
            .map((work) => {
              const isImageOpen = isOpen[work.id] || false;

              return (
                <div className="workImage" key={work.id}>
                  <LazyLoadImage
                    src={work.img}
                    alt="work"
                    width={"100%"}
                    placeholderSrc={W}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: [0, 0.85] }}
                    animate={{ opacity: isImageOpen ? 0.85 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onTap={() => handleTap(work.id)}
                    className="hoverLayer">
                    <div className="hoverLayer__icon">
                    {work.github === "" ? null : (
                      <motion.a
                        href={work.github}
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 1.1] }}
                        transition={{ duration: 0.3 }}
                        target="_blank">
                        <FiGithub />
                      </motion.a>
                      )}

                      {work.live === "" ? null : (
                        <motion.a
                          href={work.live}
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 1.1] }}
                          transition={{ duration: 0.3 }}
                          target="_blank">
                          <FiEye />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                  <div className="portfolio__info">
                    <h4 className="workImage__title">{work.name}</h4>
                    <div className="workImage__tags">
                      {work.tag.map((tags, i) => {
                        return (
                          <span key={i} className="tag">
                            {tags}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
            .reverse()}
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
