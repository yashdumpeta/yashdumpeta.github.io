import React from 'react'
import './SkillSection.css'
import { FaJs, FaDatabase, FaTerminal, FaCode, FaLayerGroup, FaComments } from 'react-icons/fa'
import { SiCplusplus, SiPython, SiPostgresql, SiNumpy, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiDocker, SiKubernetes, SiMongodb, SiDjango, SiReact, SiPandas } from "react-icons/si";

const MarqueeRow = ({ skills, direction = 'left', title, icon }) => {
  // Duplicate skills to create a seamless loop
  const duplicatedSkills = [...skills, ...skills];
  return (
    <div className="marquee-row-wrapper">
      {title && (
        <div className="marquee-row-header">
          {icon && <span className="row-header-icon">{icon}</span>}
          <h3 className="marquee-row-title">{title}</h3>
        </div>
      )}
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
    </div>
  );
};

const SkillSection = ({ isBento }) => {
  const skillGroups = [
    {
      title: 'Core Engineering',
      icon: <FaCode />,
      direction: 'left',
      skills: [
        { icon: <SiPython />, name: 'Python' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <SiCplusplus />, name: 'C++' },
        { icon: <FaDatabase />, name: 'SQL' },
      ],
    },
    {
      title: 'Frontend / Full-Stack',
      icon: <FaLayerGroup />,
      direction: 'right',
      skills: [
        { icon: <SiReact />, name: 'React.js' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiNodedotjs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiDjango />, name: 'Django' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      title: 'Backend / Data / Infrastructure',
      icon: <FaTerminal />,
      direction: 'left',
      skills: [
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { name: 'REST APIs' },
        { icon: <SiDocker />, name: 'Docker' },
        { icon: <SiKubernetes />, name: 'Kubernetes' },
        { name: 'GitHub Actions' },
      ],
    },
    {
      title: 'ML / Data',
      icon: <FaDatabase />,
      direction: 'right',
      skills: [
        { name: 'PyTorch' },
        { icon: <SiPandas />, name: 'Pandas' },
        { icon: <SiNumpy />, name: 'NumPy' },
        { name: 'ML Workflows' },
        { name: 'Data Processing' },
      ],
    },
    {
      title: 'Customer-Facing Technical',
      icon: <FaComments />,
      direction: 'left',
      skills: [
        { name: 'Technical Communication' },
        { name: 'Documentation' },
        { name: 'User Pain Point Discovery' },
        { name: 'Workflow Design' },
      ],
    },
  ];

  if (isBento) {
    return (
      <div className="skills-marquee-container">
        {skillGroups.map((group) => (
          <MarqueeRow
            key={group.title}
            skills={group.skills}
            direction={group.direction}
            title={group.title}
            icon={group.icon}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="section skill-section">
      <div id="skill-container">
        <h2 id='skills-intro'>
          A focused view of the technologies and technical practices I use across software engineering, data, infrastructure, and customer-facing problem solving.
        </h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <span className="skill-group-label">{group.title}</span>
              <div className="skill-group-items">
                {group.skills.map((skill, index) => (
                  <div key={`${group.title}-${index}`} className="skill-item">
                    {skill.icon} <span className='skill-name'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default SkillSection
