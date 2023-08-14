import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants/services";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

import styles from "./About.module.scss";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className={styles.tilt}
      options={{
        max: 25,
        scale: 1,
        speed: 1,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      <motion.div
        className={styles.container}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div className={styles.card}>
          <img src={icon} alt={title} />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className={styles.about}>
      <motion.div variants={textVariant()}>
        <h1>Introduction</h1>
        <h2>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I am a passionate and dedicated software engineer with a strong
        background in web design and development. With a deep enthusiasm for
        technology and a talent for problem-solving, I thrive in collaborative
        environments where I can contribute to innovative products and make a
        meaningful impact. Outside of work, I enjoy traveling, immersing myself
        in new cultures, and capturing moments through photography.
      </motion.p>

      <section className={styles.cardContainer}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </section>
    </section>
  );
};

export default SectionWrapper(About, "about");
