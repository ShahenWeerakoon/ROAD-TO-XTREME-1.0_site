import { useEffect } from "react";
import Countdown from '../components/Countdown';
import logo from '../assets/logo.png';
import heroImage from '../assets/hero.png';
import "../../src/sections/Sections.css";
import "../../src/index.css";

const HeroSection = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".navbar-link");

    const scrollTo = (target, duration = 1000) => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const run = startPosition + distance * easeInOutCubic(progress);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    links.forEach(link => {
      const handleClick = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          scrollTo(targetElement, 1000);
        }
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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="IEEE Xtreme Logo" className="navbar-logo-img" />
          </div>

          <ul className="navbar-menu">
            <li><a href="#home" className="navbar-link">Home</a></li>
            <li><a href="#about" className="navbar-link">About</a></li>
            <li><a href="#event" className="navbar-link">Events</a></li>
            <li><a href="#guide" className="navbar-link">Guide</a></li>
            <li><a href="#guide" className="navbar-link">Rules</a></li>
            <li><a href="#footer" className="navbar-link">Contact</a></li>
          </ul>

          <div className="navbar-auth">
            <button className="register-btn">Register Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="hero-content">
        <div className="hero-content-container">
          <Countdown />

          <h2 className="hero-title">
            <span className="road-to">Road to</span>
            <span className="x-text">X</span>
            <span className="treme">treme</span>
          </h2>

          <p className="hero-text">
            IEEEXtreme is a global challenge in which teams of IEEE Student members – advised and proctored by an IEEE member, 
            and often supported by an IEEE Student Branch – compete in a 24-hour time span against each other to solve a set of programming problems.
          </p>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
