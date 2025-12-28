import React from 'react'
import './SkillSection.css'
import { FaJs, FaHtml5, FaCss3, FaRProject, FaDatabase, FaJava } from 'react-icons/fa'
import { SiCplusplus, SiC, SiJulia, SiAnaconda, SiVisualstudiocode, SiPython, SiPostgresql, SiPowerbi, SiMicrosoftsharepoint, SiJupyter, SiNumpy, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiGo, SiDocker, SiRailway, SiAmazonaws, SiApachekafka, SiTensorflow, SiPhp, SiKubernetes, SiMongodb, SiOracle, SiMariadb, SiSupabase, SiRedhatopenshift, SiDjango, SiReact, SiPandas, SiSqlite, SiGithub } from "react-icons/si";
import { DiGo, DiMysql } from 'react-icons/di';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';

const MarqueeRow = ({ skills, direction = 'left' }) => {
  // Duplicate skills to create a seamless loop
  const duplicatedSkills = [...skills, ...skills];
  return (
    <div className={`marquee-row ${direction}`}>
      <div className="marquee-content">
        {duplicatedSkills.map((skill, index) => (
          <span key={`${skill.name}-${index}`} className="skill-pill">
            {skill.icon && <span className="skill-icon">{skill.icon}</span>}
            <span className="skill-name">{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillSection = ({ isBento }) => {
  const languages = [
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiC />, name: 'C' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiPhp />, name: 'PHP' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiGo />, name: 'GoLang' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <FaRProject />, name: 'R' },
    { icon: <SiJulia />, name: 'Julia' }
  ];

  const frameworks = [
    { icon: <SiReact />, name: 'React.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiPandas />, name: 'Pandas' },
    { icon: <SiNumpy />, name: 'NumPy' },
    { icon: <SiSupabase />, name: 'Supabase' }, // Moved from tools to frameworks
    { icon: <SiRedhatopenshift />, name: 'Openshift' }
  ];

  const tools = [
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <SiGithub />, name: 'Github' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiOracle />, name: 'OracleDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiSqlite />, name: 'SQLite' },
    { icon: <SiVisualstudiocode />, name: 'VSCode' },
    { icon: <SiAnaconda />, name: 'Anaconda' },
    { icon: <SiRailway />, name: 'Railway' },
    { icon: <BiSolidBarChartAlt2 />, name: 'PowerBI' }
  ];

  if (isBento) {
    return (
      <div className="skills-marquee-container">
        <MarqueeRow skills={languages} direction="left" />
        <MarqueeRow skills={frameworks} direction="right" />
        <MarqueeRow skills={tools} direction="left" />
      </div>
    );
  }

  return (
    <div className="section skill-section">
      <div id="skill-container">
        <h2 id='skills-intro'>
          I've built proficiency in these technologies through coursework, side projects, and continuous learning.
        </h2>
        <br />
        <br />
        <div id='languages_section'>
          <span id='lang-label'>Languages : </span>
          <div id='lang-items'>
            {languages.map((skill, index) => (
              <div key={`lang-${index}`} className="skill-item">
                {skill.icon} <span className='skill-name'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div id='frameworks_libraries_section'>
          <span id='f_l_label'>Frameworks / Libraries :</span>
          <div id='f_l_items'>
            {frameworks.map((skill, index) => (
              <div key={`fw-${index}`} className="skill-item">
                {skill.icon} <span className='skill-name'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div id='tools_section'>
          <span id='tools-label'>Developer Tools :</span>
          <div id='tools-items'>
            {tools.map((skill, index) => (
              <div key={`tool-${index}`} className="skill-item">
                {skill.icon} <span className='skill-name'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
