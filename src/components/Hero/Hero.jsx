import React from "react";
import styles from "./Hero.module.scss";
import Ripple from "../RippleCanvas/RippleCanvas";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <header>
        <h1>
          Hi, I'm <span>Jacob</span>
        </h1>
        <h2>creative developer && software engineer</h2>
      </header>
      <Ripple />
    </section>
  );
};

export default Hero;
