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
import u1 from '../assets/images/utilidata1.png'
import u2 from '../assets/images/utilidata2.png'
import umits from '../assets/images/umits.jpg'
import { FaLink } from 'react-icons/fa'


const ExperiencePage = () => {

    const workExperiences = [
        {
            company: "University of Michigan - Information and Technology Services (U-M ITS)",
            period: "May 2025 - Present",
            position: "Software Developer Intern",
            description: [
                "Maintaining and enhancing Docker- and Kubernetes-based research deployments—integrating MongoDB, eXist-db, and MariaDB backends written in Python, R, and PHP—while automating CI/CD workflows with GitHub Actions."
            ],
            logo: umits,
            links: [
                
            ]
        },
        {
            company: "Utilidata",
            period: "January 2025 - Present",
            position: "Machine Learning Intern",
            description: [
                "MLOps and Model Optimization"
            ],
            logo: u5,
            links: [
                
            ]
        },
        {
            company: "InceptEV",
            period: "August 2024 - December 2024",
            position: "Data Science Intern",
            description: [
                "As a Data Science Intern at InceptEV, a company that was acquired by motive, I conducted a data validation study on the simulation accuracy of InceptEV's fleet management software. The simulation study utilized real-world data collected with MCity's research EV's to compare against software outputs.",
                "The project involved collaborating with an extensive Julia, Python and Pandas codebase to implement a data pipeline for 40+ hours of data, processing raw OBDLink data from a Ford Mach-E EV, and a custom simulation process tailored to Ann arbor driving conditions."
            ],
            logo: inceptev,
            links: [
                
            ]
        },
        {
            company: "Center for Entrepreneurship - Perot Jain TechLab Electrification",
            period: "August 2024 - Present",
            position: "Student Researcher",
            description: [
                "As a student researcher for the PJTL Electrification cohort at the UofM's Center for Entrepreneurship, I collaborate with startups to tackle real-world challenges in the electrification space. I gain hands-on experience and entrepreneurial skills through immersive, industry-driven projects.",

            ],
            logo: pjtl,
            links: [
                {
                    name: "",
                    url: "https://cfe.umich.edu/launch/perot-jain-techlab-series/pjtl-electrification/meet-the-cohort/"
                }
            ]
        },

        {
            company: "Spire Investment Partners",
            period: "June 2024 - August 2024",
            position: "Technology & Cybersecurity Intern",
            description: ["During my internship as a Technology and Cybersecurity Intern at Spire Investment Partners in McLean, VA, from June to August 2024, I spearheaded multiple projects from initiation to completion, ensuring timely delivery and strategic alignment through effective project management practices and daily standup meetings within the SDLC. I engineered a centralized web portal to streamline onboarding and offboarding processes, utilizing RESTful APIs and automated workflows to enhance efficiency and approval processes. Additionally, I designed and implemented a secure, scalable employee directory database to centralize data for over 200 clients and employees, integrating data analytics features that bolstered business reporting capabilities."],
            logo: spire,
            links: [
            ]
        },
        {
            company: "Skylark Drones",
            period: "June 2023 - August 2023",
            position: "Research Intern",
            description: ["As a research intern, I was incharge of conducting research to compile information on topics to train aspiring Drone Operators in India. I collaborated with the Government of India Ministry of Skill Development & Entrepreneurship to develop a comprehensive drone operator course tailored for surveying and topography. I utilized Python and the tkinter interface to develop a user-friendly UI that streamlined the conversion of extensive thermal image datasets from their native R-JPEG format to .TIFF format. This UI included features such as input validation, porgress bars and real time user feedback. "],
            logo: skylark,
            links: [
            ]
        },
        {
            company: "Recreational Sports - University of Michigan, Ann Arbor",
            period: "January 2024 - Present",
            position: "Intramural Official",
            description: ["As an Intramural Sports Official for the Recreational Sports department at UofM-Ann Arbor, I was responsible for officiating and overseeing all requirements of conducting soccer and basketball games. I have demonstrated proficiency in fast-paced environments through my experience officiating basketball and soccer matches. I have experience in managing hectic and demanding environments as well as game logistics such as timekeeping, scorekeeping, and conflict resolution. Currently, I've officiated over 55+ hours of intramural sports and have exhibited excellent time management and commitment. "],
            logo: rec,
            links: [
            ]
        },
        {
            company: "Michigan Equity Research Club (MERC)",
            period: "January 2023 - February 2024",
            position: "Vice President of Technology & Project Manager",
            description: ["As a former VP of Tech at MERC, I was responsible for building an online presence on social media and was working on programming the organizations website to showcase MERC's educational and professional training to prospective members. I was also a Project Manager for a team that researched "],
            logo: merc,
            links: [

            ]
        },
        {
            company: "National Organization for Business and Engineering (NOBE)",
            period: "January 2023 - February 2024",
            position: "Consultant Member",
            description: ["As a consultant for the NOBE organization at the University of Michigan, my project team and I collaborated to produce engineering-related solutions to our clients. During my time at NOBE, I was assigned to two project teams, the first one was the University of Michigan's Human Resources Department. This client sought after the NOBE organization's services to help optimize and streamline user flow and usage of subpage sites on their department's website. My team and I utilized workforce data analytics and Figma to conduct our analysis into the usability of the website and the ability of users to gather and retain information. For the second project, I collaborated with a company that produced bioinformatics software and data for client use called Curio Genomics. My team members and I collaborated with Curio Genomics to produce a database of crop ontologies and genome data."],
            logo: nobe,
            links: [
                
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
                        <span id='work-time-period'> August 2022 - Present </span>
                        <h3 id='major'>B.S.E. in Computer Science</h3>
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
