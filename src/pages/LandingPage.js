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

export const workExperiences = [
  {
    company: "Utilidata",
    period: "Jan 2025 - Present",
    position: "Software Engineering Intern",
    type: "Internship",
    location: "Ann Arbor, MI",
    skills: ["Python", "Parquet", "ETL Pipelines", "REST APIs", "Generative ML", "Data Ingestion", "Docker"],
    description: [
      "Designed and deployed a production ETL pipeline ingesting high-frequency (5.5 MB/min) telemetry into structured Parquet storage on the Gen7 platform for live analytics and ML experimentation.",
      "Built and deployed a generative ML inference query interface to reconstruct electrical load patterns, integrating the model into live pipelines via REST APIs.",
      "Improved developer onboarding and workflow reproducibility by establishing standardized local/remote environments, automated scripts, and internal ML tooling."
    ],
    logo: u5,
  },
  {
    company: "U-M Information & Technology Services",
    period: "May 2025 - Dec 2025",
    position: "Software Engineering Intern",
    type: "Internship",
    location: "Ann Arbor, MI",
    skills: ["Kubernetes", "OpenShift", "Docker", "Django", "PostgreSQL", "CI/CD"],
    description: [
      "Led containerization and migration of Ape-db (3,000+ research records) to Kubernetes and OpenShift, reducing environment setup errors by 40% and minimizing researcher downtime.",
      "Upgraded the MICUSP corpus platform (829 academic papers) with Django, eXist-db, and multi-stage Docker builds, reducing image size by 60% and build times by 30%.",
      "Standardized deployment workflows, container registries, and technical documentation across research engineering teams."
    ],
    logo: umits,
  },
  {
    company: "U-M Information & Technology Services",
    period: "Aug 2025 - May 2026",
    position: "Technology Consultant",
    type: "Part-time",
    location: "Ann Arbor, MI",
    skills: ["System Administration", "Log Diagnostics", "macOS / Windows", "Troubleshooting", "Incident Triage"],
    description: [
      "Triaged, diagnosed, and resolved real-time hardware, network, and software issues across macOS and Windows systems for campus students, faculty, and staff.",
      "Investigated system access logs and configuration bottlenecks, translating technical issues into clear next steps and collaborating with backend teams on permanent fixes."
    ],
    logo: umits,
  },
  {
    company: "InceptEV",
    period: "Aug 2024 - Dec 2024",
    position: "Data Science Intern",
    type: "Internship",
    location: "Ann Arbor, MI",
    skills: ["Python", "Julia", "Pandas", "Data Validation", "Simulation Analytics"],
    description: [
      "Engineered automated data validation and anomaly detection workflows across EV telemetry datasets to improve simulation reliability.",
      "Developed cleaning and transformation pipelines using Python, Julia, and Pandas to catch dataset edge cases and improve downstream modeling fidelity."
    ],
    logo: inceptev,
  },
  {
    company: "Perot Jain TechLab Electrification",
    period: "Aug 2024 - Dec 2025",
    position: "Student Researcher",
    type: "Research",
    location: "Ann Arbor, MI",
    skills: ["Electrification", "Product Discovery", "Technical Roadmapping", "Startup Advisory"],
    description: [
      "Collaborated directly with early-stage electrification startups to identify infrastructure, market, and technical constraints.",
      "Translated ambiguous startup challenges into actionable product specifications, feasibility studies, and engineering recommendations."
    ],
    logo: pjtl,
  },
  {
    company: "Spire Investment Partners",
    period: "Jun 2024 - Aug 2024",
    position: "Technology & Cybersecurity Intern",
    type: "Internship",
    location: "McLean, VA",
    skills: ["Python", "REST APIs", "Automation", "Access Management", "Cybersecurity"],
    description: [
      "Architected and deployed a 300+ employee directory platform and REST API automations, reducing onboarding cycle times by 70% across 200+ customer accounts.",
      "Automated internal user provisioning and access-control workflows within the SDLC to streamline operational security and compliance."
    ],
    logo: spire,
  },
  {
    company: "Skylark Drones",
    period: "Jun 2023 - Aug 2023",
    position: "Research Intern",
    type: "Internship",
    location: "Bangalore, India",
    skills: ["Python", "Tkinter", "Image Processing", "Technical Training"],
    description: [
      "Built a desktop Python/Tkinter application to batch-convert and validate thermal imagery datasets from R-JPEG to TIFF formats for geospatial pipelines.",
      "Partnered with the Government of India Ministry of Skill Development & Entrepreneurship to develop standardized training coursework for surveying and topography workflows."
    ],
    logo: skylark,
  },
  {
    company: "Michigan Equity Research Club",
    period: "Jan 2023 - Feb 2024",
    position: "VP of Technology & Project Manager",
    type: "Leadership",
    location: "Ann Arbor, MI",
    skills: ["Web Development", "Project Management", "Financial Modeling", "Team Leadership"],
    description: [
      "Engineered and maintained the organization's web platform to improve public presence, applicant recruitment, and research distribution.",
      "Mentored student research cohorts through financial modeling, valuation analysis, economic reporting, and final investment pitch deliverables."
    ],
    logo: merc,
  },
  {
    company: "NOBE Engineering Consulting",
    period: "Jan 2023 - Feb 2024",
    position: "Engineering Consultant",
    type: "Consulting",
    location: "Ann Arbor, MI",
    skills: ["UX Research", "Figma", "Data Architecture", "Client Advisory"],
    description: [
      "Conducted user experience audits and workflow optimizations for client organizations, including usability research for U-M Human Resources.",
      "Designed structured data organization frameworks for bioinformatics datasets to eliminate navigation friction and optimize research discoverability."
    ],
    logo: nobe,
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
              <img
                src={pfp4}
                alt="Yash Dumpeta"
                className="hero-avatar"
                width="84"
                height="84"
                fetchPriority="high"
                decoding="sync"
              />
              <span className="status-badge-dot" title="Available for work"></span>
            </div>
            <div className="hero-title-block">
              <h1 className="hero-name">Yash Dumpeta</h1>
              <div className="hero-role">Engineer</div>
              <div className="hero-education-line">B.S.E. in CSE @ University of Michigan</div>
            </div>
          </div>

          <div className="hero-bio">
            <p>
              I&apos;m a Computer Science &amp; Engineering graduate from the{' '}
              <span className="tooltip-trigger">
                <strong>University of Michigan</strong>
                <div className="tooltip-card side-right">
                  <div className="tooltip-title">University of Michigan</div>
                  <div className="tooltip-item">
                    <span className="tooltip-label">Top-Tier Global Institution:</span> Consistently ranked among the top 3 public universities in the U.S. and top 20 globally.
                  </div>
                  <div className="tooltip-item">
                    <span className="tooltip-label">World-Class Engineering &amp; CS:</span> Home to a top-5 nationally ranked undergraduate engineering program, known for rigorous systems, distributed computing, and AI research.
                  </div>
                </div>
              </span>{' '}
              and currently work as a Software Engineering Intern at{' '}
              <span className="tooltip-trigger">
                <strong>Utilidata</strong>
                <div className="tooltip-card bottom-left">
                  <div className="tooltip-title">Utilidata</div>
                  <div className="tooltip-item">
                    <span className="tooltip-label">Grid-Edge AI Pioneer:</span> Leading technology company bringing real-time artificial intelligence and power orchestration to electrical grid infrastructure and data centers.
                  </div>
                  <div className="tooltip-item">
                    <span className="tooltip-label">NVIDIA Strategic Co-Development:</span> Co-developed the Karman distributed AI platform with NVIDIA, leveraging custom Jetson edge modules to run high-speed compute directly inside grid-connected hardware.
                  </div>
                </div>
              </span>.
            </p>
            <p>
              Coming from an international background, I&apos;ve learned to adapt quickly, wear different hats, and figure things out without needing everything mapped out. I enjoy working in close team environments, taking messy or unclear problems, and simply building practical software that gets the job done.
            </p>
            <p>
              Outside of tech, I&apos;m a big sports fan, love following Formula 1, and always enjoy picking up new skills.
            </p>
          </div>

          {/* Quick Contact & Action Pills */}
          <div className="hero-action-pills">
            <button className="action-pill email-pill" onClick={handleCopyEmail}>
              {copiedEmail ? <FaCheck className="pill-icon green" /> : <FaEnvelope className="pill-icon" />}
              <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
            </button>


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
              href="https://github.com/yashdumpeta"
              target="_blank"
              rel="noopener noreferrer"
              className="action-pill"
            >
              <FaGithub className="pill-icon" />
              <span>GitHub</span>
            </a>

            <a
              href="/YD%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-pill"
            >
              <FaFileLines className="pill-icon" />
              <span>Resume</span>
            </a>
          </div>
        </section>

        <div className="section-divider"></div>

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
                  <button
                    type="button"
                    className="exp-card-main"
                    onClick={() => toggleExperience(index)}
                    aria-expanded={isExpanded}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="exp-company-logo"
                      width="68"
                      height="68"
                      loading="lazy"
                      decoding="async"
                    />
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
                    <span className="exp-toggle-btn" aria-hidden="true">
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>

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

        <div className="section-divider"></div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-block">
          <div className="block-header">
            <h2 className="block-title">Things I&apos;ve Built</h2>
          </div>

          <div className="projects-grid-list">
            {projects.map((project, index) => (
              <div key={index} className="minimal-project-card">
                <div className="project-preview-wrapper">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-preview-img"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="project-preview-code">
                      <div className="code-header">
                        <span className="code-dot red"></span>
                        <span className="code-dot yellow"></span>
                        <span className="code-dot green"></span>
                        <span className="code-filename">{project.code_filename || "tracker.ts"}</span>
                      </div>
                      <div className="code-body">
                        {project.code_snippet ? project.code_snippet : (
                          <>
                            <div><span className="code-kw">import</span> EventTracker <span className="code-kw">from</span> <span className="code-str">&quot;@open-tracker/core&quot;</span>;</div>
                            <div><span className="code-kw">const</span> tracker = <span className="code-kw">new</span> <span className="code-fn">EventTracker</span>(&#123;</div>
                            <div>&nbsp;&nbsp;apiKey: <span className="code-str">&quot;evt_test_12345&quot;</span>,</div>
                            <div>&nbsp;&nbsp;maxRetries: <span className="code-num">3</span></div>
                            <div>&#125;);</div>
                            <div><span className="code-kw">await</span> tracker.<span className="code-fn">trackEvent</span>(<span className="code-str">&quot;user_signup&quot;</span>);</div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
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

            {/* 6th Slot CTA Card */}
            <a
              href="https://github.com/yashdumpeta?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-project-card view-more-card"
            >
              <div className="view-more-card-content">
                <FaGithub className="view-more-icon" />
                <span className="view-more-text">View More Projects</span>
                <FaArrowRight className="view-more-arrow" />
              </div>
            </a>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* SKILLS SECTION */}
        <SkillSection />

        <div className="section-divider"></div>

        {/* CONNECT SECTION */}
        <section id="contact" className="section-block connect-block">
          <div className="connect-card">
            <h2 className="block-title">Let&apos;s Connect</h2>
            <div className="connect-body">
              <p>
                I&apos;m always open to discussing new opportunities, collaborating on practical projects, or just chatting about sports, food, travelling, etc.
              </p>
              <p>
                Whether you&apos;re hiring for an engineering role, have feedback on my work, or just want to connect, feel free to reach out.
              </p>
            </div>
            <div className="connect-actions">
              <button className="connect-pill primary" onClick={handleCopyEmail}>
                {copiedEmail ? <FaCheck className="pill-icon green" /> : <FaEnvelope className="pill-icon" />}
                <span>{copiedEmail ? "Email Copied!" : "Send an Email"}</span>
              </button>
              <span className="connect-dot">•</span>
              <a
                href="https://www.linkedin.com/in/ydumpeta/"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-pill"
              >
                <FaLinkedin className="pill-icon" />
                <span>LinkedIn</span>
              </a>
              <span className="connect-dot">•</span>
              <a
                href="https://github.com/yashdumpeta"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-pill"
              >
                <FaGithub className="pill-icon" />
                <span>GitHub</span>
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
