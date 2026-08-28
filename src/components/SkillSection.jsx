import React from 'react';
import './SkillSection.css';
import { FaCode, FaLayerGroup, FaTerminal, FaDatabase, FaGears } from 'react-icons/fa6';
import {
  SiPython,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiPandas,
  SiNumpy,
  SiGo,
  SiFastapi,
  SiRedhatopenshift,
  SiGithub
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Core Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript' },
      { name: 'Go', icon: <SiGo /> },
      { name: 'C++' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Frontend / Full-Stack',
    icon: <FaLayerGroup />,
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Tailwind CSS' },
      { name: 'Convex' },
      { name: 'Express.js', icon: <SiExpress /> },
    ],
  },
  {
    title: 'Backend & Infrastructure',
    icon: <FaTerminal />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'REST APIs' },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Red Hat OpenShift', icon: <SiRedhatopenshift /> },
      { name: 'Git / GitHub', icon: <SiGithub /> },
    ],
  },
  {
    title: 'Data Engineering & Processing',
    icon: <FaDatabase />,
    skills: [
      { name: 'ETL Pipelines' },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Parquet' },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'API Integrations' },
    ],
  },
  {
    title: 'Operational & Team Execution',
    icon: <FaGears />,
    skills: [
      { name: 'Technical Troubleshooting' },
      { name: 'System Documentation' },
      { name: 'Cross-Functional Collaboration' },
      { name: 'Fast Onboarding & Ramp-Up' },
      { name: 'High Agency & Ownership' },
    ],
  },
];

const SkillSection = () => {
  return (
    <div id="skills" className="minimal-skills-container">
      <div className="section-header">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          Core tools, frameworks, and workflows I use to build reliable software, data pipelines, and full-stack products.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skill-group-card">
            <div className="group-card-header">
              <span className="group-icon">{group.icon}</span>
              <h3 className="group-title">{group.title}</h3>
            </div>
            <div className="group-pills">
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className="minimal-skill-pill">
                  {skill.icon && <span className="pill-icon">{skill.icon}</span>}
                  <span className="pill-name">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
