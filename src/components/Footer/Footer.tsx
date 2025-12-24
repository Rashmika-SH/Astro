import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Astro Shiva Anagh</h3>
            <p className="footer-description">
              Over 30 years of experience in Vedic astrology, providing personalized guidance
              and transformative solutions to help you navigate life's journey.
            </p>
            <div className="footer-social">
              <a href="tel:+61405911434" className="social-link" aria-label="Call us">
                <FaPhone />
              </a>
              <a href="mailto:shivaanagh@gmail.com" className="social-link" aria-label="Email us">
                <FaEnvelope />
              </a>
              <a href="http://wa.me/+61405911434" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {services.slice(0, 10).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Locations</h4>
            <ul className="footer-links">
              {locations.map((location) => (
                <li key={location.id}>
                  <Link to={`/locations/${location.id}`}>{location.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <a href="tel:+61405911434" className="contact-link">
                <FaPhone />
                <span>+61 405 911 434</span>
              </a>
              <a href="mailto:shivaanagh@gmail.com" className="contact-link">
                <FaEnvelope />
                <span>shivaanagh@gmail.com</span>
              </a>
              <div className="contact-link">
                <FaMapMarkerAlt />
                <span>Serving Australia Wide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Astro Shiva Anagh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
