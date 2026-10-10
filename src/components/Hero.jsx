import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  FileDown, Sparkles, Send, MapPin, Mail, Phone, 
  ArrowRight, ShieldCheck, Cpu, Code2, Terminal, Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect
  useEffect(() => {
    const roles = personalInfo.roles;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(70);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Dharshini_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-indicator-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Hello, I'm <br />
            <span className="gradient-text hero-name">{personalInfo.name}</span>
          </h1>

          <div className="hero-typewriter-wrap">
            <span className="typewriter-prefix">I am a </span>
            <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-description">
            Computer Science engineer at <strong className="highlight-text">K. Ramakrishnan College of Technology (Anna University)</strong>. 
            Passionate about building intelligent <strong className="highlight-text">RAG systems</strong>, Generative AI applications, and robust full-stack software.
          </p>

          {/* Quick Contact & Info Tags */}
          <div className="hero-quick-meta">
            <div className="quick-meta-pill">
              <MapPin size={15} className="meta-icon location" />
              <span>Trichy, Tamil Nadu</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="quick-meta-pill interactive">
              <Mail size={15} className="meta-icon email" />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="quick-meta-pill interactive">
              <Phone size={15} className="meta-icon phone" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary btn-glow"
              onClick={() => scrollToSection('projects')}
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleDownloadResume}
              title="Download official PDF resume"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-outline-glass"
              onClick={onOpenResume}
              title="Preview resume directly in browser"
            >
              <span>Preview Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Profile Image with Visual Glow & Floating Badges */}
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            {/* Ambient Background Aura */}
            <div className="profile-aura-bg"></div>

            {/* Glowing Conic Ring */}
            <div className="profile-conic-ring">
              <div className="profile-image-container">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="hero-profile-img"
                />
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-ai" style={{ animationDelay: '0s' }}>
              <div className="badge-icon-box ai-glow">
                <Cpu size={18} />
              </div>
              <div className="badge-details">
                <span className="badge-title">Gen AI & RAG</span>
                <span className="badge-sub">Python & LangChain</span>
              </div>
            </div>

            <div className="floating-badge badge-code" style={{ animationDelay: '1.2s' }}>
              <div className="badge-icon-box code-glow">
                <Code2 size={18} />
              </div>
              <div className="badge-details">
                <span className="badge-title">Java & Web</span>
                <span className="badge-sub">OOP & React</span>
              </div>
            </div>

            <div className="floating-badge badge-captain" style={{ animationDelay: '2.4s' }}>
              <div className="badge-icon-box captain-glow">
                <Trophy size={18} />
              </div>
              <div className="badge-details">
                <span className="badge-title">Cricket Captain</span>
                <span className="badge-sub">Team Leadership</span>
              </div>
            </div>

            <div className="profile-verified-chip">
              <ShieldCheck size={16} className="verified-icon" />
              <span>Anna Univ • 87% BE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
