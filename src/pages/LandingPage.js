import React, { useState } from 'react';
import './LandingPage.css';
import SkillSection from '../components/SkillSection';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import pfp4 from '../assets/images/pfp4.JPG';

// Experience logos
import merc from '../assets/images/merc.jpeg';
import skylark from '../assets/images/skylark.jpg';
import spire from '../assets/images/spire.png';
import nobe from '../assets/images/nobe.png';
import pjtl from '../assets/images/pjtl.png';
import inceptev from '../assets/images/inceptev.png';
import u5 from '../assets/images/utilidata5.png';
import umits from '../assets/images/umits.jpg';

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileLines,
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaLocationDot
} from 'react-icons/fa6';

const workExperiences = [
  {
    company: "Utilidata",
    period: "Jan 2025 - Present",
    position: "Software Engineering Intern",
    type: "Internship",
    location: "Ann Arbor, MI",
    skills: ["Python", "ML Workflows", "Data Processing", "MLOps", "Generative AI", "Workflow Automation"],
    description: [
      "Built and evaluated a flow matching generative model for waveform data, exploring synthetic data generation and downstream ML experimentation.",
      "Improved reproducibility of internal ML workflows through tooling, documentation, and environment setup across local and remote systems.",
      "Worked across Python, data processing, and infrastructure workflows to support model experimentation and optimization."
    ],
    logo: u5,
  },
  {
    company: "U-M Information & Technology Services",
    period: "May 2025 - Dec 2025",
    position: "Software Engineering Intern",
    type: "Internship",
    location: "Ann Arbor, MI",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Platform Support", "Infrastructure"],
    description: [
      "Supported research computing infrastructure used by university researchers and technical teams.",
      "Contributed to infrastructure workflows involving deployment, reliability, and platform support.",
      "Worked with engineering teams to improve technical documentation and operational processes."
    ],
    logo: umits,
  },
  {
    company: "InceptEV",
    period: "Aug 2024 - Dec 2024",
    position: "Data Science Intern",
    type: "Internship",
    location: "Ann Arbor, MI",
    skills: ["Python", "Julia", "Pandas", "Data Validation", "Data Analysis"],
    description: [
      "Validated simulation datasets to identify anomalies and quality issues in EV-related data workflows.",
      "Supported data cleaning and analysis processes used to improve simulation reliability."
    ],
    logo: inceptev,
  },
  {
    company: "Spire Investment Partners",
    period: "Jun 2024 - Aug 2024",
    position: "Technology & Cybersecurity Intern",
    type: "Internship",
    location: "McLean, VA",
    skills: ["REST APIs", "Internal Tools", "Automation", "Cybersecurity", "Operations"],
    description: [
      "Built internal tools and REST API workflows to streamline employee onboarding and operations.",
      "Supported technology and cybersecurity initiatives for internal teams and business operations."
    ],
    logo: spire,
  },
  {
    company: "Skylark Drones",
    period: "Jun 2023 - Aug 2023",
    position: "Research Intern",
    type: "Internship",
    location: "Bangalore, India",
    skills: ["Python", "Tkinter", "Image Processing", "Technical Communication"],
    description: [
      "Built a Python UI that helped users convert thermal image datasets from R-JPEG to TIFF with data validation.",
      "Created technical training materials for drone operator workflows in partnership with public stakeholders."
    ],
    logo: skylark,
  },
  {
    company: "Michigan Equity Research Club",
    period: "Jan 2023 - Feb 2024",
    position: "VP of Technology & Project Manager",
    type: "Leadership",
    location: "Ann Arbor, MI",
    skills: ["Web Development", "Project Management", "Technical Communication"],
    description: [
      "Led web development efforts to improve the club's online presence and member communication.",
      "Managed a student research team through market analysis, synthesis, and final presentation work."
    ],
    logo: merc,
  },
  {
    company: "NOBE Engineering Consulting",
    period: "Jan 2023 - Feb 2024",
    position: "Engineering Consultant",
    type: "Consulting",
    location: "Ann Arbor, MI",
    skills: ["Consulting", "UX Research", "Figma", "Data Analysis", "Client Communication"],
    description: [
      "Worked with client teams to identify user pain points and optimize technical workflows.",
      "Contributed to website usability analysis for U-M Human Resources and bioinformatics data organization."
    ],
    logo: nobe,
  },
  {
    company: "Perot Jain TechLab Electrification",
    period: "Aug 2024 - Present",
    position: "Student Researcher",
    type: "Research",
    location: "Center for Entrepreneurship",
    skills: ["Research", "Electrification", "Startup Collaboration", "Product Discovery"],
    description: [
      "Collaborated with early-stage electrification companies to understand technical and market constraints.",
      "Translated ambiguous startup problems into research, product, and engineering recommendations."
    ],
    logo: pjtl,
  },
];

