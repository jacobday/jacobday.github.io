import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants/experiences";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import styles from "./Experience.module.scss";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#100d25", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #915eff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={styles.icon}>
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div>
        {/* Job Title */}
        <h3>{experience.title}</h3>

        {/* Company Name */}
        <p>{experience.company_name}</p>
      </div>

      {/* Job Description */}
      <ul>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className={styles.experience}>
      <motion.div variants={textVariant()}>
        <h1>What I have done so far</h1>
        <h2>Work Experience.</h2>
      </motion.div>

      <div className={styles.timelineContainer}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");
