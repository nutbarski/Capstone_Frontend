import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="form-container">
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
