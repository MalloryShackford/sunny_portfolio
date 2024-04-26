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
            <img className="skill-img" src={htmlImg} alt="HTML"/>
            <h3>HTML</h3>
        </div>
        <div className="skill-item">
            <img className="skill-img" src={cssImg} alt="CSS"/>
            <h3>CSS</h3>
        </div>
        <div className="skill-item">
            <img className="skill-img" src={javascriptImg} alt="JavaScript"/>
            <h3>JavaScript</h3>
        </div>
        <div className="skill-item">
            <img className="skill-img" src={reactImg} alt="React"/>
            <h3>React.js</h3>
        </div>
        <div className="skill-item">
            <img className="skill-img" src={githubImg} alt="GitHub"/>
            <h3>Github</h3>
        </div>
        <div className="skill-item">
            <img className="skill-img" src={pythonImg} alt="Python"/>
            <h3>Python</h3>
        </div>
        <div className="skill-item">
            <img className="skill-img" src={apiImg} alt="RestAPIs"/>
            <h3>RestAPIs</h3>
        </div>
        <div className="skill-item">
            <img className="skill-img" src={djangoImg} alt="Django"/>
            <h3>Django</h3>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Skills
