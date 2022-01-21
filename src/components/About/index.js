import React from 'react';

function About() {
  return (
    <section className="w-75 mx-auto my-5">
      <h2>About</h2>
      <div className="d-flex flex-row justify-content-around align-items-center p-5">
        <div className="col-8 col-s-12">
          <div className="placeholder col-12 bg-light"></div>
          <div className="mx-auto">
            <pre>
              <code>
                {`\tabout: {\n\t\twho:\t"TJ James",\n\t\twhat:\t"Full Stack Web Developer",\n\t\twhen:\t"2021 - Present",\n\t\twhere: \t"Madison, WI and beyond:,\n\t\twhy:\t"It's like candy for the brain"\n\t}`}
              </code>
            </pre>
          </div>

          <div className="placeholder col-12 bg-light placeholder-glow"></div>
        </div>
        <img
          className="col-4 img-fluid border border-white border-5"
          src={require('../../assets/images/composite.png')}
          alt="TJ James but he's living the movie Multiplicity"
        ></img>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <section className="col-5">
          <h2>Personal</h2>
          <p>
            I'm a passionate learner. I'm always picking up new fun things to do, especially if it's tactile. I also
            enjoy social activites. That's how I got started in music. Trumpets and guitars always seem to find their
            way under my fingers, especially if there are others joining in. I get in my share of performances with a
            few bands around town in my freetime.
          </p>
          <p>
            I also keep my hands busy with crafting projects. Starting with crochet and knitting, I worked my way up to
            making chainmaille and paracord crafts. Otherwise, I like spend time enjoying the outdoors. Biking and
            hiking with friends or in solitude.
          </p>
        </section>
        <section className="col-5">
          <h2 className="text-center">Knowledge</h2>
          <div className="d-flex flex-column mh-25 flex-wrap" style={{height: 250}}>
            <h5>JS / CSS / HTML</h5>
            <h5>Node</h5>
            <h5>Express</h5>
            <h5>React</h5>
            <h5>Mongo</h5>
            <h5>Jest</h5>
            <h5>JQuery</h5>
            <h5>JQuery UI</h5>
            <h5>Bootstrap</h5>
            <h5>Git / GitHub</h5>
            <h5>REST APIs</h5>
            <h5>GraphQL</h5>
            <h5>MySQL</h5>
            <h5>ORM / ODM</h5>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
