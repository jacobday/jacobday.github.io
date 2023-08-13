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
  return (
    <BrowserRouter>
      <main className={styles.app}>
        {/* Header */}
        <Navbar />
        <Hero />

        {/* Sections */}
        <About />
        <Experience />
        <Projects />

        {/* Contact Canvas */}
        <section className={styles.contact}>
          <Contact />
          <StarsCanvas />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
