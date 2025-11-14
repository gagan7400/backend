import React from "react";
import "./ui.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <h1>Contact <span>Us</span></h1>
        <p>We’d love to hear from you! Reach out with any questions or feedback.</p>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions or need help? We’re here for you 24/7!</p>

          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>udayv91112@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <Phone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 91112 41917</p>
            </div>
          </div>

          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h4>Address</h4>
              <p>MeShop  indore, Mdhay Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5" required></textarea>
            </div>

            <button type="submit" className="send-btn">
              <Send className="send-icon" /> Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default Contact;
