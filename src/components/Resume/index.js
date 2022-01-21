import React from 'react';

function Resume() {
  const skills = [
    'JavaScript / CSS / HTML',
    'Mongo',
    'Express',
    'Node',
    'React',
    'Jest',
    'JQuery',
    'JQuery UI',
    'Bootstrap',
    'Git / GitHub',
    'REST APIs',
    'GraphQL',
    'MySQL',
    'Mongoose',
    'Sequelize',
  ];
  return (
    <section className="w-75 mx-auto">
      <h2>Resume</h2>
      <div className="d-flex flex-row justify-content-center">
        <div className="col-5 p-5">
          <a
            href="https://docs.google.com/document/d/16d1W6bTS35hZo1dIHWeLvvMX7h1Zc1yz-t7J38XAXzE/edit?usp=sharing"
            className="text-decoration-none"
          >
            <h3 className="w-100 h-100 alert alert-info text-center align-middle">Click to see resume</h3>
          </a>
        </div>
        <div className="col-5">
          <h3 className="text-center">Knowledge Base</h3>
          <div className="d-flex flex-column flex-wrap align-items-center" style={{height: 200}}>
            {skills.map(skill => (
              <h5>{skill}</h5>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
