import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="IEEE Xtreme Logo" className="navbar-logo-img" />
        </div>
        
        <ul className="navbar-menu">
          <li><a href="#home" className="navbar-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#about" className="navbar-link" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#about" className="navbar-link" onClick={(e) => handleNavClick(e, 'about')}>Events</a></li>
          <li><a href="#rules" className="navbar-link" onClick={(e) => handleNavClick(e, 'rules')}>Rules</a></li>
          <li><a href="#resources" className="navbar-link" onClick={(e) => handleNavClick(e, 'resources')}>Resources</a></li>
          <li><a href="#contact" className="navbar-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>

        
        <div className="navbar-auth">
          <button className="register-btn">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar