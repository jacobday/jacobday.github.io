import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants/services";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

import styles from "./About.module.scss";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={styles.tilt}>
      <motion.div
        className={styles.container}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className={styles.card}
          options={{ max: 45, scale: 1, speed: 450 }}
        >
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        dolores officiis nihil incidunt quod molestias repellendus harum dolore
        accusantium, nostrum aliquid modi asperiores. Nam commodi corrupti
        suscipit quibusdam unde ad, molestias earum non at placeat numquam?
        Tenetur veniam ea molestiae et dolorem ipsa odio, consequuntur nam,
        porro sapiente magnam impedit.
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
