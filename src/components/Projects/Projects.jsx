import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { githubLogo } from "../../assets/images/icons";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants/projects";
import { fadeIn, textVariant } from "../../utils/motion";
import { getTagColor } from "../../utils/tags";
import styles from "./Projects.module.scss";
import { Link } from "react-router-dom";

const getUrl = (projectName) => {
  return `/projects/${projectName
    .replace(/[^-\w\s]/gi, "") // Remove special characters
    .split(" ")
    .join("-")
    .toLowerCase()}`;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  github,
  url,
}) => {
  return (
    <article className={styles.card}>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          className={styles.container}
          options={{
            max: 5,
            scale: 1,
            speed: 1,
            transition: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
        >
          {/* Project Image */}
          <Link
            className={styles.image}
            // to={getUrl(name)}
            to={url}
            target="_blank"
          >
            <img src={image} alt={name} />
            {/* GitHub button: 1:55:20 */}
          </Link>

          {/* Project Name & Description */}
          <div className={styles.meta}>
            <Link
              // to={getUrl(name)}
              to={url}
              target="_blank"
            >
              {name}
            </Link>

            <p>{description}</p>
          </div>

          {/* Project Tags */}
          <div className={styles.tags}>
            {tags.map((tag) => (
              <p key={tag} style={{ color: getTagColor(tag) }}>
                #{tag}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </article>
  );
};

const Projects = () => {
  return (
    <div className={styles.container}>
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <h1>My creations</h1>
        <h2>Projects.</h2>
      </motion.div>

      {/* Section Description */}
      <div className={styles.description}>
        <motion.p variants={fadeIn()}>
          A showcase of my skills and experience through real-world examples of
          my work. These projects reflect my ability to solve complex problems,
          work with different technologies, and deliver a polished product.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className={styles.wrapper}>
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
