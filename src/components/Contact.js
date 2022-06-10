import React from "react";

import "./Contact.css"

import EmailIcon from "../images/email-icon.png"
import LinkedinIcon from "../images/linkedin-icon.png"


function Contact () {
  return (
    <section className="contact-container">

      <div className="contact-main-info">
        <h1>Beatriz dos Anjos</h1>
        <h2>Frontend Developer</h2>
      </div>

      <div className="contact-buttons">
        <a href="mailto: biadosanjos@live.com" target="_blank" rel="noreferrer" className="contact-button email-button"><img src={EmailIcon} alt="email" /> Email</a>
        <a href="https://www.linkedin.com/in/beangzz/"  target="_blank" rel="noreferrer" className="contact-button linkedin-button"><img src={LinkedinIcon} alt="linkedin" /> LinkedIn</a>
      </div>
      
    </section>
  )
}

export default Contact;