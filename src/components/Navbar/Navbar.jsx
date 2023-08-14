import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import { closeIcon, initialLogo, menuIcon } from "../../assets/images/icons";
import styles from "./Navbar.module.scss";

const Navbar = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const navRef = React.useRef();
  let navHeight;

  // Get the y position of each section
  let aboutY;
  let experienceY;
  let projectsY;
  let contactY;

  const refDictionary = {
    About: aboutRef,
    Contact: contactRef,
    Experience: experienceRef,
    Projects: projectsRef,
  };

  // Change the active link based on the current scroll position
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const posOffset = 10;

    // Set the navbar to transparent if the user is at the top of the page
    const isTransparent = currentScrollY <= aboutY - navHeight;
    setTransparent(isTransparent);

    if (currentScrollY >= contactY - posOffset) {
      setActive("Contact");
    } else if (currentScrollY >= projectsY - posOffset) {
      setActive("Projects");
    } else if (currentScrollY >= experienceY - posOffset) {
      setActive("Experience");
    } else if (currentScrollY >= aboutY - posOffset) {
      setActive("About");
    } else {
      setActive("");
    }
  };

  useEffect(() => {
    aboutY = aboutRef.current.offsetTop;
    experienceY = experienceRef.current.offsetTop;
    projectsY = projectsRef.current.offsetTop;
    contactY = contactRef.current.offsetTop;
    navHeight = navRef.current.offsetHeight;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutY, experienceY, projectsY, contactY, navHeight]);

  return (
    <nav
      ref={navRef}
      style={{
        backgroundColor: transparent ? "rgba(6, 7, 20, 0.9)" : "",
      }}
    >
      <div className={styles.container}>
        {/* Logo Link */}
        <Link
          to="/"
          className={styles.logoContainer}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={initialLogo} alt="logo" className={styles.logo} />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={styles.linkContainer}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${active === link.title ? styles.active : ""}`}
              onClick={() => {
                // Scroll to the selected section
                refDictionary[link.title].current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {link.title}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Links */}
        <div className={styles.mobileNav}>
          {/* Menu Icon */}
          <img
            src={toggle ? closeIcon : menuIcon}
            alt="menu"
            className={styles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />

          {/* Menu */}
          {toggle && (
            <div className={styles.menu}>
              {/* Navigation Links */}
              <ul className={styles.linkContainer}>
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${active === link.title ? styles.active : ""}`}
                    onClick={() => {
                      setToggle(!toggle);

                      // Scroll to the selected section
                      refDictionary[link.title].current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
