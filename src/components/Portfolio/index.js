import React, {useState, useEffect} from 'react';

function Portfolio() {
  const [githubData, setGithubData] = useState([{html_url: 'waiting', name: 'Loading'}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/jamestw13/repos')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => setGithubData(data))
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Portfolio Section</h2>
      <div></div>
      <ul className="list-unstyled">
        {githubData.map(repo => (
          <li>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Portfolio;
