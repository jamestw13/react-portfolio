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
    <section id="about">
      <h2>About Me</h2>
      <div id="about-section">
        <div className="about-text">
          <p>
            Currently working as a full-stack developer at the University of Wisconsin - School of Medicine in the
            Biomedical Research Model Service since 2022. I'm building tools to aid the department carry out their
            duties efficiently, with a focus on ease of use interfaces and cohesive database architecture.
          </p>

          <p>
            Previously, I was employed by Epic Systems as a quality manager doing black and gray box testing on an
            enormous electronic health record software suite. I worked on two applications there: Cosmos - an enormous
            aggregation of medical data to help drive medical research as well provide evidence-based clinical care.
            Care Everywhere - Epic's interoperability application, allowing medical providers to access and update
            patients' electronic health records from other providers.
          </p>

          <p>
            I have a personal goal of helping people live better lives and I really feel I've been able to do that
            through developing user-centered software and I've been fortunate enough to do it through my last two
            positions tangential to the medical field.
          </p>

          <p>
            Before entering the software field, I was, and still am, a musician. Performing in various ensembles in my
            area. My primary ensemble is the{' '}
            <a href="https://www.brassknucklesquintet.com">Brass Knuckles Quintet and Percussion</a>. I'm also a fan of
            performing in pit orchestras for musical theater.
          </p>
        </div>

        <div className="profile-img-container">
          <img className="profile-img" src={require('../assets/images/tj-headshot.png')} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
