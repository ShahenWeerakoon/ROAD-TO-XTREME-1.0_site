import { useEffect } from "react";
import Countdown from "../components/Countdown";
import logo from "../assets/logo.png";
import heroImage from "../assets/hero.png";
import "../../src/sections/Sections.css";
import "../../src/index.css";

const HeroSection = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".navbar-link");

    const scrollToSection = (e, id) => {
      e.preventDefault();
      const target = document.getElementById(id);
      if (!target) return;

      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime = null;

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    links.forEach((link) => {
      const handleClick = (e) => {
        const targetId = link.getAttribute("href").substring(1);
        scrollToSection(e, targetId);
      };
      link.addEventListener("click", handleClick);
      return () => link.removeEventListener("click", handleClick);
    });
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src={logo}
              alt="IEEE Xtreme Logo"
              className="navbar-logo-img"
            />
          </div>

          <ul className="navbar-menu">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="#event" className="navbar-link">
                Timeline
              </a>
            </li>
            <li>
              <a href="#guide" className="navbar-link">
                Guide
              </a>
            </li>
            {/* <li>
              <a href="#guide" className="navbar-link">
                Rules
              </a>
            </li> */}
            {/* <li>
              <a href="#footer" className="navbar-link">
                Contact
              </a>
            </li> */}
          </ul>

          <div className="navbar-auth">
            <button
              className="register-btn"
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSeCFfoDGdnkWfBv9EmgHAss0jhsgbeiw3eK5T9qK9FSd89Sfg/viewform?usp=dialog")
              }
            >
              Register Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="hero-content">
        <div className="hero-content-container">
          <Countdown />

          <h2 className="hero-title">
            <div className="hero-title-top">
              <span className="road-to">Road to</span>
            </div>
            <div className="hero-title-bottom">
              <span className="x-text">X</span>
              <span className="treme">treme</span>
            </div>
          </h2>

          <p className="hero-text">
            IEEEXtreme is a global challenge in which teams of IEEE Student
            members – advised and proctored by an IEEE member, and often
            supported by an IEEE Student Branch – compete in a 24-hour time span
            against each other to solve a set of programming problems.
          </p>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
