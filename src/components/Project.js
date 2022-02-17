import React from 'react';
import { Grid, Stack, Typography, Button, Box, Container } from '@mui/material';
import { OpenInNew, GitHub } from '@mui/icons-material';

function Project({ repo, isEven }) {
  return (
    <>
      <Grid
        className='project-container'
        container
        alignItems='center'
        flexDirection={isEven ? 'row' : 'row-reverse'}
      >
        <Grid item xs={12} md={7} className='project-img-container'>
          <img
            className='project-img'
            alt={repo.description}
            src={require(`../assets/images/${repo.image}`)}
          />
        </Grid>
        <Grid item xs={12} md={5} className='project-info'>
          <Stack>
            <Box className='title-box'>
              <Typography variant='h4' textAlign={isEven ? 'right' : 'left'}>
                {repo.name}
              </Typography>
            </Box>
            <Box className='description-box'>
              <Typography variant='p' textAlign={!isEven ? 'left' : 'right'}>
                {repo.description}
              </Typography>
            </Box>
            <div className='tech-stack-box'>
              {repo.techStack ? (
                repo.techStack.map(tech => <div key={tech}>{tech}</div>)
              ) : (
                <p></p>
              )}
            </div>

            <div
              className='project-links'
              alignItems={isEven ? 'right' : 'left'}
            >
              <Button
                variant='contained'
                onClick={() =>
                  window
                    .open(
                      repo.deployment ||
                        `https://jamestw13.github.io/${repo.gitlink}/`,
                      '_blank'
                    )
                    .focus()
                }
              >
                <OpenInNew />
              </Button>
              <Button
                variant='contained'
                onClick={() =>
                  window
                    .open(
                      `https://github.com/jamestw13/${repo.gitLink}/`,
                      '_blank'
                    )
                    .focus()
                }
              >
                <GitHub />
              </Button>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
