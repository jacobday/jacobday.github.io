import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
} from "./components";
import { StarsCanvas } from "./components/canvas";
import styles from "./App.module.scss";

const App = () => {
  const aboutRef = React.useRef();
  const experienceRef = React.useRef();
  const projectsRef = React.useRef();
  const contactRef = React.useRef();

  return (
    <BrowserRouter>
      <main className={styles.app}>
        {/* Header */}
        <Navbar
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Hero />

        {/* Sections */}
        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={experienceRef}>
          <Experience />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

        {/* Contact Canvas */}
        <section ref={contactRef} className={styles.contact}>
          <Contact />
          <StarsCanvas />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
