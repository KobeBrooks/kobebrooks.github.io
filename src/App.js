import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero.js';
import Cards from './components/Card';
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Hero id="Hero" />
      <Cards id="Cards" />
      <Projects id="Projects" />
      <Resume id="Resume" />
      {/* <Switch>
        <Route path='/' exact component={Home}/>
      </Switch> */}
    </Router>
    </>
  );
}

export default App;
