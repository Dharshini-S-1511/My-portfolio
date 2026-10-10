import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  Briefcase, Bot, Leaf, GraduationCap, PieChart, 
  ExternalLink, ArrowUpRight, CheckCircle2, Sparkles, Code
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & GenAI', 'Web Development', 'Java Software'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const getProjectIcon = (iconName, accent) => {
    switch (iconName) {
      case 'Bot':
        return <Bot size={22} style={{ color: accent }} />;
      case 'Leaf':
        return <Leaf size={22} style={{ color: accent }} />;
      case 'GraduationCap':
        return <GraduationCap size={22} style={{ color: accent }} />;
      case 'PieChart':
        return <PieChart size={22} style={{ color: accent }} />;
      default:
        return <Code size={22} style={{ color: accent }} />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            <span>Featured Innovations</span>
          </span>
          <h2 className="section-title">
            Key <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            Engineered solutions spanning Generative AI RAG pipelines, modern campus sustainability analytics, and interactive Java platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card glass-card"
              style={{ '--card-accent': project.accentColor }}
            >
              {/* Card Header */}
              <div className="project-card-top">
                <div className="project-icon-badge" style={{ background: `${project.accentColor}18` }}>
                  {getProjectIcon(project.icon, project.accentColor)}
                </div>
                <div className="project-meta-badges">
                  <span className="project-category-tag">{project.category}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>

              {/* Description */}
              <p className="project-card-desc">
                {project.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="project-highlights-box">
                <span className="highlights-header">Engineering Highlights:</span>
                <ul className="project-highlights-list">
                  {project.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="project-highlight-item">
                      <CheckCircle2 size={14} className="highlight-bullet-icon" style={{ color: project.accentColor }} />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="project-tags-wrap">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Bottom / Actions */}
              <div className="project-card-footer">
                <span className="project-metrics-chip">
                  <Sparkles size={13} style={{ color: project.accentColor }} />
                  <span>{project.metrics}</span>
                </span>

                <button
                  type="button"
                  className="btn-project-details"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
