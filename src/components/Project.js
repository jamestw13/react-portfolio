import React from 'react';
import { Grid, Stack, Typography, Button, Box } from '@mui/material';
import { OpenInNew, GitHub } from '@mui/icons-material';

function Project({ repo, direction }) {
  return (
    <>
      <Grid
        container
        spacing={2}
        flexDirection={direction === 'left' ? 'row' : 'row-reverse'}
      >
        <Grid item xs={12} md={7} className='project-img-container'>
          <img
            className='project-img'
            src={require(`../assets/images/${repo.image}`)}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack>
            <Box className='title-box'>
              <Typography variant='h4'>{repo.name}</Typography>
            </Box>
            <Box className='description-box'>
              <Typography variant='p'>{repo.description}</Typography>
            </Box>
            <Box className='tech-stack-box'></Box>

            <Box className='button-box'>
              <Button
                variant='contained'
                onClick={() =>
                  window
                    .open(
                      repo.deployment ||
                        `https://jamestw13.github.io/${repo.name}/`,
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
                      `https://github.com/jamestw13/${repo.name}/`,
                      '_blank'
                    )
                    .focus()
                }
              >
                <GitHub />
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
