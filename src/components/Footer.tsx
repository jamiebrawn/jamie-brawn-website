"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <div className="footer-left">
          <div className="social-links">
            <Link
              href="https://www.linkedin.com/in/jamiebrawn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/jamiebrawn/jamie-brawn-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
          <div className="contact-info">
            <p>
              <a href="tel:+447885542229">Mobile: +44 7885 42229</a>
            </p>
            <p>
              <a href="jameshenrybrawn@gmail.com">
                Email: jameshenrybrawn@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
