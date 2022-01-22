import React, {useState} from 'react';
import Project from '../Project';

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

  return (
    <section className="w-75 mx-auto my-5">
      <h2>Portfolio</h2>
      <p>A sampling of projects I've contributed to.</p>

      <div className="d-flex align-item-start flex-wrap justify-content-center">
        {repos.map(repo => (
          <Project repo={repo} key={repo.name} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
