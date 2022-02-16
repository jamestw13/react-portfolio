import React from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import {OpenInBrowser, GitHub} from '@mui/icons-material'

function Project({repo}) {
  return (
    <Card sx={{minWidth: 300, maxWidth: 600}}>
      <CardHeader title={repo.name} />
        
        <CardMedia component='img' sx={{maxHeight: 300}} image={require(`../assets/images/${repo.image}`)}/>
        <CardContent>
        <Typography variant='p' >{repo.description}</Typography>
        

        </CardContent>
        <CardActions>
          <Button 
          onClick={()=>window.open(repo.deployment || `https://jamestw13.github.io/${repo.name}/`, '_blank').focus()} 
          startIcon={  <OpenInBrowser/>}
          >
            Live Deployment
          </Button>
          <Button 
          onClick={() => window.open(`https://github.com/jamestw13/${repo.name}/`, '_blank').focus()}
          startIcon={            <GitHub/>          }
          >
            GitHub Repo
          </Button>
        </CardActions>
      
        
      
    </Card>
  );
}

export default Project;
