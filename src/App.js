import React from 'react';

import "./App.css"

import ProfilePic from "./images/profile-img.jpeg";

import Contact from './components/Contact';
import About from './components/About';
import SocialMedias from './components/SocialMedias';


function App() {
  return (

    <div className="container">

      <img src={ProfilePic} className="profilePic" alt="profile"/>

      <div className="text-info">
        <Contact />
        <About />
      </div>
      
      <SocialMedias />
    </div>
  );
}

export default App;
