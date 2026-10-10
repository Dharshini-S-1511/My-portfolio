import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Code2, Sparkles, FileDown } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-name">{personalInfo.name}</span>
              <span className="logo-dot"></span>
            </div>
            <p className="footer-bio">
              Computer Science undergraduate at K. Ramakrishnan College of Technology (Anna University). 
              Specializing in Gen AI, RAG Chatbots, and Full-Stack development.
            </p>
          </div>

          <div className="footer-links-group">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-nav-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h5 className="footer-heading">Documents & Reach</h5>
            <ul className="footer-nav-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={onOpenResume}>
                  <FileDown size={14} />
                  <span>Resume (PDF)</span>
                </button>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`}>
                  <span>Email Dharshini</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`}>
                  <span>+91 8667722195</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-divider"></div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            Designed & Built with <Heart size={14} className="heart-icon" /> by <strong>{personalInfo.name}</strong> • &copy; {new Date().getFullYear()}
          </p>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
