import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas";

import styles from "./Hero.module.scss";

const Hero = ({ scrollToAbout }) => {
  return (
    <section className={styles.hero}>
      {/* Greeting Container */}
      <div className={styles.greetingContainer}>
        {/* Left Border Container */}
        <div className={styles.border}>
          {/* Circle */}
          <div className={styles.circle} />

          {/* Line */}
          <div className={styles.line} />
        </div>

        {/* Greeting Text */}
        <div>
          <h1>
            Hi, I'm <span>Jacob</span>
          </h1>

          <h2>creative developer && software engineer</h2>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />

      {/* Scroll Icon */}
      {/* <div className={styles.scrollContainer}>
        <div className={styles.mouse} onClick={scrollToAbout}>
          <motion.div
            className={styles.scrollWheel}
            animate={{ y: [0, 32, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
