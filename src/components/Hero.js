import React from 'react';
import { Box } from '@mui/material';

function Hero() {
  return (
    <section id='hero-section'>
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
    </section>
  );
}

export default Hero;
