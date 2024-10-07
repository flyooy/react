import React from "react";
import "./Contact.css"; // Стили для секции Contact

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;