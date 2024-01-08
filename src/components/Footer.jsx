import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../components/Footer.css"; 

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        Raquel Blázquez Estrada
      </div>
      <div className="social-icons">
        <a href="https://github.com/RaquelBE?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/raquel-blazquez" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;