import react, { useState } from 'react';
import '../styles/nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  return (
    <nav>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={handleLinkClick}>HOME</a></li>
            <li><a href="#about" onClick={handleLinkClick}>ABOUT</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>SKILLS</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>PROJECTS</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>CONTACT</a></li>
        </ul>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default Nav
