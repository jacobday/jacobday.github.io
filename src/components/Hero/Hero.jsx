import React from "react";
import styles from "./Hero.module.scss";
import Ripple from "../RippleCanvas/RippleCanvas";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Ripple />
    </section>
  );
};

export default Hero;
