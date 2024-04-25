import React from 'react';
import htmlImg from '../assets/skillsIcons/html.png';
import cssImg from '../assets/skillsIcons/css.png';
import javascriptImg from '../assets/skillsIcons/javascript.png';
import reactImg from '../assets/skillsIcons/react.png';
import githubImg from '../assets/skillsIcons/github1.png';
import pythonImg from '../assets/skillsIcons/python.png';
import djangoImg from '../assets/skillsIcons/django.png';
import apiImg from '../assets/skillsIcons/api.png';



import '../styles/skills.css';
const Skills = () => {
    return (
    <>
    <div id="skills" className="skills-container">
        <div className="skills-bg">
            <h2>What I Can Do</h2>
            <div className="grid-container">
        <div className="skill-item">
            <img src={htmlImg} width={64} height={64} alt="HTML"/>
            <h3>HTML</h3>
        </div>
        <div className="skill-item">
            <img src={cssImg} width={64} height={64} alt="CSS"/>
            <h3>CSS</h3>
        </div>
        <div className="skill-item">
            <img src={javascriptImg} width={64} height={64} alt="JavaScript"/>
            <h3>JavaScript</h3>
        </div>
        <div className="skill-item">
            <img src={reactImg} width={64} height={64} alt="React"/>
            <h3>React.js</h3>
        </div>
        <div className="skill-item">
            <img src={githubImg} width={64} height={64} alt="GitHub"/>
            <h3>Github</h3>
        </div>
        <div className="skill-item">
            <img src={pythonImg} width={64} height={64} alt="Python"/>
            <h3>Python</h3>
        </div>
        <div className="skill-item">
            <img src={apiImg} width={64} height={64} alt="RestAPIs"/>
            <h3>RestAPIs</h3>
        </div>
        <div className="skill-item">
            <img src={djangoImg} width={64} height={64} alt="Django"/>
            <h3>Django</h3>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Skills
