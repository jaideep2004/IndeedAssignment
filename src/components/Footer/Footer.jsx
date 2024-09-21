import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          We are dedicated to providing the best services in the industry. Our mission is to ensure customer satisfaction through high-quality products.
        </p>
      </div>
      <div className="footer-column">
        <h3>Services</h3>
        <ul>
          <li>Web Development</li>
          <li>SEO Optimization</li>
          <li>Cloud Hosting</li>
          <li>Consulting</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: info@company.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: 123 Business Street, Suite 100</p>
      </div>
    </footer>
  );
};

export default Footer;
