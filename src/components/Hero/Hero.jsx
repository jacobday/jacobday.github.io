import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import RippleCanvas from "../RippleCanvas/RippleCanvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the website is being viewed on a mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <header>
        <h1>
          Hi, I'm <span>Jacob</span>
        </h1>
        <h2>creative developer && software engineer</h2>
      </header>
      <RippleCanvas isMobile={isMobile} />
    </section>
  );
};

export default Hero;
