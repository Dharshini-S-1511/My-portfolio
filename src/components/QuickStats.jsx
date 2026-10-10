import React from 'react';
import { stats } from '../data/portfolioData';
import { Award, Code, BookOpen, Trophy } from 'lucide-react';

export default function QuickStats() {
  const statIcons = [
    <Award size={26} className="stat-icon award" key="award" />,
    <Code size={26} className="stat-icon code" key="code" />,
    <BookOpen size={26} className="stat-icon book" key="book" />,
    <Trophy size={26} className="stat-icon trophy" key="trophy" />
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stat-card glass-card">
              <div className="stat-icon-wrapper">
                {statIcons[index]}
              </div>
              <div className="stat-content">
                <div className="stat-value gradient-text">{item.value}</div>
                <div className="stat-label">{item.label}</div>
                <div className="stat-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
