import React from 'react';
import Project from '../components/Project';
import repos from '../assets/data/Repos'

import {Typography} from '@mui/material'

function Projects() {
  

  return (
    <>
      <Typography variant='h5'>Portfolio</Typography>
      <Typography variant='p'>A sampling of projects I've contributed to.</Typography>
        {repos.map(repo => (
          <Project repo={repo} key={repo.name} />
        ))}
    </>
  );
}

export default Projects;
