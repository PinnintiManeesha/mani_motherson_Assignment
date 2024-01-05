// App.js
import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './project.js';
import Contact from './contact.js';
import Home from './home.js';
import About from './About.js';

function App() {
  const [projects, setProjects] = useState([]);

  const updateProjects = (newProjects) => {
    setProjects(newProjects);
  };

  return (
    <Router>
      <div className="main-div">
        <header>
          <div className="logo">Maneesha Pinninti</div>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/">Home</Link>
          </nav>
        </header>

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={<Home projects={projects} updateProjects={updateProjects} />}
          />

          {/* Projects route */}
          <Route path="/projects" element={<Projects projects={projects} />} />

          {/* Contacts route */}
          <Route path="/contacts" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
