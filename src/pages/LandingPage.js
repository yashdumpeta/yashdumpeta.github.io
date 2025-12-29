import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import SkillSection from "../components/SkillSection";
import { FaArrowRight, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { DescriptionOutlined as DescriptionOutlinedIcon, EmailOutlined as EmailOutlinedIcon } from "@mui/icons-material";
import Footer from "../components/Footer";
import prof2 from "../assets/images/prof-pic2.jpg";
import CircularText from "../components/CircularText";
import fileEarmarkCodeIcon from "../assets/images/file-earmark-code-fill.svg";
import accountIcon from "../assets/images/account_17740774.png";
import bagIcon from "../assets/images/bag_12565748.png";

// Experience images
import michLogo from "../assets/images/michengineering2.jpeg";
import merc from "../assets/images/merc.jpeg";
import skylark from "../assets/images/skylark.jpg";
import spire from "../assets/images/spire.png";
import nobe from "../assets/images/nobe.png";
import rec from "../assets/images/recsports.png";
import pjtl from "../assets/images/pjtl.png";
import inceptev from "../assets/images/inceptev.png";
import u5 from "../assets/images/utilidata5.png";
import umits from "../assets/images/umits.jpg";

// Project images
import Umazing from "../assets/images/Umazing.png";
import Selectaraunt from "../assets/images/Selectaraunt.png";
import recalld from "../assets/images/recalld.png";
import recipeFind from "../assets/images/recipeFind.png";

const LandingPage = () => {
  const firstSentence = "Through internships and research, I've contributed to backend systems, ML workflows, and production infrastructure. I care about reliability, ";
  const secondSentence = "clarity, and making incremental improvements that compound over time";
  const [displayedText, setDisplayedText] = useState(firstSentence);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const projectsSubtitle = "Over the past few years, I've worked on various projects. Here are a few of my best";
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
      company: "U-M Information and Technology Services",
      period: "May 2025 - Present",
      position: "Software Developer Intern",
      type: "Internship",
      location: "Ann Arbor, MI",
      skills: ["Docker", "Kubernetes", "MongoDB", "Python", "GitHub Actions"],
      description: [
        "Maintaining and enhancing Docker- and Kubernetes-based research deployments—integrating MongoDB, eXist-db, and MariaDB backends.",
        "Automating CI/CD workflows with GitHub Actions for Python, R, and PHP applications."
      ],
      logo: umits,
    },
    {
      company: "Utilidata",
      period: "January 2025 - Present",
      position: "Machine Learning Intern",
      type: "Internship",
      location: "Remote",
      skills: ["Python", "MLOps", "TensorFlow", "Model Optimization"],
      description: [
        "Working on MLOps and Model Optimization for edge-AI applications."
      ],
      logo: u5,
    },
    {
      company: "Utilidata",
      period: "August 2025 - Present",
      position: "Computer Consultant I",
      type: "Part-time",
      location: "Ann Arbor, MI",
      skills: [
        "Systems & Device Diagnostics",
        "Operational Problem Solving",
        "Technical Communication",
        "User-Centered Support"
      ],      
      description: [
        "Diagnosed and resolved hardware and software issues across macOS, Windows, printers, and other campus-managed systems, performing device imaging, system diagnostics, and on-site equipment maintenance.",
        "Worked directly with students, faculty, and staff to clarify technical issues, present solution paths, and drive timely resolution in fast-paced, high-traffic environments."
      ],       
      logo: umits,
    },
    {
      company: "InceptEV",
      period: "August 2024 - December 2024",
      position: "Data Science Intern",
      type: "Internship",
      location: "Ann Arbor, MI",
      skills: ["Python", "Julia", "Pandas", "Data Validation", "Fleet Management"],
      description: [
        "Conducted a data validation study on the simulation accuracy of InceptEV's fleet management software.",
        "Implemented a data pipeline for 40+ hours of data, processing raw OBDLink data from a Ford Mach-E EV."
      ],
      logo: inceptev,
    },
    {
      company: "PJTL Electrification",
      period: "August 2024 - Present",
      position: "Student Researcher",
      type: "Part-time",
      location: "Ann Arbor, MI",
      skills: ["Research", "Electrification", "Startups", "Product Development"],
      description: [
        "Collaborating with startups to tackle real-world challenges in the electrification space.",
        "Gaining hands-on experience and entrepreneurial skills through immersive, industry-driven projects."
      ],
      logo: pjtl,
    },
    {
      company: "Spire Investment Partners",
      period: "June 2024 - August 2024",
      position: "Technology & Cybersecurity Intern",
      type: "Internship",
      location: "McLean, VA",
      skills: ["RESTful APIs", "Database Design", "Project Management", "SDLC"],
      description: [
        "Engineered a centralized web portal to streamline onboarding and offboarding processes using RESTful APIs.",
        "Designed and implemented a secure, scalable employee directory database for over 200 clients and employees."
      ],
      logo: spire,
    },
    {
      company: "Skylark Drones",
      period: "June 2023 - August 2023",
      position: "Research Intern",
      type: "Internship",
      location: "Bangalore, India",
      skills: ["Python", "Tkinter", "Research", "Image Processing"],
      description: [
        "Collaborated with the Government of India Ministry of Skill Development to develop a drone operator course.",
        "Developed a Python UI to convert thermal image datasets from R-JPEG to TIFF format."
      ],
      logo: skylark,
    },
    {
      company: "U-M Recreational Sports",
      period: "January 2024 - Present",
      position: "Intramural Official",
      type: "Part-time",
      location: "Ann Arbor, MI",
      skills: ["Leadership", "Communication", "Time Management"],
      description: [
        "Officiating basketball and soccer matches, demonstrating proficiency in fast-paced environments.",
        "Managed game logistics including timekeeping, scorekeeping, and conflict resolution."
      ],
      logo: rec,
    },
    {
      company: "Michigan Equity Research Club",
      period: "January 2023 - February 2024",
      position: "VP of Technology & Project Manager",
      type: "Leadership",
      location: "Ann Arbor, MI",
      skills: ["Web Development", "Project Management", "Social Media"],
      description: [
        "Built an online presence on social media and programmed the organization's website.",
        "Led a project team researching and presenting equity analysis."
      ],
      logo: merc,
    },
    {
      company: "NOBE",
      period: "January 2023 - February 2024",
      position: "Engineering Consultant",
      type: "Consulting",
      location: "Ann Arbor, MI",
      skills: ["Figma", "Data Analytics", "Bioinformatics", "UX Research"],
      description: [
        "Optimized user flow for U-M Human Resources Department website using workforce data analytics and Figma.",
        "Collaborated with Curio Genomics to produce a database of crop ontologies and genome data."
      ],
      logo: nobe,
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
      source_code: "https://github.com/MishanGagnon/restaurant",
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
                <p className="education-bento-degree">B.S.E. in Computer Science</p>
                <p className="education-bento-period">2022 - 2026</p>
              </div>
            </div>
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

          {/* Four Equal Squares - Bottom Left Top */}
          <a href="https://www.linkedin.com/in/ydumpeta/" target="_blank" rel="noopener noreferrer" className="bento-card square-card square-2">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yashdumpeta" target="_blank" rel="noopener noreferrer" className="bento-card square-card square-3">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yash_dumpeta" target="_blank" rel="noopener noreferrer" className="bento-card square-card square-4">
            <FaXTwitter />
          </a>
          <a href="mailto:ydumpeta@umich.edu" className="bento-card square-card square-1">
            <FaEnvelope />
          </a>

          {/* Circular Text - Bottom Left Bottom (Circle) */}
          <div className="circular-text-wrapper">
            <CircularText className="circular-text" text="SCROLL DOWN ⋅ TO LEARN MORE ⋅ " />
          </div>

          {/* Skills Card - Bottom Right (Skills) */}
          <div className="bento-card skills-card">
            <p className="skills-intro-text">
              A growing set of technologies I've learned and used through classes, personal projects, internships, and self-directed exploration to design, deploy, and maintain real software systems.
            </p>
            <SkillSection isBento />
          </div>
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
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

