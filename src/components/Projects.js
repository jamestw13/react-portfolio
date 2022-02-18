import React from 'react';
import Project from './Project';
import repos from '../assets/data/repos';

import { Stack, Typography } from '@mui/material';

function Projects() {
  return (
    <section id='projects'>
      <Typography variant='h2'>My Work</Typography>
      <Stack spacing={10} alignItems='center' sx={{ maxWidth: 1500 }}>
        <Typography variant='h5'>
          Some samples of projects I've contributed to.
        </Typography>
        {repos.map((repo, index) =>
          index % 2 === 0 ? (
            <Project repo={repo} key={repo.id} isEven={true} />
          ) : (
            <Project repo={repo} key={repo.id} isEven={false} />
          )
        )}
      </Stack>
    </section>
  );
}

export default Projects;
