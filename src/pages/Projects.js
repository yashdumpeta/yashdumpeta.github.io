import React from 'react'
import './Projects.css'
import { FaCode, FaDatabase } from 'react-icons/fa6'
import { SiCplusplus, SiDjango, SiGithub, SiJupyter, SiPandas, SiPython, SiReact, SiSqlite, SiVisualstudio } from 'react-icons/si'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import recalld2 from '../assets/images/recalld-2.png'
import recalld from '../assets/images/recalld.png'
import recipeFind from '../assets/images/recipeFind.png'
import soccerQuiz from '../assets/images/soccerQuiz.png'
import google from '../assets/images/google.png'
import mine from '../assets/images/mine.png'
import nlp from '../assets/images/nlp.png'
import p1 from '../assets/images/p1.png'
import p4 from '../assets/images/p4.png'
import pq from '../assets/images/pq.png'
import sillyql from '../assets/images/sillyql.png'
import euchre from '../assets/images/euchre.png'
import portfolio from '../assets/images/portfolio.png'

const ProjectPage = () => {

  const projects = [
    {
      title: "recalld",
      image: recalld,
      source_code: "https://github.com/yashdumpeta/recalld",
      tech_used: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiReact />, name: "React.js" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <DiMysql />, name: "MySQL" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <SiGithub style={{ paddingRight: "1px", alignContent: "center" }} />, name: "Github" },

      ],
      concept_tags: [
        "MVC-Architecture", "RESTfulAPI", "JWT Authentication", "Full-Stack Development", "User Authentication", "Data Serialization",
      ],
      description: [
        "As a inherently bad exam taker and memorizer, I inquired more talented exam takers and online resources to learn about how I can retain information better. After learning about sources like Anki Flashcards and studying techniques like active recall, spaced repetition and etc. I pursued to make a tool that catered towards these needs of mine. ",
        "recalld is a dynamic and interactive full-stack flashcard app designed to help facilitate learning and information retention.",
        "It's built with a powerful django backend and a visually sleek and visually appealing front-end built with React.js.",
        "Some key features of this program include: ",
        "1. Secure user authentication using JWT tokens, ensuring secure and stateless user sessions",
        "2. Personalized deck/card creation and management",
        "3. Dynamic flashcard creation with customizable difficulty levels",
        "4. Implemented efficient studying techniques like active recall and spaced repetition.",
        "This project demonstrates my proficiency in full-stack development, API design, and creating scalable web applications. It showcases my ability to translate user needs into technical solutions."
      ],
    },
    {
      title: "recipeFind",
      image: recipeFind,
      source_code: "https://github.com/yashdumpeta/recipeFind",
      tech_used: [

        { icon: <SiReact />, name: "React.js" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiGithub style={{ paddingRight: "1px", alignContent: "center" }} />, name: "Github" },

      ],
      concept_tags: [
        "API Management", "Front-end Development", "State Management"
      ],
      description: ["recipeFind is a web app for discovering and exploring a world of culinary delights.",
        "Leveraging the expansive database of over 2.3 million recipes provided by the Edamam API, recipeFind allows users to effortlessly search and retrieve detailed information about any dish they desire "]
    },
    {
      title: "Personal Portfolio",
      image: portfolio,
      source_code: "https://github.com/yashdumpeta/portfolio",
      tech_used: [

        { icon: <SiReact />, name: "React.js" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiGithub style={{ paddingRight: "1px", alignContent: "center" }} />, name: "Github" },

      ],
      concept_tags: [
        "UI/UX Design", "Front-end Development", 
      ],
      description: ["My portfolio is what you're currently seeing, it's sleek, modern and responsive. This website demonstrates my proficiency in front-end development and UI/UX design. "]
    },
    {
      title: "Google Trends Analytics",
      image: google,
      source_code: "https://github.com/MishanGagnon/si206-final-project",
      tech_used: [

        { icon: <SiPython />, name: "Python" },
        { icon: <SiSqlite />, name: "SQLite" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiJupyter />, name: "Jupyter Notebooks" },
        { icon: "", name: "Seaborn" },
        { icon: "", name: "Matplotlib" },
        { icon: <SiGithub style={{ paddingRight: "1px", alignContent: "center" }} />, name: "Github" },

      ],
      concept_tags: [
        "Data Analysis", "Data Visualization", "Database Management", "Statistical Analysis", "API Management & Integration", 
      ],
      description: ["This project analyzes the relationships between Google search trends, weather data, and baseball statistics. It utilizes multiple APIs to collect data on Google search volumes, MLB team batting averages, and local weather conditions.",
        "Visualizations are generated to explore correlations between factors such as MLB team batting averages and search frequency for team names, local temparature and searches for food-related terms, and also searches for ice cream based on temperature.",
        "This project demonstrates skills in data collection from various APIs, data processing with Pandas, database management with SQLite, and data visualization with Seaborn and Matplotlob. "]
    },
    {
      title: "Soccer Quiz",
      image: soccerQuiz,
      source_code: "https://github.com/yashdumpeta/soccerQuiz",
      tech_used: [

        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiGithub style={{ paddingRight: "1px", alignContent: "center" }} />, name: "Github" },

      ],
      concept_tags: [
        "UI Design", "Sports", "Interactive", "Front-end Development"
      ],
      description: ["This interactive Soccer Player Quiz App is a web-based application that tests users' knowledge of soccer players through image recognition.",
        "The app features multiple difficulty levels (Easy, Medium, Hard) and offers a dynamic, engaging user experience.",
        "The app demonstrates proficiency in front-end web development, particularly in creating interactive user interfaces, managing application state, and implementing smooth transitions between different app sections."]
    },
    {
      title: "sillyQL: A Database Management System ",
      image: sillyql,
      source_code: "https://github.com/yashdumpeta/sillyql",
      tech_used: [
        { icon: <SiCplusplus />, name: "C++" },
      ],
      concept_tags: [
        "Data Structures", "Algorithms", "DFS", "BFS", "Graph Theory", "Performance Optimization", "Object-Oriented Programming"
      ],
      description: ["For this project, I implemented a simplified relational database system called sillyQL. The system supports basic SQL operations including CREATE, NEXT, PRINT, DELETE, JOIN and GENERATE INDEX.",
        "Some of the key features of this project are its multi-type support for table columns (string, int, double, and bool), efficient data retrival using hash and binary search tree indexing, error handling and input validation as wel as both interactive and file based query execution.",
        "This project demonstrates my proficiency in designing and implementing complex data structures, algorithm optimization, and knowledge of database management principles."]
    },
    {
      title: "Piazza NLP Classifier ",
      image: nlp,
      source_code: "https://github.com/yashdumpeta/piazza-classifier",
      tech_used: [
        { icon: <SiCplusplus />, name: "C++" },
      ],
      concept_tags: [
        "Machine Learning", "Natural Language Processing", "Native Bayes Classification", "Binary Search Trees", "Data Structures", "Object-Oriented Programming"
      ],
      description: ["Developed a NLP classifier to automatically categorize Piazza forum posts for my EECS 280 class.", "Some key features and achievements of this project were:", "1. Implemented a Mulit-Variate Bernoulli Naive Bayes Classifier", "2. Created a bag of words model for NLP, enabling effective text analysis and feature extraction",
        "3. Developed a training system to process CSV files containing labelled Piazza posts. This system is able to distinguish between different post categories (e.g. project-specific, exam-related, and author types",
        "4. Achieved high classification accuracy and correctly predicted post categories with high precision. ",
        "This project demonstrates my proficiency in data strcuture implementation and practical machine learning applications"
      ]
    },
    {
      title: "Letterman: Advanced Word Path Finding",
      image: p1,
      source_code: "https://github.com/yashdumpeta/letterman",
      tech_used: [
        { icon: <SiCplusplus />, name: "C++" },
      ],
      concept_tags: [
        "Data Structures", "Algorithms", "Indexing", "Query Processing", "Performance Optimization", "Binary Search Tree", "Hash Tables", "Object-Oriented Programming"
      ],
      description: ["The Letterman project is an advanced C++ implementation of word morphing algorithms, designed to find paths between words using a defined set of modifications while adhering to a given dictionary.",
        "The project features both queue-based Breadth-First Search and stack-based Depth-First Search algorithms. Capable of processing dictionaries with up to 4300 words, it efficiently determines a sequence of word transformations from a start word to an end word, both provided via command-line input.",
        "The implementation includes extensive command-line option support for configurable execution and output formats. A key strength of this project is its optimization for efficiently handling large dictionaries.",
        "This work demonstrates proficiency in algorithm design, data structure implementation, and C++ best practices, showcasing the ability to develop complex, performance-oriented solutions to challenging problems."]
    },
    {
      title: "mineEscape: Pathfinding simulation ",
      image: mine,
      source_code: "https://github.com/yashdumpeta/mine-escape",
      tech_used: [
        { icon: <SiCplusplus />, name: "C++" },
      ],
      concept_tags: [
        "Data Structures", "Algorithms", "Pathfinding", "PQs", "OOP", "Performance Optimization", "Dynamic Memory Management", "Object-Oriented Programming"
      ],
      description: ["Mine Escape is a pathfinding simulation project where you take on the role of a trapped gold miner. You must escape the mine by clearing tiles with rubble or TNT, prioritizing the easiest tiles to clear first.",
        "This project demonstrates the use of various data structures and algorithms, particularly priority queues. Some of the key features of this project is the efficient pathfinding using priority-based search algorithms, dynamic handling of TNT explosions and chain reactions, the implementation of various priority queue data structures, detailed statistics, and more.",
        "This project showcases my strong problem-solving skills, attention to detail and the ability to work and correctly implement complex algorithms and data structures. It demonstrates my aptitude in C++ through the use of concepts templates, operator overloading and the STL. "]
    },
    {
      title: "Drone Delivery Optimization",
      image: p4,
      source_code: "https://github.com/yashdumpeta/Drone-Delivery-Optimization",
      tech_used: [
        { icon: <SiCplusplus />, name: "C++" },
      ],
      concept_tags: [
        "Graph Theory", "Minimum Spanning Tree", "Travelling Salesman Problem", "Optimization Algorithms", "Heuristics", "Branch and Bound"
      ],
      description: ["I developed a sophisticated C++ program to optimize drone delivery routes across different scenarios.",
        "This project implements three key graph algorithms:",
        "1. Minimum Spanning Tree (MST): Calculated the optimal network of drone beacons to minimize total connection length while adhering to drone travel restrictions",
        "2. Fast Travelling Salesman Problem (TSP): Implemented a TSP heuristic algorithm to quickly generate near-optimal routes for drone deliveries with optimial time",
        "3. Optimal TSP: Utilized a branch and bound algorithm to determine the guaranteed optimum delivery route",
        "For this project I implemented efficient data structures and applied complex graph algorithms, namely the Prim's Algorithm and Kruskal's ALgorithm for MST calculation. I developed a custom heuristic for the FastTSP approximation.",
        "This project demonstrates my strong skills in algorithm design, graph theory, and optimization techniques"
      ]
    },
    {
      title: "Euchre Card Game Simulator",
      image: euchre,
      source_code: "https://github.com/yashdumpeta/euchre",
      tech_used: [
        { icon: <SiCplusplus />, name: "C++" },
      ],
      concept_tags: [
        "Data Structures", "Algorithms", "Object-Oriented Programming", "Polymorphism", "Game Logic"
      ],
      description: [
        "Developed a fully functional C++ implementation of Euchre, a popular trick-taking card game in Michigan.", "Some key features of this project include:",
        "1. Implemented core game logic and rules, including trick taking, trump suit selection, and point/scoring system",
        "2. Designed an extensive player hierarchy supporting both AI and human players, achieved through Polymorphism",
        "3. Developed a custom card and deck management system that includes functions like shuffling and dealing",
        "4 Implemented formatted outputs through console for game progression and results",
        "This project showcases my proficiency in C++, object-oriented design principles, and the ability to translate a complex game into an efficient, maintanable, and functional code."
      ]
    },
    {
      title: "Priority Queue Implementation",
      image: pq,
      source_code: "https://github.com/yashdumpeta/priority-queue",
      tech_used: [
        { icon: <SiCplusplus />, name: "C++" },
      ],
      concept_tags: [
        "Priority Queues", "Data Structures and Algorithms", "Object-Oriented Programming", "STL", "Unit Testing"
      ],
      description: ["For this project, I worked on building a comprehensive C++ that showcases advanced implementations of priority queue data structures.",
        "I developed of three disctinct priority queue variants: Sorted Array, Binary Heap and Pairing Heap.",
        "This project demonstrates my proficiency in the implementation of complex and prevalent data structures, algorithm design, and C++ best practices.",
        "Furthermore, I conducted a comprehensive unit testing to ensure correctness and performance. The completion of this project highlights my ability to translate the theory to a working model."]
    },
  ]


  return (
    <div className='main-container'>
      <div className="content">

        <div className='projects'>
          <h1 id='projects-header'>Projects</h1>
          {projects.map((project, index) => (
            <div className="project" key={index} style={{ '--project-image': `url(${project.image})` }}>
              <div className="project-info">
                <h2 className="title">
                  {project.title}
                </h2>
                <h4 className="description">
                  {project.description.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </h4>
                <h3 id="tech_stack">
                  {project.tech_used.map((tech, index) => (
                    <div className="tech-item" key={index}>
                      {tech.icon}
                      <span className='skill-name'>{tech.name}</span>
                    </div>
                  ))}
                </h3>
                <h3 id="tags">
                  {project.concept_tags.map((tag, index) => (
                    <span className="concept-tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </h3>
              </div>
              <div className="source-code-tag">
                <a id='code' href={project.source_code} target='_blank' rel="noopener noreferrer">
                  <FaCode /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage