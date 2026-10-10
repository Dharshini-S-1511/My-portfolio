import React, { useState } from 'react';
import { trainingsData, leadershipData, coCurricular } from '../data/portfolioData';
import { 
  Trophy, Sparkles, BookOpen, Activity, HeartHandshake, 
  Terminal, CheckCircle, Shield, Award 
} from 'lucide-react';

export default function TrainingsAndLeadership() {
  const [activeView, setActiveView] = useState('all');

  const getLeadershipIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy size={24} className="lead-icon gold" />;
      case 'Activity':
        return <Activity size={24} className="lead-icon blue" />;
      case 'HeartHandshake':
        return <HeartHandshake size={24} className="lead-icon rose" />;
      default:
        return <Award size={24} className="lead-icon" />;
    }
  };

  return (
    <section id="leadership" className="section leadership-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Trophy size={14} />
            <span>Excellence Beyond Code</span>
          </span>
          <h2 className="section-title">
            Leadership & <span className="gradient-text">Specialized Training</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating grit, team leadership on the sports pitch, community service through NSS, and specialized GenAI & Java engineering trainings.
          </p>
        </div>

        {/* View Switcher */}
        <div className="leadership-view-switcher">
          <button
            type="button"
            className={`view-btn ${activeView === 'all' ? 'active' : ''}`}
            onClick={() => setActiveView('all')}
          >
            All Areas
          </button>
          <button
            type="button"
            className={`view-btn ${activeView === 'leadership' ? 'active' : ''}`}
            onClick={() => setActiveView('leadership')}
          >
            Leadership & Sports
          </button>
          <button
            type="button"
            className={`view-btn ${activeView === 'training' ? 'active' : ''}`}
            onClick={() => setActiveView('training')}
          >
            GenAI & Tech Trainings
          </button>
        </div>

        {/* Leadership Spotlight Cards */}
        {(activeView === 'all' || activeView === 'leadership') && (
          <div className="leadership-subgroup">
            <h3 className="subgroup-title">
              <Trophy size={20} className="subgroup-icon" />
              <span>Campus Leadership & Athletic Achievements</span>
            </h3>

            <div className="leadership-grid">
              {leadershipData.map((item, index) => (
                <div key={index} className="leadership-card glass-card">
                  <div className="lead-card-header">
                    <div className="lead-icon-box">
                      {getLeadershipIcon(item.icon)}
                    </div>
                    <div>
                      <span className="lead-category-tag">{item.category}</span>
                      <h4 className="lead-title">{item.title}</h4>
                    </div>
                  </div>

                  <p className="lead-desc">{item.description}</p>

                  <div className="lead-points-box">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="lead-point-row">
                        <CheckCircle size={14} className="point-check" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specialized Trainings & Workshops */}
        {(activeView === 'all' || activeView === 'training') && (
          <div className="leadership-subgroup training-group">
            <h3 className="subgroup-title">
              <Sparkles size={20} className="subgroup-icon" />
              <span>Specialized Technical Trainings & Certifications</span>
            </h3>

            <div className="trainings-grid">
              {trainingsData.map((training, tIdx) => (
                <div key={tIdx} className="training-card glass-card">
                  <div className="training-top-row">
                    <span className="training-badge">{training.badge}</span>
                    <Sparkles size={16} className="training-spark" />
                  </div>

                  <h4 className="training-title">{training.title}</h4>
                  <span className="training-subtitle">{training.subtitle}</span>
                  <p className="training-desc">{training.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Co-Curricular & Hackathons Banner */}
        <div className="co-curricular-banner glass-card">
          <div className="banner-header">
            <Terminal size={22} className="banner-icon" />
            <h4 className="banner-title">Co-Curricular & Department Activities</h4>
          </div>
          <div className="co-curricular-grid">
            {coCurricular.map((item, idx) => (
              <div key={idx} className="cocurricular-item">
                <span className="item-title">{item.title}</span>
                <p className="item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
