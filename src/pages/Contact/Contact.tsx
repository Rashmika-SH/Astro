import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      console.log('Sending email with user data...');
      
      // Complete template parameters with all user information
      const templateParams = {
        name: formData.name,
        user_message: `Email: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
        time: new Date().toLocaleString(),
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        user_email: formData.email,
        user_phone: formData.phone,
        user_name: formData.name,
      };

      console.log('Template parameters:', templateParams);

      const response = await emailjs.send(
        'service_lq4bhgl',
        'template_9fb7dhg', 
        templateParams,
        'P43JHS26VziQhLuO5'
      );
      
      console.log('SUCCESS! Email sent:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error: any) {
      console.error('FAILED - Full error:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-hero-content text-center"
          >
            <h1>Contact Us</h1>
            <p className="contact-hero-description">
              Get in touch with us for personalized astrological guidance and consultations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass contact-form-card">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="form-message success">
                      ✅ Thank you for your message! We will contact you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="form-message error">
                      ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="glass contact-info-card">
                <h2>Get in Touch</h2>
                <p>We're here to help you on your spiritual journey. Reach out to us through any of the following methods:</p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <FaPhone />
                    </div>
                    <div className="method-details">
                      <h3>Phone</h3>
                      <a href="tel:+61405911434">+61 405 911 434</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FaEnvelope />
                    </div>
                    <div className="method-details">
                      <h3>Email</h3>
                      <a href="mailto:shivaanagh@gmail.com">shivaanagh@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FaWhatsapp />
                    </div>
                    <div className="method-details">
                      <h3>WhatsApp</h3>
                      <a href="http://wa.me/+61405911434" target="_blank" rel="noopener noreferrer">
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="method-details">
                      <h3>Locations</h3>
                      <p>Sydney, Brisbane, Melbourne</p>
                    </div>
                  </div>
                </div>

                <div className="quick-contact-buttons">
                  <a href="tel:+61405911434" className="btn btn-gold">
                    <FaPhone /> Call Now
                  </a>
                  <a href="http://wa.me/+61405911434" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
