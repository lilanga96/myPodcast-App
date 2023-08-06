import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowDetails = () => {
  const [show, setShow] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      })
      .catch((error) => {
        console.error('Error fetching show details:', error);
      });
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <h3>Seasons:</h3>
      <div className='season-cards-container'>
        {show.seasons.map((season) => (
          <div className='season-card' key={season.season}>
            <img src={season.image} />
            Season {season.season}: {season.title}
            <br />
            Number of Episodes: {Object.keys(season.episodes).length}
            <Link to={`/show/${id}/season/${season.season}`}><button>View Episodes</button></Link>
          </div>
        ))}
      </div>
      <Link to='/'>
        <button className='home-btn'> Home</button>
      </Link>
    </div>
  );
};

export default ShowDetails;
