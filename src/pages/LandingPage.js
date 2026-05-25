import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import SkillSection from "../components/SkillSection";
import { FaArrowRight, FaCode, FaEnvelope, FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";
import Footer from "../components/Footer";
import CircularText from "../components/CircularText";
import fileEarmarkCodeIcon from "../assets/images/file-earmark-code-fill.svg";
import accountIcon from "../assets/images/account_17740774.png";
import bagIcon from "../assets/images/bag_12565748.png";
import { projects } from "../data/projects";
import pfp4 from "../assets/images/pfp4.JPG";


// Experience images
import michLogo from "../assets/images/michengineering2.jpeg";
import merc from "../assets/images/merc.jpeg";
import skylark from "../assets/images/skylark.jpg";
import spire from "../assets/images/spire.png";
import nobe from "../assets/images/nobe.png";
import pjtl from "../assets/images/pjtl.png";
import inceptev from "../assets/images/inceptev.png";
import u5 from "../assets/images/utilidata5.png";
import umits from "../assets/images/umits.jpg";

const LandingPage = () => {
  const firstSentence = "Through internships, projects, and consulting-oriented work, I've contributed to backend systems, ML workflows, and technical tools. I care about reliable engineering, ";
  const secondSentence = "clear communication, and solving problems that matter to users and teams";
  const [displayedText, setDisplayedText] = useState(firstSentence);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const projectsSubtitle = "Selected projects focused on useful products, collaborative workflows, and full-stack execution";
  const [displayedProjectsSubtitle, setDisplayedProjectsSubtitle] = useState("");
  const [isProjectsTypingComplete, setIsProjectsTypingComplete] = useState(false);
  const [threadHeight, setThreadHeight] = useState(0);
  const [horizontalThreadTop, setHorizontalThreadTop] = useState(0);
  const [horizontalThreadWidth, setHorizontalThreadWidth] = useState(0);
  const [rightThreadHeight, setRightThreadHeight] = useState(0);
  const [projectsNodeLeft, setProjectsNodeLeft] = useState(0);
  const [bentoNodeTop, setBentoNodeTop] = useState(0);
  const [experienceNodeTop, setExperienceNodeTop] = useState(0);

  useEffect(() => {
    // Start with first sentence preloaded, then type the second sentence
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < secondSentence.length) {
        setDisplayedText(firstSentence + secondSentence.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 40); // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval);
  }, []); // Run once on mount

  useEffect(() => {
    // Typewriter effect for projects subtitle
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < projectsSubtitle.length) {
        setDisplayedProjectsSubtitle(projectsSubtitle.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsProjectsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 40); // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval);
  }, []); // Run once on mount

  useEffect(() => {
    // Calculate thread heights and horizontal thread position
    const calculateThreads = () => {
      const experienceSection = document.getElementById('experience');
      const footer = document.querySelector('footer');
      const landingPage = document.querySelector('.landing-page');
      
      if (experienceSection && landingPage) {
        const headerHeight = 100; // padding-top of landing-page
        const experienceBottom = experienceSection.getBoundingClientRect().bottom + window.scrollY;
        const threadTop = headerHeight;
        const leftThreadHeight = experienceBottom - threadTop;
        setThreadHeight(Math.max(0, leftThreadHeight));
        
        // Calculate horizontal thread position (at experience section end)
        const horizontalTop = experienceBottom;
        setHorizontalThreadTop(horizontalTop);
        
        // Calculate horizontal thread width
        // Left thread position: calc((100% - 1200px) / 2)
        // Right thread position: same calculation but on right side
        const viewportWidth = window.innerWidth;
        const contentWidth = 1200;
        const threadPosition = viewportWidth > 1240 ? (viewportWidth - contentWidth) / 2 : 20;
        // Horizontal thread spans from left thread to right thread
        const horizontalWidth = viewportWidth - (threadPosition * 2);
        setHorizontalThreadWidth(Math.max(0, horizontalWidth));
        
        // Calculate right vertical thread height (from horizontal line to footer)
        if (footer) {
          const footerTop = footer.getBoundingClientRect().top + window.scrollY;
          const rightThreadTop = horizontalTop;
          const height = footerTop - rightThreadTop;
          setRightThreadHeight(Math.max(0, height));
        }
        
        // Calculate projects node position (on horizontal thread above Projects title)
        const projectsSection = document.getElementById('projects');
        const horizontalThreadEl = document.querySelector('.horizontal-thread');
        if (projectsSection && horizontalThreadEl) {
          const projectsTitle = projectsSection.querySelector('.section-title-projects');
          if (projectsTitle) {
            const titleRect = projectsTitle.getBoundingClientRect();
            const threadRect = horizontalThreadEl.getBoundingClientRect();
            // Calculate position relative to horizontal thread's left edge
            const nodeLeft = (titleRect.left + window.scrollX) - (threadRect.left + window.scrollX);
            setProjectsNodeLeft(Math.max(0, nodeLeft));
          }
        }
        
        // Calculate bento grid node position (on left vertical thread, aligned with bento grid top)
        const bentoGrid = document.querySelector('.bento-grid');
        const verticalThreadEl = document.querySelector('.vertical-thread');
        if (bentoGrid && verticalThreadEl) {
          const bentoRect = bentoGrid.getBoundingClientRect();
          const threadRect = verticalThreadEl.getBoundingClientRect();
          // Calculate position relative to vertical thread's top (top of bento grid)
          const bentoTop = bentoRect.top + window.scrollY;
          const threadTop = threadRect.top + window.scrollY;
          const nodeTop = bentoTop - threadTop;
          setBentoNodeTop(Math.max(0, nodeTop));
        }
        
        // Calculate experience section node position (on left vertical thread, aligned with experience section top)
        if (experienceSection && verticalThreadEl) {
          const experienceRect = experienceSection.getBoundingClientRect();
          const threadRect = verticalThreadEl.getBoundingClientRect();
          // Calculate position relative to vertical thread's top (top of experience section)
          const experienceTop = experienceRect.top + window.scrollY;
          const threadTop = threadRect.top + window.scrollY;
          const nodeTop = experienceTop - threadTop;
          setExperienceNodeTop(Math.max(0, nodeTop));
        }
      }
    };

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      calculateThreads();
    }, 100);

    window.addEventListener('resize', calculateThreads);
    window.addEventListener('scroll', calculateThreads);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateThreads);
      window.removeEventListener('scroll', calculateThreads);
    };
  }, []);

  const workExperiences = [
    {
      company: "Utilidata",
      period: "January 2025 - Present",
      position: "Software Engineering Intern",
      type: "Internship",
      location: "Ann Arbor, MI",
      skills: ["Python", "ML Workflows", "Data Processing", "MLOps", "Generative AI", "Workflow Automation"],
      description: [
        "Built and evaluated a flow matching generative model for waveform data, exploring its potential for synthetic data generation, modeling, and downstream ML experimentation.",
        "Improved reproducibility of internal ML workflows through tooling, documentation, and environment setup across local and remote systems.",
        "Worked across Python, data processing, and infrastructure workflows to support model experimentation and optimization.",
        "Collaborated with engineers to turn research-oriented model experiments into practical workflows that could be evaluated for production use."
      ],
      logo: u5,
    },
    {
      company: "University of Michigan Information and Technology Services",
      period: "May 2025 - December 2025",
      position: "Software Engineering Intern",
      type: "Internship",
      location: "Ann Arbor, MI",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "Platform Support", "Documentation"],
      description: [
        "Supported research computing infrastructure used by university researchers and technical teams.",
        "Contributed to infrastructure workflows involving deployment, reliability, and platform support.",
        "Worked with engineering teams to improve technical documentation and operational processes."
      ],
      logo: umits,
    },
    {
      company: "InceptEV",
      period: "August 2024 - December 2024",
      position: "Data Science Intern",
      type: "Internship",
      location: "Ann Arbor, MI",
      skills: ["Python", "Julia", "Pandas", "Data Validation", "Data Analysis"],
      description: [
        "Validated simulation datasets to identify inconsistencies, anomalies, and quality issues in EV-related data workflows.",
        "Supported data cleaning and analysis processes used to improve simulation reliability and downstream evaluation."
      ],
      logo: inceptev,
    },
    {
      company: "Spire Investment Partners",
      period: "June 2024 - August 2024",
      position: "Technology and Cybersecurity Intern",
      type: "Internship",
      location: "McLean, VA",
      skills: ["REST APIs", "Internal Tools", "Automation", "Cybersecurity", "Operations"],
      description: [
        "Built internal tools and REST API workflows to streamline onboarding and operational processes.",
        "Supported technology and cybersecurity initiatives for internal teams and customer-facing business operations.",
        "Improved onboarding workflows for employees through automation and internal tooling."
      ],
      logo: spire,
    },
    {
      company: "Skylark Drones",
      period: "June 2023 - August 2023",
      position: "Research Intern",
      type: "Internship",
      location: "Bangalore, India",
      skills: ["Python", "Tkinter", "Image Processing", "Technical Communication"],
      description: [
        "Created technical training materials for drone operator workflows in partnership with public-sector stakeholders.",
        "Built a Python UI that helped users convert thermal image datasets from R-JPEG to TIFF with clearer feedback and validation."
      ],
      logo: skylark,
    },
    {
      company: "Michigan Equity Research Club",
      period: "January 2023 - February 2024",
      position: "VP of Technology & Project Manager",
      type: "Leadership",
      location: "Ann Arbor, MI",
      skills: ["Web Development", "Project Management", "Technical Communication"],
      description: [
        "Led technology and web efforts to improve the club's online presence and member communication.",
        "Managed a student research team through market analysis, synthesis, and final presentation work."
      ],
      logo: merc,
    },
    {
      company: "NOBE",
      period: "January 2023 - February 2024",
      position: "Engineering Consultant",
      type: "Consulting",
      location: "Ann Arbor, MI",
      skills: ["Consulting", "UX Research", "Figma", "Data Analysis", "Client Communication"],
      description: [
        "Worked with client teams to identify user pain points and improve technical workflows.",
        "Contributed to website usability analysis for U-M Human Resources and data organization work for a bioinformatics client."
      ],
      logo: nobe,
    },
    {
      company: "Center for Entrepreneurship - Perot Jain TechLab Electrification",
      period: "August 2024 - Present",
      position: "Student Researcher",
      type: "Research",
      location: "Ann Arbor, MI",
      skills: ["Research", "Electrification", "Startup Collaboration", "Product Discovery"],
      description: [
        "Collaborated with early-stage electrification companies to understand technical and market constraints.",
        "Translated ambiguous startup problems into research, product, and engineering recommendations."
      ],
      logo: pjtl,
    },
  ];

  return (
    <div className="landing-page">
      {/* Vertical Thread - Left */}
      <div className="vertical-thread" style={{ height: threadHeight > 0 ? `${threadHeight}px` : 'auto' }}>
        {/* Bento Grid Node */}
        {bentoNodeTop > 0 && (
          <div 
            className="thread-node bento-node"
            style={{ 
              top: `${bentoNodeTop}px`
            }}
          >
            <div className="thread-node-circle">
              <img src={accountIcon} alt="Home" className="thread-node-icon" />
            </div>
          </div>
        )}
        
        {/* Experience Section Node */}
        {experienceNodeTop > 0 && (
          <div 
            className="thread-node experience-node"
            style={{ 
              top: `${experienceNodeTop}px`
            }}
          >
            <div className="thread-node-circle">
              <img src={bagIcon} alt="Experience" className="thread-node-icon" />
            </div>
          </div>
        )}
      </div>

      {/* Horizontal Thread */}
      <div 
        className="horizontal-thread" 
        style={{ 
          top: horizontalThreadTop > 0 ? `${horizontalThreadTop}px` : 'auto',
          width: horizontalThreadWidth > 0 ? `${horizontalThreadWidth}px` : 'auto'
        }}
      >
        {/* Projects Node */}
        {projectsNodeLeft > 0 && (
          <div 
            id="projects-thread-node"
            className="thread-node projects-node"
            style={{ 
              left: `${projectsNodeLeft}px`
            }}
          >
            <div className="thread-node-circle">
              <img src={fileEarmarkCodeIcon} alt="Projects" className="thread-node-icon" />
            </div>
          </div>
        )}
      </div>

      {/* Vertical Thread - Right */}
      <div 
        className="vertical-thread-right" 
        style={{ 
          top: horizontalThreadTop > 0 ? `${horizontalThreadTop}px` : 'auto',
          height: rightThreadHeight > 0 ? `${rightThreadHeight}px` : 'auto'
        }}
      ></div>
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="bento-grid">
          {/* Education Card - Top Left (UMich) */}
          <div className="bento-card identity-card education-bento-card">
            <div className="education-bento-content">
              <img src={michLogo} alt="U-M" className="education-bento-logo" />
              <div className="education-bento-details">
                <h2 className="education-bento-university">University of Michigan</h2>
                <p className="education-bento-degree">B.S.E. in Computer Science and Engineering</p>
                <p className="education-bento-period">2022 - 2026</p>
              </div>
            </div>
            <div className="bio-container">
              <p className="bio-text">
                <strong>Hi, I'm Yash Dumpeta.</strong><br /><br />
                I'm a recent University of Michigan College of Engineering graduate with a <strong>B.S.E. in Computer Science and Engineering</strong>, currently working as a <strong>Software Engineering Intern at Utilidata</strong>.<br /><br />
                I'm interested in <strong>backend</strong>, <strong>full-stack</strong>, and <strong>customer-facing technical roles</strong> where I can combine engineering, problem solving, and real-world impact.
              </p>
            </div>
          </div>

          {/* Profile Card - Top Right (Profile Pic) */}
          <div className="bento-card profile-card">
            <img src={pfp4} alt="Yash Dumpeta" className="profile-img" />
          </div>

          {/* Four Equal Squares - Bottom Left Top */}
          <a href="https://www.linkedin.com/in/ydumpeta/" target="_blank" rel="noopener noreferrer" className="bento-card square-card square-2">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yashdumpeta" target="_blank" rel="noopener noreferrer" className="bento-card square-card square-3">
            <FaGithub />
          </a>
          <a href="/YD - Resume.pdf" target="_blank" rel="noopener noreferrer" className="bento-card square-card square-4" aria-label="View resume">
            <FaFileLines />
          </a>
          <a href="mailto:ydumpeta@gmail.com" className="bento-card square-card square-1" aria-label="Email Yash">
            <FaEnvelope />
          </a>

          {/* Circular Text - Bottom Left Bottom (Circle) */}
          <div className="circular-text-wrapper">
            <CircularText className="circular-text" text="SCROLL DOWN ⋅ TO LEARN MORE ⋅ " />
          </div>

          {/* Skills Card - Bottom Right (Skills) */}
          <div className="bento-card skills-card">
            <p className="skills-intro-text">
              Core tools and practices I use across software engineering, ML/data workflows, infrastructure, and customer-facing technical work.
            </p>
            <SkillSection isBento />
          </div>
        </div>
      </section>

      <section className="looking-section" aria-labelledby="looking-heading">
        <div className="looking-card">
          <h2 id="looking-heading">What I'm looking for</h2>
          <p>
            I'm currently exploring early-career opportunities across software engineering, backend/full-stack engineering, forward deployed engineering, solutions engineering, and technical consulting. I'm open to roles across the U.S.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <h1 className="section-title-work"><strong>Experiences</strong></h1>
          <div className="work-subsection">
            <motion.h1 
              className="section-title-experience"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {displayedText}
              <span className={`typewriter-cursor ${isTypingComplete ? 'blink' : ''}`}>|</span>
            </motion.h1>
            <div className="experience-list">
              {workExperiences.map((exp, index) => (
                <motion.div 
                  className="exp-card"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -1.5,
                    scale: 1.03,
                    transition: { duration: 0.1, ease: "easeInOut" }
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
                    y: { duration: 0.15, ease: "easeOut" },
                    scale: { duration: 0.15, ease: "easeOut" }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="exp-logo-wrapper">
                    <img src={exp.logo} alt={exp.company} className="exp-logo" />
                  </div>
                  <div className="exp-content">
                    <div className="exp-header">
                      <h3 className="exp-company">{exp.company}</h3>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-position">{exp.position}</span>
                      <span className="exp-divider">·</span>
                      <span className="exp-type">{exp.type}</span>
                      <span className="exp-divider">-</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                    <div className="exp-skills">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="exp-skill-tag">{skill}</span>
                      ))}
                    </div>
                    <ul className="exp-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          {/* Intro: Row 1, Column 1 */}
          <div className="projects-intro-section">
            <h1 className="section-title-projects serif">Projects</h1>
            <p className="intro-subtitle">
              {displayedProjectsSubtitle}
              <span className={`typewriter-cursor ${isProjectsTypingComplete ? 'blink' : ''}`}>|</span>
            </p>
            <a href="https://github.com/yashdumpeta" className="contact-btn">
              View more projects <FaGithub />
            </a>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card-content">
                {project.featured && <span className="featured-project-badge">Featured Project</span>}
                <h2 className="project-title serif">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech_used.map((tech, i) => (
                    <span key={i} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                    >
                      View Project <FaArrowRight />
                    </a>
                  )}
                  {project.source_code && (
                    <a
                      href={project.source_code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn secondary"
                    >
                      <FaCode /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-panel">
          <h2 id="contact-heading">Contact</h2>
          <p>
            I'm currently open to early-career software engineering, backend/full-stack engineering, forward deployed engineering, solutions engineering, and technical consulting roles across the U.S.
          </p>
          <div className="contact-links">
            <a href="mailto:ydumpeta@gmail.com">Email: ydumpeta@gmail.com</a>
            <a href="https://www.linkedin.com/in/ydumpeta/" target="_blank" rel="noopener noreferrer">LinkedIn: https://www.linkedin.com/in/ydumpeta/</a>
            <a href="https://github.com/yashdumpeta" target="_blank" rel="noopener noreferrer">GitHub: https://github.com/yashdumpeta</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
