import React from 'react';
import './styles/ExperiencePage.css';
import michLogo from '../assets/images/michengineering2.jpeg';
import umits from '../assets/images/umits.jpg';
import u5 from '../assets/images/utilidata5.png';
import inceptev from '../assets/images/inceptev.png';
import pjtl from '../assets/images/pjtl.png';
import Footer from '../components/Footer';

const ExperiencePage = () => {
    const workExperiences = [
        {
            company: "U-M ITS",
            period: "May 2025 - Present",
            position: "Software Developer Intern",
            description: "Maintaining and enhancing Docker- and Kubernetes-based research deployments—integrating MongoDB, eXist-db, and MariaDB backends.",
            logo: umits
        },
        {
            company: "Utilidata",
            period: "January 2025 - Present",
            position: "Machine Learning Intern",
            description: "MLOps and Model Optimization for edge-AI applications.",
            logo: u5
        },
        {
            company: "InceptEV",
            period: "Aug - Dec 2024",
            position: "Data Science Intern",
            description: "Conducted data validation study on simulation accuracy for fleet management software.",
            logo: inceptev
        },
        {
            company: "PJTL Electrification",
            period: "Aug 2024 - Present",
            position: "Student Researcher",
            description: "Collaborating with startups to tackle real-world challenges in the electrification space.",
            logo: pjtl
        }
    ];

    return (
        <div className="experience-page">
            <div className="experience-container">
                <section className="education-section">
                    <h1 className="serif">Education</h1>
                    <div className="experience-card education-card">
                        <img src={michLogo} alt="U-M" className="experience-logo" />
                        <div className="experience-details">
                            <h2 className="serif">University of Michigan</h2>
                            <p className="position">B.S.E. in Computer Science</p>
                            <p className="period">2022 - 2026</p>
                        </div>
                    </div>
                </section>

                <section className="work-section">
                    <h1 className="serif">Experience</h1>
                    <div className="experience-grid">
                        {workExperiences.map((exp, index) => (
                            <div className="experience-card" key={index}>
                                <div className="card-header">
                                    <img src={exp.logo} alt={exp.company} className="experience-logo" />
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
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ExperiencePage;
