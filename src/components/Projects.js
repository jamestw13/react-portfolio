import React from 'react';
import Project from './Project';
import repos from '../assets/data/repos';

function Projects() {
  return (
    <section id='projects'>
      <h2>My Work</h2>
      <h5>Some samples of projects I've contributed to.</h5>
      <div className='projects-container'>
        {repos.map(repo => (
          <Project repo={repo} key={repo.id} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
