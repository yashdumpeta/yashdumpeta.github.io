import React from 'react';
import './Projects.css';
import { FaCode, FaArrowRight } from 'react-icons/fa6';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const ProjectPage = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Left Side: Fixed Intro */}
        <div className="projects-intro-section">
          <div className="intro-sticky">
            <h1 className="serif">Projects</h1>
            <p className="intro-subtitle">
              Over the past few years, I've worked on various projects. Here are a few of my best:
            </p>
            <a href="https://github.com/yashdumpeta" className="contact-btn">
              View more projects <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Right Side: Scrollable Feed */}
        <div className="projects-feed-section">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card-content">
                <div className="project-tags">
                  {project.tech_used.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>
                <h2 className="project-title serif">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn primary">
                      View Project <FaArrowRight />
                    </a>
                  )}
                  {project.source_code && (
                    <a href={project.source_code} target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                      <FaCode /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
