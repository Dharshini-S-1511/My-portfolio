import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Building, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Consistent record of academic excellence across Anna University engineering coursework and CBSE secondary curricula.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Connector Line & Marker */}
              <div className="timeline-marker-wrap">
                <div className="timeline-dot">
                  <GraduationCap size={16} />
                </div>
                {index < educationData.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Timeline Card */}
              <div className="timeline-content-card glass-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-degree">{edu.degree}</span>
                    <div className="timeline-institution">
                      <Building size={15} className="inst-icon" />
                      <span>{edu.institution}</span>
                    </div>
                    <span className="timeline-university">{edu.university}</span>
                  </div>

                  <div className="timeline-badges-col">
                    <span className="timeline-period-badge">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="timeline-score-badge">
                      <Award size={14} />
                      {edu.score}
                    </span>
                  </div>
                </div>

                <p className="timeline-desc">{edu.description}</p>

                <div className="timeline-highlights-flex">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="timeline-highlight-pill">
                      <CheckCircle2 size={13} className="pill-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
