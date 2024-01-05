// home.js

/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import Girlimage from './Girlimage.jpeg';
import Projects from './project.js';
import { useNavigate } from 'react-router-dom';


function Home({ projects, updateProjects }) {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [description, setDescription] = useState('');

  const addProject = () => {
    const newProject = {
      name: projectName,
      link: projectLink,
      description: description,
    };

    const newProjects = [...projects, newProject];
    updateProjects(newProjects);

    setProjectName('');
    setProjectLink('');
    setDescription('');
  };

  useEffect(() => {
    // You can also update the projects state when it changes
    updateProjects(projects);
  }, [projects, updateProjects]);

  return (
    <div>
      <div className="cont">
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
      <div className="form-element">
        <form>
          <h1>Add Project</h1>
          <input type="text" id="projectname" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <input type="text" id="projectlink" value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
          <textarea rows="5" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="button" className="add-button" onClick={addProject}>
            Add
          </button>
        </form>
      </div>
      <Projects projects={projects} />
    </div>
  );
}

export default Home;
