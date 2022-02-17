import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

function Hero() {
  return (
    <Box maxWidth='900px' margin='50px auto'>
      <div className='spacer'></div>
      <pre>
        <code>
          {`about: {
                who:    "TJ James",
                what:   "Full Stack Developer",
                when:   "2021 - Present",
                where:  "Madison, WI,
                why:    "It's like candy for the brain"
            }`}
        </code>
      </pre>
      <div className='spacer'></div>
    </Box>
  );
}

export default Hero;
