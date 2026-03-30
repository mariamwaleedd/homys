import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../imgs/logowhite.png';
import footerBg from '../imgs/footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-logo-section">
            <Link to="/">
              <img src={logo} alt="HOMYS Logo" className="footer-logo" />
            </Link>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/stays">Stays</Link></li>
                <li><Link to="/faq-page">FAQS</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><Link to="/stays">Book a Stay</Link></li>
                <li><Link to="/list-property">List Property</Link></li>
                <li><Link to="/questionnaire">Personalized Quiz</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Follow Us</h3>
              <ul>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-cta">
            <Link to="/contactus">
              <button className="get-touch-btn">Get In Touch</button>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <div className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <div className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
          </div>

          <div className="footer-contact">
            <Link to="/contactus" className="contact-link"><p>+20 127 584 3440</p></Link>
            <Link to="/contactus" className="contact-link"><p>Homys@management.com</p></Link>
          </div>

          <div className="footer-copyright">
            <p>© 2021 — Homys<br/>All Rights Reserved</p>
          </div>
        </div>
      </div>

      <div 
        className="footer-texture" 
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
    </footer>
  );
};

export default Footer;