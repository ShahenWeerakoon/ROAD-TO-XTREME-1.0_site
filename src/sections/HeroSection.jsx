import Countdown from '../components/Countdown';
import logo from '../assets/logo.png';
import heroImage from '../assets/hero.png';
import "../../src/sections/Sections.css";
import "../../src/index.css";

const HeroSection = () => {
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
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="IEEE Xtreme Logo" className="navbar-logo-img" />
          </div>

          <ul className="navbar-menu">
            <li><a href="#home" className="navbar-link">Home</a></li>
            <li><a href="#about" className="navbar-link">About</a></li>
            <li><a href="#events" className="navbar-link">Events</a></li>
            <li><a href="#rules" className="navbar-link">Rules</a></li>
            <li><a href="#resources" className="navbar-link">Resources</a></li>
            <li><a href="#contact" className="navbar-link">Contact</a></li>
          </ul>

          <div className="navbar-auth">
            <button className="register-btn">Register Now</button>
          </div>
        </div>
      </nav>

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
