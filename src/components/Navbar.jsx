import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Sun, Moon, Menu, X, FileDown, Eye, Send, Code, Award, 
  User, Briefcase, GraduationCap, Trophy 
} from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <div className="brand-avatar-wrap">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="brand-avatar" 
            />
            <span className="brand-status-dot" title="Available for work"></span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-tag">Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                  {activeSection === link.id && <span className="nav-active-pill" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button
            type="button"
            className="icon-action-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={19} className="theme-icon sun" /> : <Moon size={19} className="theme-icon moon" />}
          </button>

          {/* Quick Resume Button */}
          <button
            type="button"
            className="btn btn-primary resume-quick-btn"
            onClick={onOpenResume}
          >
            <FileDown size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer glass-card">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <FileDown size={17} />
              <span>View / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