const LandingPage = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedExperiences, setExpandedExperiences] = useState({ 0: true, 1: true });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ydumpeta@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const toggleExperience = (idx) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="landing-page-minimal">
      <div className="content-container">
        {/* HERO / BIO SECTION */}
        <section id="home" className="hero-section-minimal">
          <div className="hero-profile-header">
            <div className="avatar-wrapper">
              <img src={pfp4} alt="Yash Dumpeta" className="hero-avatar" />
              <span className="status-badge-dot" title="Available for work"></span>
            </div>
            <div className="hero-title-block">
              <h1 className="hero-name">Yash Dumpeta</h1>
              <div className="hero-role-row">
                <span className="hero-role">Software Engineer</span>
                <span className="role-divider">•</span>
                <span className="hero-subtext">B.S.E. CSE @ University of Michigan</span>
              </div>
            </div>
          </div>

          <div className="hero-bio">
            <p>
              I&apos;m a Computer Science &amp; Engineering graduate from the <strong>University of Michigan</strong>, currently working as a <strong>Software Engineering Intern at Utilidata</strong>.
            </p>
            <p>
              I specialize in building reliable <strong>backend systems</strong>, <strong>machine learning workflows</strong>, and <strong>full-stack products</strong>. I care about high-signal execution, clean software architecture, and building software that delivers tangible value to users.
            </p>
          </div>

          {/* Quick Contact & Action Pills */}
          <div className="hero-action-pills">
            <button className="action-pill email-pill" onClick={handleCopyEmail}>
              {copiedEmail ? <FaCheck className="pill-icon green" /> : <FaEnvelope className="pill-icon" />}
              <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
            </button>

            <a
              href="https://github.com/yashdumpeta"
              target="_blank"
              rel="noopener noreferrer"
              className="action-pill"
            >
              <FaGithub className="pill-icon" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ydumpeta/"
              target="_blank"
              rel="noopener noreferrer"
              className="action-pill"
            >
              <FaLinkedin className="pill-icon" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/YD - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-pill"
            >
              <FaFileLines className="pill-icon" />
              <span>Resume</span>
            </a>
          </div>

          <div className="hero-status-box">
            <span className="pulse-dot"></span>
            <span className="status-box-text">
              Exploring early-career Software Engineering, Backend/Full-Stack, and Forward Deployed roles across the U.S.
            </span>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-block">
          <div className="block-header">
            <h2 className="block-title">Places I&apos;ve Worked</h2>
            <span className="block-count">{workExperiences.length} Roles</span>
          </div>

          <div className="experience-stack">
            {workExperiences.map((exp, index) => {
              const isExpanded = expandedExperiences[index];
              return (
                <div key={index} className="experience-card">
                  <div
                    className="exp-card-main"
                    onClick={() => toggleExperience(index)}
                  >
                    <img src={exp.logo} alt={exp.company} className="exp-company-logo" />
                    <div className="exp-info-primary">
                      <div className="exp-top-line">
                        <h3 className="exp-company-name">{exp.company}</h3>
                        <span className="exp-date-tag">{exp.period}</span>
                      </div>
                      <div className="exp-sub-line">
                        <span className="exp-job-title">{exp.position}</span>
                        <span className="exp-sep">•</span>
                        <span className="exp-location-tag">
                          <FaLocationDot className="loc-icon" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <button className="exp-toggle-btn" aria-label="Toggle details">
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="exp-card-details">
                      <ul className="exp-bullets">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>

                      <div className="exp-tech-tags">
                        {exp.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="tech-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-block">
          <div className="block-header">
            <h2 className="block-title">Things I&apos;ve Built</h2>
            <a
              href="https://github.com/yashdumpeta"
              target="_blank"
              rel="noopener noreferrer"
              className="block-link"
            >
              All Projects on GitHub <FaArrowRight className="link-arrow" />
            </a>
          </div>

          <div className="projects-grid-list">
            {projects.map((project, index) => (
              <div key={index} className="minimal-project-card">
                <div className="project-preview-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-preview-img"
                  />
                </div>

                <div className="project-details">
                  <div className="project-header">
                    <h3 className="project-name">{project.title}</h3>
                    <div className="project-external-links">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-pill primary"
                        >
                          Live <FaArrowRight className="link-icon" />
                        </a>
                      )}
                      {project.source_code && (
                        <a
                          href={project.source_code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-pill icon-only"
                          title="View Source Code on GitHub"
                          aria-label="View Source Code on GitHub"
                        >
                          <FaGithub className="github-link-icon" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags-list">
                    {project.tech_used.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <SkillSection />

        {/* CONTACT CALLOUT */}
        <section id="contact" className="section-block contact-block">
          <div className="contact-card">
            <h2 className="contact-heading">Looking for a Software Engineer?</h2>
            <p className="contact-text">
              I&apos;m currently exploring full-time opportunities in software engineering, backend/full-stack engineering, and technical consulting across the U.S. Let&apos;s build something great together.
            </p>
            <div className="contact-actions">
              <button className="contact-btn-primary" onClick={handleCopyEmail}>
                {copiedEmail ? <FaCheck /> : <FaEnvelope />}
                <span>{copiedEmail ? "Email Copied!" : "ydumpeta@gmail.com"}</span>
              </button>
              <a
                href="https://www.linkedin.com/in/ydumpeta/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn-secondary"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
