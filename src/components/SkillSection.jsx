import React from 'react'
import './SkillSection.css'
import { FaJs, FaHtml5, FaCss3, FaDatabase, FaJava } from 'react-icons/fa'
import { SiCplusplus, SiC, SiPython, SiPostgresql, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiDocker, SiDjango, SiReact, SiGithub } from "react-icons/si";

const SkillSection = ({ isBento }) => {
  const mainSkills = [
    "React.js", "Python", "JavaScript", "C++", "Next.js", "TypeScript", 
    "PostgreSQL", "Docker", "Node.js", "Django", "SQL", "Tailwind CSS"
  ];

  if (isBento) {
    return (
      <div className="skills-cloud">
        {mainSkills.map(skill => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="section skill-section">
      <div className="skills-cloud">
        {mainSkills.map(skill => (
          <div key={skill} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillSection
