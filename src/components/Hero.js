import React from 'react';

function Hero() {
  return (
    <section id='hero-section'>
      <div className='spacer'></div>

      <p id='about-code'>
        {`
  about: {
    who:    "TJ James",
    what:   "Full Stack Developer",
    when:   "2021 - Present",
    where:  "Madison, WI,
    why:    "Better living through 1s and 0s"
  }
            `}
      </p>
      <div className='spacer'></div>
    </section>
  );
}

export default Hero;
