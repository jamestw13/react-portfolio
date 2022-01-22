import React from 'react';

function Project({repo}) {
  return (
    <div className="card col-5 bg-dark m-2">
      <img
        src={require(`../../assets/images/${repo.image}`)}
        className="card-img-top"
        alt={repo.description}
        style={{maxHeight: '200px', maxWidth: 'auto', objectFit: 'cover'}}
      />
      <div className="card-body">
        <h5 className="card-title text-light">{repo.name}</h5>
        <p className="card-text">{repo.description}</p>
        <div className="d-flex flex-row justify-content-center">
          <a href={repo.deployment || `https://jamestw13.github.io/${repo.name}/`} className="btn btn-warning mx-5">
            Live Site
          </a>
          <a href={`https://github.com/jamestw13/${repo.name}/`} className="btn btn-warning mx-5">
            GitHub Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
