import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/main.css';

const Main = () => {
  return (
    <div className="bg-container">
      <Nav/>
      <div id="home" className="intro-container">
        <p className="intro-p">Hi! I&apos;m Mallory</p>
        <p className="intro-p">A Front-End Developer</p>
          <span>I specialize in building exceptional digital experiences.</span>
        {/* <img src={bgImg}/> */}
      </div>
      <div className="icon-container">
      <div className='icon'>
        <a href="https://www.linkedin.com/in/mshackford/" target="_blank" rel="noopener"><FaLinkedinIn style={{color: 'black'}}/></a>
      </div>
      <div className='icon'>
          <a href="https://github.com/MalloryShackford" target="_blank" rel="noopener"><FaGithub style={{color: 'black'}} /></a>
      </div>
      <div className='icon'>
          <a href="mailto:mallory.shackford@gmail.com"><AiOutlineMail style={{color: 'black'}} /></a>
      </div>
      <div className='icon'>
         <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:eda967b4-915e-4d84-837a-2e5c81c8a185" target="_blank" rel="noopener noreferrer" title="Resume"><BsFillPersonLinesFill style={{color: 'black'}} /></a>
      </div>
      </div>
      <div className="about-container">
        <About />
      </div>
      <div className="skills-container">
        <Skills/>
      </div>
      <div className="project-container">
        <Projects/>
      </div>
      <div className="contact-container">
        <Contact/>
      </div>
    </div>
  )
}

export default Main
