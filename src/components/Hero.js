import React from 'react';
import { Box } from '@mui/material';

function Hero() {
  return (
    <Box minWidth='600px' maxWidth='900px' margin='100px 20px 20px 150px'>
      <div className='spacer'></div>
      <pre>
        <code>
          {`
            about: {
              who:    "TJ James",
              what:   "Full Stack Developer",
              when:   "2021 - Present",
              where:  "Madison, WI,
              why:    "Better living through 1s and 0s"
            }
            `}
        </code>
      </pre>
      <div className='spacer'></div>
    </Box>
  );
}

export default Hero;
