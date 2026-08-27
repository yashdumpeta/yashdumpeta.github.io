import React from 'react';
import './SkillSection.css';
import { FaCode, FaLayerGroup, FaTerminal, FaDatabase, FaComments } from 'react-icons/fa6';
import { SiPython, SiTypescript, SiPostgresql, SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiDocker, SiKubernetes, SiDjango, SiPandas, SiNumpy, SiMongodb } from 'react-icons/si';

const skillGroups = [
  {
    title: 'Core Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript' },
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
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend & Infrastructure',
    icon: <FaTerminal />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'REST APIs' },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'GitHub Actions' },
    ],
  },
  {
    title: 'ML & Data Engineering',
    icon: <FaDatabase />,
    skills: [
      { name: 'PyTorch' },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'ML Workflows' },
      { name: 'Synthetic Data' },
    ],
  },
  {
    title: 'Technical Execution',
    icon: <FaComments />,
    skills: [
      { name: 'Tech Communication' },
      { name: 'System Documentation' },
      { name: 'UX & Pain Discovery' },
      { name: 'Consulting Workflows' },
    ],
  },
];

const SkillSection = () => {
  return (
    <div id="skills" className="minimal-skills-container">
      <div className="section-header">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          Core tools, frameworks, and engineering practices I use to build scalable software.
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
