import React from "react";
import "./ui.css";
import { ShoppingBag, Heart, Truck, Shield } from "lucide-react";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span>MeShop</span></h1>
        <p>Your one-stop shop for fashion, lifestyle, and more.</p>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>MeShop</strong> — your ultimate destination for
            trendy, affordable, and high-quality fashion products. We believe
            shopping should be easy, fun, and accessible to everyone.
          </p>
          <p>
            From clothing to accessories, MeShop brings you the latest styles
            that keep you ahead of the trend — all from the comfort of your home.
          </p>
        </div>
        <img
          src="https://images.meesho.com/images/marketing/1744698265981.webp"
          alt="About us"
          className="about-image"
        />
      </section>

      {/* Our Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <ShoppingBag className="value-icon" />
            <h3>Quality Products</h3>
            <p>We handpick every item to ensure the best quality at affordable prices.</p>
          </div>

          <div className="value-card">
            <Heart className="value-icon" />
            <h3>Customer First</h3>
            <p>Your satisfaction is our top priority. We love making you happy!</p>
          </div>

          <div className="value-card">
            <Truck className="value-icon" />
            <h3>Fast Delivery</h3>
            <p>We partner with trusted couriers to deliver your orders quickly and safely.</p>
          </div>

          <div className="value-card">
            <Shield className="value-icon" />
            <h3>Secure Shopping</h3>
            <p>Your data and privacy are always protected with advanced encryption.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>MeShop</strong>, our mission is to empower customers by
          providing affordable, stylish, and comfortable fashion options — while
          supporting local sellers and promoting sustainability.
        </p>
      </section>
    </div>
  );
}

export default About;
