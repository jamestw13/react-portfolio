import React, {useState} from 'react';

function Portfolio() {
  const [repos] = useState([
    {id: 1, name: 'photography-portfolio', image: 'photography-portfolio.png', description: ''},
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
  ]);

  console.log(repos);

  return (
    <section className="w-75 mx-auto my-5">
      <h2>Portfolio</h2>
      <p>A sampling of projects I've contributed to.</p>

      <div className="d-flex align-item-start flex-wrap justify-content-around">
        {repos.map(repo => (
          <div className="card col-5 m-2" key={repo.name}>
            <img
              src={require(`../../assets/images/${repo.image}`)}
              className="card-img-top"
              alt={repo.description}
              style={{maxHeight: '200px', maxWidth: 'auto', objectFit: 'cover'}}
            />
            <div className="card-body">
              <h5 className="card-title text-dark">{repo.name}</h5>
              <p className="card-text">{repo.description}</p>
              <div className="d-flex justify-content-center">
                <a href={repo.deployment || `https://jamestw13.github.io/${repo.name}/`} className="btn btn-info mx-5">
                  Live Site
                </a>
                <a href={`https://github.com/jamestw13/${repo.name}/`} className="btn btn-info mx-5">
                  GitHub Page
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
