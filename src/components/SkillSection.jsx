import React from 'react'
import './SkillSection.css'
import { FaJs, FaHtml5, FaCss3, FaRProject, FaDatabase } from 'react-icons/fa'
import { SiCplusplus, SiC, SiJulia, SiAnaconda, SiVisualstudiocode, SiPython, SiPostgresql, SiPowerbi, SiMicrosoftsharepoint, SiJupyter, SiNumpy, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress } from "react-icons/si";
import { SiDjango, SiReact, SiPandas, SiSqlite, SiGithub } from "react-icons/si";
import { DiMysql } from 'react-icons/di';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';

const SkillSection = () => {
  return (
    <div className="section skill-section">
      <div id="skill-container">
        <h1 id='skills-header'>💻  My Skills</h1>
        <br />
        <br />
        <div id='languages_section'>
          <span id='lang-label'>Languages : </span>
          <div id='lang-items'>
            <div className="skill-item">
              <SiCplusplus /> <span className='skill-name'>C++</span>
            </div>
            <div className="skill-item">
              <SiPython /> <span className='skill-name'>Python</span>
            </div>
            <div className="skill-item">
              <FaJs /> <span className='skill-name'>JavaScript</span>
            </div>
            <div className="skill-item">
              <FaHtml5 /> <span className='skill-name'>HTML</span>
            </div>
            <div className="skill-item">
              <SiTailwindcss /> <span className='skill-name'>Tailwind CSS</span>
            </div>
            <div className="skill-item">
              <FaCss3 /> <span className='skill-name'>CSS</span>
            </div>
            <div className="skill-item">
              <SiC /> <span className='skill-name'>C</span>
            </div>
            <div className="skill-item">
              <SiTypescript /> <span className='skill-name'>Typescript</span>
            </div>
            <div className="skill-item">
              <FaDatabase /> <span className='skill-name'>SQL</span>
            </div>
            <div className="skill-item">
              <FaRProject /> <span className='skill-name'>R</span>
            </div>
            <div className="skill-item">
              <SiJulia /> <span className='skill-name'>Julia</span>
            </div>
          </div>
        </div>
        <div id='frameworks_libraries_section'>
          <span id='f_l_label'>Frameworks / Libraries :</span>
          <div id='f_l_items'>
            <div className="skill-item">
              <SiReact /> <span className='skill-name'>React.js</span>
            </div>
            <div className="skill-item">
              <SiNextdotjs /> <span className='skill-name'>Next.js</span>
            </div>
            <div className="skill-item">
              <SiNodedotjs /> <span className='skill-name'>Node.js</span>
            </div>
            <div className="skill-item">
              <SiExpress /> <span className='skill-name'>Express.js</span>
            </div>
            <div className="skill-item">
              <SiDjango /> <span className='skill-name'>Django</span>
            </div>
            <div className="skill-item">
              <SiPandas /> <span className='skill-name'>Pandas</span>
            </div>
            <div className="skill-item">
              <SiNumpy /> <span className='skill-name'>NumPy</span>
            </div>
            <div className="skill-item">
              <span className='skill-name'>Seaborn</span>
            </div>
            <div className="skill-item">
              <span className='skill-name'>Matplotlib</span>
            </div>
            <div className="skill-item">
              <SiSqlite /> <span className='skill-name'>SQLite</span>
            </div>
            <div className="skill-item">
              <DiMysql /> <span className='skill-name'>MySQL</span>
            </div>
          </div>
        </div>
        <div id='tools_section'>
          <span id='tools-label'>Developer Tools :</span>
          <div id='tools-items'>
            <div className="skill-item">
              <SiGithub /> <span className='skill-name'>Github</span>
            </div>
            <div className="skill-item">
              <SiVisualstudiocode /> <span className='skill-name'>VSCode</span>
            </div>
            <div className="skill-item">
              <SiAnaconda /> <span className='skill-name'>Anaconda</span>
            </div>
            <div className="skill-item">
              <SiJupyter /><span className='skill-name'>Jupyter Notebooks</span>
            </div>
            <div className="skill-item">
              <SiMicrosoftsharepoint /><span className='skill-name'>Microsoft Sharepoint</span>
            </div>
            <div className="skill-item">
              <SiPowerbi /><span className='skill-name'>PowerBI</span>
            </div>
            <div className="skill-item">
              <BiSolidBarChartAlt2 /><span className='skill-name'>PowerBI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection