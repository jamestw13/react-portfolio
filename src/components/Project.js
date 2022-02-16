import React from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import {OpenInBrowser, GitHub} from '@mui/icons-material'

function Project({repo}) {
  return (
    <Card sx={{maxWidth: 500}}>
      <CardHeader title={repo.name} />
        
        <CardMedia component='img' image={require(`../assets/images/${repo.image}`)}/>
        <CardContent>
        <Typography variant='p' >{repo.description}</Typography>
        

        </CardContent>
        <CardActions>
          <Button 
          onClick={repo.deployment || `https://jamestw13.github.io/${repo.name}/`} 
          startIcon={  <OpenInBrowser/>}
          >
            Live Deployment
          </Button>
          <Button 
          onClick={`https://github.com/jamestw13/${repo.name}/`}
          startIcon={            <GitHub/>          }
          >
            GitHub Repo
          </Button>
        </CardActions>
      
        
      
    </Card>
  );
}

export default Project;
