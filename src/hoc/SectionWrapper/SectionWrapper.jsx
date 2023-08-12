import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import styles from "./SectionWrapper.module.scss";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.wrapper}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
