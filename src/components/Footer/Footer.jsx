import React from "react";
import "./Footerc.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  // Smooth scroll function (controlled speed)
  const scrollToSection = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Duration in ms (adjust for speed)
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Ease function for smooth animation
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <img src={logo} alt="Xtreme Logo" className="footer-logo" />

        <ul className="footer-nav">
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#event" onClick={(e) => scrollToSection(e, "event")}>
              Events Guide
            </a>
          </li>
          <li>
            <a href="#guide" onClick={(e) => scrollToSection(e, "guide")}>
              Rules
            </a>
          </li>
          <li>
            <a href="#footer" onClick={(e) => scrollToSection(e, "footer")}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          September 2025 <br />
          IEEE Student Branch · CINEC Campus
        </p>

        <div className="social-icons">
          <a href="https://www.facebook.com/share/17GotuLJqa/"><FaFacebook /></a>
          <a href="https://www.instagram.com/cinecieee?igsh=MXNrMWdrYmgzbXp1dg=="><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/ieee-cinec-student-branch/"><FaLinkedin /></a>
        </div>

      </div>

      <div className="footer-copy">
        <p>© 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
