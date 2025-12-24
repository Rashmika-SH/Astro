import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '#', hasDropdown: true, dropdownType: 'services' },
    { name: 'Locations', path: '#', hasDropdown: true, dropdownType: 'locations' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container container">
        <Link to="/" className="logo">
          <motion.div
            className="logo-content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/logo.jpeg"
              alt="Astrology logo"
              className="logo-image"
            />
            <span className="logo-text">Astro Shiva Anagh</span>
          </motion.div>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => {
                if (link.dropdownType === 'services') setIsServicesOpen(true);
                if (link.dropdownType === 'locations') setIsLocationsOpen(true);
              }}
              onMouseLeave={() => {
                if (link.dropdownType === 'services') setIsServicesOpen(false);
                if (link.dropdownType === 'locations') setIsLocationsOpen(false);
              }}
            >
              {link.hasDropdown ? (
                <>
                  <button className="nav-link dropdown-toggle">
                    {link.name} <FaChevronDown className="dropdown-icon" />
                  </button>
                  <AnimatePresence>
                    {link.dropdownType === 'services' && isServicesOpen && (
                      <motion.div
                        className="services-dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="dropdown-item"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            <span className="dropdown-icon-service">{service.icon}</span>
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                    {link.dropdownType === 'locations' && isLocationsOpen && (
                      <motion.div
                        className="services-dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {locations.map((location) => (
                          <Link
                            key={location.id}
                            to={`/locations/${location.id}`}
                            className="dropdown-item"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsLocationsOpen(false);
                            }}
                          >
                            <span className="dropdown-icon-service">📍</span>
                            {location.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
