import React from 'react';
import { 
  X, CheckCircle, ExternalLink, Code2, Cpu, 
  Layers, Database, Sparkles, BookOpen 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="project-modal glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="modal-category-badge" style={{ borderColor: project.accentColor, color: project.accentColor }}>
              {project.category}
            </span>
            <span className="modal-metrics-badge">
              <Sparkles size={14} />
              {project.metrics}
            </span>
          </div>

          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <h3 className="modal-project-title gradient-text">{project.title}</h3>
        <p className="modal-project-tagline">{project.tagline}</p>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Deep Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <BookOpen size={16} />
              <span>Project Overview & Engineering</span>
            </h4>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Architecture Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Layers size={16} />
              <span>Key Architectural Features</span>
            </h4>
            <ul className="modal-highlights-list">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="modal-highlight-item">
                  <CheckCircle size={16} className="highlight-icon" style={{ color: project.accentColor }} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Code2 size={16} />
              <span>Technologies & Tools Employed</span>
            </h4>
            <div className="modal-tech-chips">
              {project.tags.map((tech, idx) => (
                <span key={idx} className="modal-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
