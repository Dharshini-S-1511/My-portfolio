import React, { useState } from 'react';
import { personalInfo, educationData, projectsData, skillsData, leadershipData, referenceInfo } from '../data/portfolioData';
import { 
  X, FileDown, Printer, ExternalLink, ShieldCheck, 
  Sparkles, CheckCircle2, User, Mail, Phone, MapPin 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' or 'overview'

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Dharshini_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="resume-modal-header">
          <div className="resume-modal-title-box">
            <div className="resume-icon-badge">
              <FileDown size={20} />
            </div>
            <div>
              <h3 className="resume-modal-title">Dharshini S — Curriculum Vitae</h3>
              <span className="resume-modal-subtitle">Official Verified Resume Document</span>
            </div>
          </div>

          <div className="resume-modal-actions">
            <div className="resume-tab-toggle">
              <button
                type="button"
                className={`tab-btn ${activeTab === 'pdf' ? 'active' : ''}`}
                onClick={() => setActiveTab('pdf')}
              >
                PDF View
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Quick CV Read
              </button>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleDownload}
              title="Download PDF"
            >
              <FileDown size={15} />
              <span>Download PDF</span>
            </button>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="resume-modal-body">
          {activeTab === 'pdf' ? (
            <div className="pdf-embed-wrapper">
              <iframe
                src={`${personalInfo.resumeUrl}#toolbar=1&navpanes=0`}
                title="Dharshini S Resume PDF"
                className="pdf-iframe"
              />
              <div className="pdf-fallback-footer">
                <span>Having trouble previewing inside the browser frame?</span>
                <a 
                  href={personalInfo.resumeUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pdf-fallback-link"
                >
                  <ExternalLink size={14} />
                  <span>Open PDF in new tab</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="structured-cv-view">
              {/* CV Header */}
              <div className="cv-header-block">
                <h2 className="cv-name">{personalInfo.name}</h2>
                <p className="cv-meta">
                  {personalInfo.address} • Phone: {personalInfo.phone} • Email: {personalInfo.email}
                </p>
                <div className="cv-divider"></div>
              </div>

              {/* Career Objective */}
              <div className="cv-section">
                <h4 className="cv-section-title">Career Objective</h4>
                <p className="cv-text">{personalInfo.objective}</p>
              </div>

              {/* Educational Qualification */}
              <div className="cv-section">
                <h4 className="cv-section-title">Educational Qualification</h4>
                <div className="cv-table-wrapper">
                  <table className="cv-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Institution</th>
                        <th>Board / University</th>
                        <th>Year</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {educationData.map((edu, idx) => (
                        <tr key={idx}>
                          <td><strong>{edu.degree.split('-')[0].trim()}</strong></td>
                          <td>{edu.institution}</td>
                          <td>{edu.university}</td>
                          <td>{edu.period.split(' ')[0]}</td>
                          <td><strong>{edu.score}</strong></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Projects */}
              <div className="cv-section">
                <h4 className="cv-section-title">Projects</h4>
                <ul className="cv-bullet-list">
                  {projectsData.map((proj, pIdx) => (
                    <li key={pIdx}>
                      <strong>{proj.title}</strong>: {proj.tagline}. Built with {proj.tags.join(', ')}.
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Skills */}
              <div className="cv-section">
                <h4 className="cv-section-title">Technical Skills</h4>
                <p className="cv-text">
                  <strong>Gen AI & Emerging:</strong> Gen AI, RAG Architectures, LangChain, Vector Embeddings<br />
                  <strong>Languages:</strong> Java, Python, JavaScript, SQL<br />
                  <strong>Web & Frontend:</strong> HTML5, CSS3, React.js, Responsive UI
                </p>
              </div>

              {/* Extra-Curricular */}
              <div className="cv-section">
                <h4 className="cv-section-title">Extra-Curricular & Leadership</h4>
                <ul className="cv-bullet-list">
                  <li>Captain of the college cricket team (Leadership & match strategy)</li>
                  <li>Active participant of football</li>
                  <li>Active volunteer in college NSS (National Service Scheme) unit</li>
                </ul>
              </div>

              {/* Reference */}
              <div className="cv-section">
                <h4 className="cv-section-title">References</h4>
                <p className="cv-text">
                  <strong>{referenceInfo.name}</strong>, {referenceInfo.designation}, {referenceInfo.institution}, {referenceInfo.location}.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
