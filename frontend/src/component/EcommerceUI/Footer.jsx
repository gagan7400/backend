import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import "./ui.css";

function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 border-top">
      <div className="container pb-4">
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-md-3">
            <h4 className="fw-bold text-pink mb-3">MeShop</h4>
            <p className="text-secondary small">
              Discover a wide range of trendy clothing, accessories, and home
              products at affordable prices. Shop smart and stylish every day!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-semibold text-dark mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Become a Supplier
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3">
            <h5 className="fw-semibold text-dark mb-3">Customer Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3">
            <h5 className="fw-semibold text-dark mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon bg-pink text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon bg-pink text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon bg-pink text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon bg-pink text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3 border-top">
        <p className="mb-0 small text-secondary">
          © {new Date().getFullYear()} <span className="text-pink fw-semibold">MeShop</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
