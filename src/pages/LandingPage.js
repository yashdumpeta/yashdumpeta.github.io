import React from "react";
import "./LandingPage.css";
import SkillSection from "../components/SkillSection";
import { FaArrowRight, FaCode, FaEnvelope } from "react-icons/fa6";
import { DescriptionOutlined as DescriptionOutlinedIcon, EmailOutlined as EmailOutlinedIcon } from "@mui/icons-material";
import Footer from "../components/Footer";
import prof2 from "../assets/images/prof-pic2.jpg";
import CircularText from "../components/CircularText";

// Experience images
import michLogo from "../assets/images/michengineering2.jpeg";
import umits from "../assets/images/umits.jpg";
import u5 from "../assets/images/utilidata5.png";
import inceptev from "../assets/images/inceptev.png";
import pjtl from "../assets/images/pjtl.png";

// Project images
import Umazing from "../assets/images/Umazing.png";
import Selectaraunt from "../assets/images/Selectaraunt.png";
import recalld from "../assets/images/recalld.png";
import recipeFind from "../assets/images/recipeFind.png";

const LandingPage = () => {
  const workExperiences = [
    {
      company: "U-M ITS",
      period: "May 2025 - Present",
      position: "Software Developer Intern",
      description:
        "Maintaining and enhancing Docker- and Kubernetes-based research deployments—integrating MongoDB, eXist-db, and MariaDB backends.",
      logo: umits,
    },
    {
      company: "Utilidata",
      period: "January 2025 - Present",
      position: "Machine Learning Intern",
      description: "MLOps and Model Optimization for edge-AI applications.",
      logo: u5,
    },
    {
      company: "InceptEV",
      period: "Aug - Dec 2024",
      position: "Data Science Intern",
      description:
        "Conducted data validation study on simulation accuracy for fleet management software.",
      logo: inceptev,
    },
    {
      company: "PJTL Electrification",
      period: "Aug 2024 - Present",
      position: "Student Researcher",
      description:
        "Collaborating with startups to tackle real-world challenges in the electrification space.",
      logo: pjtl,
    },
  ];

  const projects = [
    {
      title: "UMazing",
      image: Umazing,
      source_code: "https://github.com/MishanGagnon/mhacks2024",
      tech_used: [
        "Next.js",
        "Typescript",
        "Node.js",
        "React.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Python",
        "Vercel",
        "OpenAI",
        "Railway",
      ],
      description:
        "AI-powered academic advisor bot designed to revolutionize course selection and academic planning. Developed during MHacks 24.",
      link: "https://mhack2024-production.up.railway.app/",
    },
    {
      title: "Selectaraunt",
      image: Selectaraunt,
      source_code: "",
      tech_used: [
        "Next.js",
        "Typescript",
        "Node.js",
        "React.js",
        "Tailwind CSS",
        "Supabase",
        "Socket.io",
        "Leaflet",
        "Yelp API",
      ],
      description:
        "Real-time multiplayer web application for group restaurant decision-making using swipeable cards.",
      link: "https://selectaraunt.up.railway.app/",
    },
    {
      title: "recalld",
      image: recalld,
      source_code: "https://github.com/yashdumpeta/recalld",
      tech_used: ["Python", "Django", "React.js", "JavaScript", "MySQL"],
      description:
        "Dynamic full-stack flashcard app designed for active recall and spaced repetition learning.",
    },
    {
      title: "recipeFind",
      image: recipeFind,
      source_code: "https://github.com/yashdumpeta/recipeFind",
      tech_used: ["React.js", "JavaScript", "Edamam API"],
      description:
        "Web app for discovering over 2.3 million recipes using the Edamam API.",
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="bento-grid">
          {/* Identity Card - Top Left (About Me) */}
          <div className="bento-card identity-card">
            <div className="bio-container">
              <p className="bio-text">
                <italic>Hello,</italic> I'm <strong>Yash</strong>, a senior at the University of Michigan's College of Engineering studying <strong>Computer Science</strong>. <br /><br />

                I'm interested in <strong>backend</strong> and <strong>product engineering</strong> in startup-style environments. I enjoy working on systems and product features that support real, usable applications.
              </p>
            </div>
          </div>

          {/* Profile Card - Top Right (Profile Pic) */}
          <div className="bento-card profile-card">
            <img src={prof2} alt="Yash Dumpeta" className="profile-img" />
          </div>

          {/* Contact Card - Bottom Left Top (Small Square) */}
          <a
            href="mailto:ydumpeta@umich.edu"
            className="bento-card contact-card"
          >
            <EmailOutlinedIcon className="contact-icon" />
            <span className="contact-text">Get in Touch</span>
          </a>

          {/* Circular Text - Bottom Left Bottom (Circle) */}
          <div className="circular-text-wrapper">
            <CircularText className="circular-text" text="SCROLL DOWN ⋅ TO LEARN MORE ⋅ " />
          </div>

          {/* Skills Card - Bottom Right (Skills) */}
          <div className="bento-card skills-card">
            <SkillSection isBento />
          </div>

          {/* Resume Card - Keep it somewhere? Maybe as a small floating card or integrated? 
              The wireframe only shows 5 boxes. I'll merge Resume into the grid as another item if needed, 
              but the wireframe has 5. Identity, Profile, Contact, Circle, Skills. 
              I'll put Resume inside Contact or just replace it as I did above. 
              Wait, the user said "The circle is the circular text and above should be a get in touch bento box."
              I'll assume Resume is replaced by Contact for now, or I'll add Resume as a 6th card. 
              The drawing shows exactly 5 items. 
          */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="education-subsection">
            <h1 className="section-title serif">Education</h1>
            <div className="experience-card education-card">
              <img src={michLogo} alt="U-M" className="experience-logo" />
              <div className="experience-details">
                <h2 className="serif">University of Michigan</h2>
                <p className="position">B.S.E. in Computer Science</p>
                <p className="period">2022 - 2026</p>
              </div>
            </div>
          </div>

          <div className="work-subsection">
            <h1 className="section-title serif">Experience</h1>
            <div className="experience-grid">
              {workExperiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                  <div className="card-header">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="experience-logo"
                    />
                    <div>
                      <h2 className="serif">{exp.company}</h2>
                      <p className="position">{exp.position}</p>
                    </div>
                  </div>
                  <p className="description">{exp.description}</p>
                  <p className="period">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          {/* Left Side: Intro */}
          <div className="projects-intro-section">
            <div className="intro-sticky">
              <h1 className="section-title serif">Projects</h1>
              <p className="intro-subtitle">
                Over the past few years, I've worked on various projects. Here
                are a few of my best:
              </p>
              <a href="mailto:ydumpeta@umich.edu" className="contact-btn">
                Get in touch <FaArrowRight />
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
                      <span key={i} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h2 className="project-title serif">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
