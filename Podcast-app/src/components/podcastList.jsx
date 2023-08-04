import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PodcastList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  const genreLookupTable = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };



  return (
    <div className="podcast-list">
      <h2>Podcast Shows</h2>
      <div className="card-container">
        {shows.map((show) => (
          <div key={show.id}>
            <div className="card">
              <Link to={`/show/${show.id}`}> <img src={show.image} alt={show.title}/></Link>
              <h3>{show.title}</h3>
              <p>Number of Seasons: {show.seasons}</p>
              <p>Last Updated: {formatDate(show.updated)}</p>
              <p>Genres: {show.genres.map((genreId) => genreLookupTable[genreId]).join(', ')}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastList;
