import React from 'react'
import "./Footerc.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="Xtreme Logo" className="footer-logo" />

        <ul className="footer-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Events Guide</a></li>
          <li><a href="#">Rules</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          September 2025 <br />
          IEEE Student Branch · CINEC Campus
        </p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer