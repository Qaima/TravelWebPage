import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="footer-row">
          <h3>Call Us</h3>
          <p className="footer-p">+123 456 7890</p>
        </div>
        <div className="footer-row">
          <h3>Email</h3>
          <p footer-p>contact@example.com</p>
        </div>
      </div>
      <div className="footer-column">
        <h3>About Us</h3>
        <p footer-p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <p footer-p>FAQ</p>
        <p footer-p>Contact Us</p>
      </div>
      <div className="footer-column">
        <h3>Online Payments</h3>
        <p footer-p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
      </div>
    </footer>
  );
}

export default Footer;
