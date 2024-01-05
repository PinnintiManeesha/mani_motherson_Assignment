import React from 'react';
import './App.css';
import Girlimage from './Girlimage.jpeg';
import { useNavigate } from 'react-router-dom';



function About() {
    const navigate = useNavigate();
  return (
    <div>
    <div>
    <h1>UI/UX Designer</h1>
    <h1>Hello, my name is Maneesha Pinninti</h1>
    <p>Short text with details about you. What you do or your professional career. You can add more information on the about page</p>
    <button className="yellow_button" onClick={() => navigate('/projects')}>
      Projects
    </button>
    <button className="transparent-button">LinkedIn</button>
  </div>
  <div className="img-section">
    <img src={Girlimage} className="App-logo" alt="logo" />
  </div>
  </div>
  );
}

export default About;
