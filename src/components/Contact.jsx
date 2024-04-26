import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import headshot from '../assets/headshot1.png';
import '../styles/contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <>
    <div id="contact" className="contact-container">
      <div className="contact-bg">
        <h2>Get In Touch</h2>
          <div className="contact-img-container">
            <img className="headshot" src={headshot} alt="headshot" />
              <p className="contact-p">I&apos;m available for freelance! Contact me and let&apos;s talk.</p>
          </div>
              <div className="form-submit-container">
                  <div className="form-container">
                  <form
                    action="https://formsubmit.co/9eb8400d13809384a217392d8c97d16e" method="POST">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required/>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required />
                      <textarea 
                        style={{fontFamily: 'inter'}} 
                        placeholder="Your Message" 
                        className="textarea" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows="10" 
                        required></textarea>
                <button onChange={handleSubmit} type="submit">Send</button>
                  </form>
                  </div>
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
                 <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8d02535f-319d-4470-b7aa-95522a206921" target="_blank" rel="noopener noreferrer" title="Resume"><BsFillPersonLinesFill style={{color: 'black'}} /></a>
              </div>
              </div>
              </div>
        <div>
          <a href="/"><HiOutlineChevronDoubleUp className="icon chevron-up" size={30} />
          </a>
        </div>
    </div>
    </>
  )
}

export default Contact
