import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas";

import styles from "./Hero.module.scss";

const Hero = () => {
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

          <h2>I develop 3D visuals, user interfaces, and web applications</h2>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
