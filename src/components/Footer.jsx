import { GraduationCap, MapPin, Phone, Mail, MessageCircle, Globe, Camera, Briefcase } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="logo-container footer-logo">
              <GraduationCap size={32} />
              <h2 className="logo-text">中華科技大学</h2>
            </div>
            <p className="footer-description">
              Empowering minds, advancing technology, and building the future. A premier institution dedicated to academic excellence and innovation.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Camera size={20} /></a>
              <a href="#" className="social-icon"><Briefcase size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">Campus Life</a></li>
              <li><a href="#">Research</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Career Center</a></li>
              <li><a href="#">Alumni</a></li>
              <li><a href="#">News & Events</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 University Ave, Tech City, TC 10000</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+886 (2) 1234-5678</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@cute.edu.tw</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 中華科技大学 (China University of Technology). All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
