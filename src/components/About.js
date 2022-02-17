import React from 'react';
import { Stack, Box, Typography, Grid } from '@mui/material';

function About() {
  return (
    <Grid container alignItems='center' spacing={20} alignItems='center'>
      <Grid item xs={12} md={7}>
        <Typography variant='h2'>About me</Typography>
        <Typography variant='p'>
          I started self-studying programming in 2017, learning the basics of
          Python and earning the Responsive Web Design, JavaScript Algorithms
          and Data Structures, and Front End Development Libraries
          certifications from freecodecamp.org. From there I began taking some
          computer science classes at UW-Madison where I picked up Java. At that
          time I was hired at Epic Systems in a Quality Assurance role doing
          black and gray box testing on electronic health record software. I
          worked on the Care Everywhere and Cosmos applications,
          interoperability and health data aggregation for research and clinical
          purposes. This involved more Python as well as SQL and MUMPS
          programming languages.
          <br />
          <br />
          Wanting to work more directly with code, I took up the UW-Madison
          Coding Bootcamp in 2021.
          <br />
          <br />
          A passionate learner, I'm always picking up new fun things to do,
          especially if it's tactile and/or social. That's how I began my
          initial career as a musician. Trumpets and guitars always seemed to
          find their way under my fingers and eventually led to me earning a
          Bachelors and Masters degrees in Music Performance. I do still enjoy
          performing freelance in my area in a variety of styles and venues.
          <br />
          <br />I also keep my hands busy with crafting projects. Starting with
          crochet and knitting, I worked my way up to making chainmaille and
          paracord crafts. Otherwise, I like spend time enjoying the outdoors.
          Biking and hiking with friends or in solitude.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <div className='profile-img-container'>
          <img
            className='profile-img'
            src={require('../assets/images/tj-pic.jpg')}
            alt=''
          />
        </div>
      </Grid>
      <section className='col-5'></section>
    </Grid>
  );
}

export default About;
