import React from 'react'
import './styles/ExperiencePage.css'
import michLogo from '../assets/images/michengineering2.jpeg'
import merc from '../assets/images/merc.jpeg'
import skylark from '../assets/images/skylark.jpg'
import spire from '../assets/images/spire.png'
import nobe from '../assets/images/nobe.png'
import rec from '../assets/images/recsports.png'
import Footer from '../components/Footer'
import pjtl from '../assets/images/pjtl.png'
import inceptev from '../assets/images/inceptev.png'
import u5 from '../assets/images/utilidata5.png'
import umits from '../assets/images/umits.jpg'
import { FaLink } from 'react-icons/fa'


const ExperiencePage = () => {

    const workExperiences = [
        {
            company: "Utilidata",
            period: "January 2025 - Present",
            position: "Software Engineering Intern",
            location: "Ann Arbor, MI",
            description: [
                "Built and evaluated a flow matching generative model for waveform data, exploring its potential for synthetic data generation, modeling, and downstream ML experimentation.",
                "Improved reproducibility of internal ML workflows through tooling, documentation, and environment setup across local and remote systems.",
                "Worked across Python, data processing, and infrastructure workflows to support model experimentation and optimization.",
                "Collaborated with engineers to turn research-oriented model experiments into practical workflows that could be evaluated for production use."
            ],
            logo: u5,
            links: [
                
            ]
        },
        {
            company: "University of Michigan Information and Technology Services",
            period: "May 2025 - December 2025",
            position: "Software Engineering Intern",
            location: "Ann Arbor, MI",
            description: [
                "Supported research computing infrastructure used by university researchers and technical teams.",
                "Contributed to infrastructure workflows involving deployment, reliability, and platform support.",
                "Worked with engineering teams to improve technical documentation and operational processes."
            ],
            logo: umits,
            links: [
                
            ]
        },
        {
            company: "InceptEV",
            period: "August 2024 - December 2024",
            position: "Data Science Intern",
            location: "Ann Arbor, MI",
            description: [
                "Validated simulation datasets to identify inconsistencies, anomalies, and quality issues in EV-related data workflows.",
                "Supported data cleaning and analysis processes used to improve simulation reliability and downstream evaluation."
            ],
            logo: inceptev,
            links: [
                
            ]
        },
        {
            company: "Spire Investment Partners",
            period: "June 2024 - August 2024",
            position: "Technology and Cybersecurity Intern",
            location: "McLean, VA",
            description: [
                "Built internal tools and REST API workflows to streamline onboarding and operational processes.",
                "Supported technology and cybersecurity initiatives for internal teams and customer-facing business operations.",
                "Improved onboarding workflows for employees through automation and internal tooling."
            ],
            logo: spire,
            links: [
            ]
        },
        {
            company: "Skylark Drones",
            period: "June 2023 - August 2023",
            position: "Research Intern",
            location: "Bangalore, India",
            description: [
                "Created technical training materials for drone operator workflows in partnership with public-sector stakeholders.",
                "Built a Python UI that helped users convert thermal image datasets from R-JPEG to TIFF with clearer feedback and validation."
            ],
            logo: skylark,
            links: [
            ]
        },
        {
            company: "Recreational Sports - University of Michigan, Ann Arbor",
            period: "January 2024 - Present",
            position: "Intramural Official",
            location: "Ann Arbor, MI",
            description: [
                "Managed fast-paced game operations, communication, and conflict resolution for intramural soccer and basketball."
            ],
            logo: rec,
            links: [
            ]
        },
        {
            company: "Michigan Equity Research Club (MERC)",
            period: "January 2023 - February 2024",
            position: "Vice President of Technology & Project Manager",
            location: "Ann Arbor, MI",
            description: [
                "Led technology and web efforts to improve the club's online presence and member communication.",
                "Managed a student research team through market analysis, synthesis, and final presentation work."
            ],
            logo: merc,
            links: [

            ]
        },
        {
            company: "National Organization for Business and Engineering (NOBE)",
            period: "January 2023 - February 2024",
            position: "Consultant Member",
            location: "Ann Arbor, MI",
            description: [
                "Worked with client teams to identify user pain points and improve technical workflows.",
                "Contributed to website usability analysis for U-M Human Resources and data organization work for a bioinformatics client."
            ],
            logo: nobe,
            links: [
                
            ]
        },
        {
            company: "Center for Entrepreneurship - Perot Jain TechLab Electrification",
            period: "August 2024 - Present",
            position: "Student Researcher",
            location: "Ann Arbor, MI",
            description: [
                "Collaborated with early-stage electrification companies to understand technical and market constraints.",
                "Translated ambiguous startup problems into research, product, and engineering recommendations."
            ],
            logo: pjtl,
            links: [
                {
                    name: "",
                    url: "https://cfe.umich.edu/launch/perot-jain-techlab-series/pjtl-electrification/meet-the-cohort/"
                }
            ]
        },

    ];



    return (
        <div className='main-container'>
            <div className='education'>
                <h1 id='education-header'>Education</h1>
                <div className='education-info'>
                    <img id='mich-logo' src={michLogo} alt='Michigan-Engineering Logo' />
                    <div className='college-details'>
                        <h2 id='college-info'>University of Michigan - College of Engineering</h2>
                        <h3 id='college-location'>Ann Arbor, MI</h3>
                        <span id='work-time-period'> August 2022 - May 2026 </span>
                        <h3 id='major'>B.S.E. in Computer Science and Engineering</h3>
                    </div>
                </div>
            </div>
            <div className='work'>
                <h1 id='work-header'>Experiences</h1>
                {workExperiences.map((experience, index) => (
                    <div className='work-info' key={index}>
                        <img className='work-logo' src={experience.logo} alt='' />
                        <div id='work-details'>
                            <div className="morse-pattern">
                                <div className="dot"></div>
                                <div className="dot space"></div>
                                <div className="dot"></div>
                                {/* <div className="dot"></div> */}
                                <div className="dot space"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot space"></div>
                                <div className="dot"></div>
                                <div className="dot space"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="morse-pattern">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot space"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot space"></div>
                                <div className="dot"></div>
                                <div className="dot space"></div>
                                <div className="dot"></div>
                                {/* <div className="dot"></div>
                                <div className="dot"></div> */}
                            </div>
                            <h2 className='organization-name'>
                                {experience.company}
                            </h2>
                            <span id='work-time-period'> {experience.period} </span>
                            <h3 className='work-position'>
                                {experience.position}
                            </h3>
                            {experience.location && (
                                <p className='work-location'>{experience.location}</p>
                            )}
                            {experience.description.map((line, index) => (
                                <p key={index} className='work-description'>
                                    {line}
                                </p>
                            ))}
                            {experience.links.map((link, index) => (
                                <a 
                                    key={index} 
                                    className='work-link' 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <FaLink />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default ExperiencePage
