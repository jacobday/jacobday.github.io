import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Loader,
  Navbar,
  Tech,
  Works,
  CanvasComponents,
} from "./components";
import { StarsCanvas } from "./components/canvas";
import styles from "./App.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <main className={styles.app}>
        {/* Header */}
        <section className={styles.header}>
          <Navbar />
          <Hero />
        </section>

        {/* Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

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
