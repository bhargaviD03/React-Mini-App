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

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="/rss"
          className="social-icon"
        >
          <FaRss />
        </a>

        <a
          href="https://dribbble.com/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaDribbble />
        </a>

      </div>

      <div className="line"></div>

      <p>Copyright © 2020 Softy Pinko Company - Design: TemplateMo</p>

    </footer>
  );
}