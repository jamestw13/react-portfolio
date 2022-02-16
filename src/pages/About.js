import React from 'react';
import {Stack, Box, Typography} from '@mui/material'

function About() {
  return (
    <Stack padding={2}>
      <Typography variant='h5'>About</Typography>
      <div className="d-flex flex-row justify-content-around align-items-center p-5 flex-wrap">
        <div className="col-6 col-s-12">
          <div className="placeholder col-12 bg-dark"></div>
          <div className="mx-auto">
            <pre>
              <code>
                {`\tabout: {\n\t\twho:\t"TJ James",\n\t\twhat:\t"Full Stack Developer",\n\t\twhen:\t"2021 - Present",\n\t\twhere: \t"Madison, WI and beyond:,\n\t\twhy:\t"It's like candy for the brain"\n\t}`}
              </code>
            </pre>
          </div>

          <div className="placeholder col-12 bg-dark"></div>
        </div>
        <Box maxWidth='400px'>

        {/* <img
        maxWidth='300px'
          className="col-6 col-s-12 border border-dark border-5"
          src={require('../assets/images/composite.png')}
          alt="TJ James but he's living the movie Multiplicity"
          ></img> */}
          </Box>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <section className="col-5">
          <h2>Personal</h2>
          <p>
            I started self-studying programming in 2017, learning the basics of Python and earning the Responsive Web
            Design, JavaScript Algorithms and Data Structures, and Front End Development Libraries certifications from
            freecodecamp.org. From there I began taking some computer science classes at UW-Madison where I picked up
            Java. At that time I was hired at Epic Systems in a Quality Assurance role doing black and gray box testing
            on electronic health record software. I worked on the Care Everywhere and Cosmos applications,
            interoperability and health data aggregation for research and clinical purposes. This involved more Python
            as well as SQL and MUMPS programming languages.
          </p>
          <p>Wanting to work more directly with code, I took up the UW-Madison Coding Bootcamp in 2021.</p>
          <p>
            A passionate learner, I'm always picking up new fun things to do, especially if it's tactile and/or social.
            That's how I began my initial career as a musician. Trumpets and guitars always seemed to find their way
            under my fingers and eventually led to me earning a Bachelors and Masters degrees in Music Performance. I do
            still enjoy performing freelance in my area in a variety of styles and venues.
          </p>
          <p>
            I also keep my hands busy with crafting projects. Starting with crochet and knitting, I worked my way up to
            making chainmaille and paracord crafts. Otherwise, I like spend time enjoying the outdoors. Biking and
            hiking with friends or in solitude.
          </p>
        </section>
        <section className="col-5"></section>
      </div>
    </Stack>
  );
}

export default About;
