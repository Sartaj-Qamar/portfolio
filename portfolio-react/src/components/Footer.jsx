import { FiMail, FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io5'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo gradient-text">SQ</span>
            <p className="footer-desc">
              Building high-quality Android applications with passion and precision.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social-links">
              <a href="mailto:sartajqamar111@gmail.com" aria-label="Email"><FiMail /></a>
              <a href="https://www.linkedin.com/in/sartaj-qamar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://github.com/Sartaj-Qamar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://wa.me/+923362203156" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IoLogoWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Sartaj Qamar. Made with <FiHeart className="heart-icon" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
