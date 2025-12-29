import React from 'react';
import './Projects.css';
import { FaCode, FaArrowRight } from 'react-icons/fa6';
import Footer from '../components/Footer';

import Umazing from '../assets/images/Umazing.png';
import Selectaraunt from '../assets/images/Selectaraunt.png';
import recalld from '../assets/images/recalld.png';
import recipeFind from '../assets/images/recipeFind.png';

const ProjectPage = () => {
  const projects = [
    {
      title: "UMazing",
      image: Umazing,
      source_code: "https://github.com/MishanGagnon/mhacks2024",
      tech_used: ["Next.js", "Typescript", "Node.js", "React.js", "Tailwind CSS", "PostgreSQL", "Python", "Vercel", "OpenAI", "Railway"],
      description: "AI-powered academic advisor bot designed to revolutionize course selection and academic planning. Developed during MHacks 24.",
      link: "https://mhack2024-production.up.railway.app/",
    },
    {
      title: "Selectaraunt",
      image: Selectaraunt,
      source_code: "",
      tech_used: ["Next.js", "Typescript", "Node.js", "React.js", "Tailwind CSS", "Supabase", "Socket.io", "Leaflet", "Yelp API"],
      description: "Real-time multiplayer web application for group restaurant decision-making using swipeable cards.",
      link: "https://selectaraunt.up.railway.app/",
    },
    {
        title: "recalld",
        image: recalld,
        source_code: "https://github.com/yashdumpeta/recalld",
        tech_used: ["Python", "Django", "React.js", "JavaScript", "MySQL"],
        description: "Dynamic full-stack flashcard app designed for active recall and spaced repetition learning.",
    },
    {
        title: "recipeFind",
        image: recipeFind,
        source_code: "https://github.com/yashdumpeta/recipeFind",
        tech_used: ["React.js", "JavaScript", "Edamam API"],
        description: "Web app for discovering over 2.3 million recipes using the Edamam API.",
    }
  ];

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
