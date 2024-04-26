import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import headshot from '../assets/headshot1.png';
import '../styles/contact.css';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://www.formbackend.com/f/cc9fe82304e2a4d0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name, email,  message }),
    })
    .then((response) => {
      if (response.status === 422) {
        throw new Error("Validation error");
      } else if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    })
    .then(data => {
      setSuccessMessage("Message sent successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
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
                    {successMessage.length == 0 && 
                    <form onSubmit={handleSubmit}>
                      <input placeholder="Name" type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
                      <input placeholder="Email" type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                      <textarea 
                        style={{fontFamily: 'inter'}} 
                        placeholder="Your Message" 
                        className="textarea" 
                        name="message" 
                        onChange={(e) => setMessage(e.target.value)}
                        rows="10" 
                        required>  
                      </textarea>
                      <button type="submit">Send</button>
                    </form>}
                    {successMessage.length > 0 && <p>{successMessage}</p>}

                  {/* <form
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
                  </form> */}
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
