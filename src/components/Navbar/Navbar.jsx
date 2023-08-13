import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import { closeIcon, initialLogo, menuIcon } from "../../assets/images/icons";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
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
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
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
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
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
