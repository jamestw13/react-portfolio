import React from 'react';

function Portfolio() {
  const repos = [
    {id: 1, name: 'photography-portfolio', image: '../../assets/images/photography-portfolio.png', description: ''},
    {
      id: 2,
      name: 'budget-tracker',
      deployment: 'https://gentle-anchorage-42130.herokuapp.com/',
      image: 'budget-tracker.png',
      description: '',
    },
    {
      id: 3,
      name: 'work-it-done',
      deployment: 'https://warm-eyrie-07140.herokuapp.com/',
      image: 'work-it-done.png',
      description: '',
    },
    {id: 4, name: 'raycasting-demo', image: 'raycasting-demo.gif', description: ''},
    {id: 5, name: 'Taco-Loca-tor', image: 'Taco-Loca-tor.png', description: ''},
    {id: 6, name: 'boids-quadtree', image: 'boids-quadtree.gif', description: ''},
  ];
  return (
    <>
      <h2>Portfolio Section</h2>

      <ul className="list-unstyled">
        {repos.map(repo => (
          <li className="m-2" key={repo.id}>
            <div className="card" style={{width: 250}}>
              <img src={repo.image} className="card-img-top" alt={repo.description} />
              <div className="card-body">
                <h5 className="card-title text-dark">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
                <a href={repo.deployment || `https://jamestw13.github.io/${repo.name}/`} className="btn btn-primary">
                  Live Site
                </a>
                <a href={`https://github.com/jamestw13/${repo.name}/`} className="btn btn-primary">
                  GitHub Page
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Portfolio;
