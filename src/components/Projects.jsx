import ProjectItem from './ProjectItem';
import pokedexImg from '../assets/projectImg/pokedex.png';
import gurufoxImg from '../assets/projectImg/ourdate.png';
import utrImg from '../assets/projectImg/utr.png';
import '../styles/projects.css';
const Projects = () => {
  return (
    <div id='projects' className="project-container">
       <div className=''>
            <h2 className=''>What I&apos;ve Built</h2>
            <div className='item-container'>
                <a href="https://www.cheftimmaslow.com">
                <ProjectItem 
                    title='Under the Radar' 
                    backgroundImg={utrImg} 
                />
                </a>
                <a href="https://pokedex-lilac-delta.vercel.app/">
                <ProjectItem 
                    title='Pokedex' 
                    style={{
                        textDecoration: 'none'
                    }}
                    backgroundImg={pokedexImg} 
                    projectUrl='/pokedex'
                />
                </a>
                <a href="https://ourdate.gurufox.ai/">
                <ProjectItem 
                    title='Gurufox Ai' 
                    backgroundImg={gurufoxImg} 
                    projectUrl='/gurufox'
                />
                </a>
                {/* <ProjectItem 
                    title='Best Eats' 
                    backgroundImg={bestEatsImg} 
                    projectUrl='/besteats'
                 /> */}
            </div>
        </div>
    </div>
  )
}

export default Projects
