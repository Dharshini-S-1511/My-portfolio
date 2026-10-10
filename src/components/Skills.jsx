import React, { useState } from 'react';
import { skillsData, allSkillsList } from '../data/portfolioData';
import { 
  Code, Cpu, Layout, Sparkles, Wrench, CheckCircle, 
  Layers, Terminal, Award
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSkillTag, setSelectedSkillTag] = useState(null);

  const tabs = [
    { id: 'all', label: 'All Domains', icon: <Layers size={16} /> },
    { id: 'ai', label: 'Gen AI & RAG', icon: <Cpu size={16} /> },
    { id: 'languages', label: 'Programming', icon: <Terminal size={16} /> },
    { id: 'frontend', label: 'Frontend & UI', icon: <Layout size={16} /> },
    { id: 'tools', label: 'Tools & Soft Skills', icon: <Wrench size={16} /> },
  ];

  const getSkillsToDisplay = () => {
    switch (activeTab) {
      case 'ai':
        return [{ title: 'Generative AI & RAG Engineering', list: skillsData.aiAndEmerging }];
      case 'languages':
        return [{ title: 'Core Programming & Data Languages', list: skillsData.languages }];
      case 'frontend':
        return [{ title: 'Modern Web & UI Development', list: skillsData.frontend }];
      case 'tools':
        return [{ title: 'Engineering Tools & Leadership', list: skillsData.toolsAndLeadership }];
      default:
        return [
          { title: 'Generative AI & RAG Engineering', list: skillsData.aiAndEmerging },
          { title: 'Core Programming & Data Languages', list: skillsData.languages },
          { title: 'Modern Web & UI Development', list: skillsData.frontend },
          { title: 'Engineering Tools & Leadership', list: skillsData.toolsAndLeadership }
        ];
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            <span>Technical Mastery</span>
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive spectrum of technical proficiencies developed through coursework, GenAI trainings, and hands-on system building.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`skills-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-categories-grid">
          {getSkillsToDisplay().map((category, catIdx) => (
            <div key={catIdx} className="skills-category-card glass-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-bars-list">
                {category.list.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div 
                        className="skill-fill-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Skills Pill Cloud */}
        <div className="skills-pill-cloud-box glass-card">
          <h4 className="cloud-title">
            <Award size={18} className="cloud-icon" />
            <span>Quick Core Stack & Badges</span>
          </h4>
          <div className="pills-flex">
            {allSkillsList.map((skill, idx) => (
              <button
                key={idx}
                type="button"
                className={`skill-cloud-pill ${selectedSkillTag === skill ? 'selected' : ''}`}
                onClick={() => setSelectedSkillTag(selectedSkillTag === skill ? null : skill)}
                title={`Click to toggle ${skill}`}
              >
                <span>{skill}</span>
              </button>
            ))}
          </div>
          {selectedSkillTag && (
            <div className="skill-pill-feedback">
              <span>Selected Skill: <strong>{selectedSkillTag}</strong> — leveraged across hands-on academic and independent platforms.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
