import React, { useEffect } from 'react';
import scrollReveal from 'scrollreveal';

function About() {
  useEffect(() => {
    scrollReveal().reveal('.about-text', {
      delay: 200,
      origin: 'bottom',
      distance: '50px',
      reset: false,
    });
    scrollReveal().reveal('.profile-img-container', {
      delay: 300,
      origin: 'right',
      distance: '50px',
      reset: false,
    });
  });
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div id='about-section'>
        <div className='about-text'>
          <p>
            I started self-studying programming in 2017, learning the basics of
            Python and earning the Responsive Web Design, JavaScript Algorithms
            and Data Structures, and Front End Development Libraries
            certifications from freecodecamp.org. From there I began taking some
            computer science classes at UW-Madison where I picked up Java. At
            that time I was hired at Epic Systems in a Quality Assurance role
            doing black and gray box testing on electronic health record
            software. I worked on the Care Everywhere and Cosmos applications,
            interoperability and health data aggregation for research and
            clinical purposes. This involved more Python as well as SQL and
            MUMPS programming languages.
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
            <br />I also keep my hands busy with crafting projects. Starting
            with crochet and knitting, I worked my way up to making chainmaille
            and paracord crafts. Otherwise, I like spend time enjoying the
            outdoors. Biking and hiking with friends or in solitude.
          </p>
        </div>

        <div className='profile-img-container'>
          <img
            className='profile-img'
            src={require('../assets/images/tj-headshot.png')}
            alt=''
          />
        </div>
      </div>
    </section>
  );
}

export default About;
