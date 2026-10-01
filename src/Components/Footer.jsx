import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaDribbble
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="social-icons">

        <a href="#" className="social-icon">
          <FaFacebookF />
        </a>

        <a href="#" className="social-icon">
          <FaTwitter />
        </a>

        <a href="#" className="social-icon">
          <FaLinkedinIn />
        </a>

        <a href="#" className="social-icon">
          <FaRss />
        </a>

        <a href="#" className="social-icon">
          <FaDribbble />
        </a>
      </div>
        <div className="line"></div>
        <p>Copyright © 2020 Softy Pinko Company - Design: TemplateMo</p>
    </footer>
  );
}