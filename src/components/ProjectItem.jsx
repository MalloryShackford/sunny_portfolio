import React from 'react'
import '../styles/projects.css';
const ProjectItem = ({ title, backgroundImg, githubUrl}) => {
  return (
    <div className="project-item-container">
        <img className="project-img" src={backgroundImg}/>
          <div>
            <h3 className="project-item-h3"><a href={githubUrl}>{title}</a></h3>
              {/* <p><a href={projectUrl}>More Info</a></p> */}
          </div>
    </div>
  )
}

export default ProjectItem
