import React from 'react';
import { personalInfo, referenceInfo } from '../data/portfolioData';
import { 
  User, Compass, Target, GraduationCap, MapPin, 
  Sparkles, Trophy, HeartHandshake, CheckCircle2 
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <User size={14} />
            <span>Profile & Background</span>
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Dharshini S</span>
          </h2>
          <p className="section-subtitle">
            A driven Computer Science undergraduate combining algorithmic curiosity, Generative AI skills, and collegiate leadership.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Objective */}
          <div className="about-narrative glass-card">
            <div className="card-badge-glow">
              <Compass size={18} />
              <span>Professional Journey</span>
            </div>

            <h3 className="about-heading">
              Architecting the next wave of <span className="gradient-text">intelligent software</span>
            </h3>

            <p className="about-paragraph">
              Currently pursuing my <strong>Bachelor of Engineering in Computer Science</strong> at 
              <em> K. Ramakrishnan College of Technology (Anna University)</em> with an aggregate score of <strong>87%</strong>. 
              My journey centers on the intersection of modern software engineering and next-generation Artificial Intelligence.
            </p>

            <p className="about-paragraph">
              I specialize in designing <strong>Retrieval-Augmented Generation (RAG)</strong> systems, LangChain pipelines, 
              and generative AI tools that bridge raw data with contextual, intelligent user experiences. Beyond AI, I maintain 
              solid foundations in <strong>Java</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, and relational databases.
            </p>

            {/* Career Objective Box */}
            <div className="career-objective-box">
              <div className="objective-header">
                <Target size={18} className="objective-icon" />
                <span className="objective-title">Career Objective</span>
              </div>
              <p className="objective-text">
                "{personalInfo.objective}"
              </p>
            </div>

            {/* Core Values / Strengths List */}
            <div className="about-highlights-list">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>Hands-on RAG & GenAI application development</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>Clean code architecture in Java, Python, and modern JS</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>High-pressure decision making cultivated through sports captaincy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Reference Info */}
          <div className="about-details-column">
            {/* Quick Bio Info Card */}
            <div className="glass-card detail-card">
              <h4 className="detail-card-title">Quick Information</h4>
              <div className="detail-rows">
                <div className="detail-row">
                  <span className="row-label">Institution</span>
                  <span className="row-value">{personalInfo.college}</span>
                </div>
                <div className="detail-row">
                  <span className="row-label">Degree</span>
                  <span className="row-value">B.E. Computer Science (2025–2029)</span>
                </div>
                <div className="detail-row">
                  <span className="row-label">Academic Standing</span>
                  <span className="row-value highlight-score">{personalInfo.cgpa}</span>
                </div>
                <div className="detail-row">
                  <span className="row-label">Location</span>
                  <span className="row-value">Trichy, Tamil Nadu, India</span>
                </div>
                <div className="detail-row">
                  <span className="row-label">Primary Languages</span>
                  <span className="row-value">Java, Python, JavaScript, SQL</span>
                </div>
              </div>
            </div>

            {/* Sports Leadership Card */}
            <div className="glass-card detail-card sports-card">
              <div className="sports-header">
                <div className="sports-icon-box">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="sports-title">College Cricket Team Captain</h4>
                  <span className="sports-sub">Leadership & Strategic Execution</span>
                </div>
              </div>
              <p className="sports-text">
                Leading the college women's team in competitive matches. Fosters mental resilience, tactical clarity under pressure, and collective squad accountability.
              </p>
            </div>

            {/* Department Reference Card */}
            <div className="glass-card detail-card reference-card">
              <div className="reference-header">
                <GraduationCap size={20} className="ref-icon" />
                <div>
                  <span className="ref-tag">Academic Reference</span>
                  <h4 className="ref-name">{referenceInfo.name}</h4>
                </div>
              </div>
              <p className="ref-desc">
                {referenceInfo.designation}, {referenceInfo.institution}, {referenceInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
