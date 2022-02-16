import React from 'react';
import Project from './Project';
import repos from '../assets/data/Repos';

import { Stack, Typography } from '@mui/material';

function Projects() {
  return (
    <Stack
      spacing={2}
      alignItems='center'
      sx={{ maxWidth: 1500, backgroundColor: 'primary.dark', padding: 10 }}
    >
      <Typography variant='h5'>Portfolio</Typography>
      <Typography variant='p'>
        A sampling of projects I've contributed to.
      </Typography>
      {repos.map(repo => (
        <Project repo={repo} key={repo.name} />
      ))}
    </Stack>
  );
}

export default Projects;
