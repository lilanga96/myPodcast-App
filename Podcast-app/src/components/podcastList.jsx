import React, { useState, useEffect } from 'react';

const PodcastList = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch the list of shows from the API
      fetch('https://podcast-api.netlify.app/shows')
        .then((response) => response.json())
        .then((data) => {
          setShows(data); // Set the fetched data to the 'shows' state
          setLoading(false); // Set loading to false once data is fetched
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
      
    
  
    return (
      <div className='podcast-list'>
        <h2>Podcast Shows</h2>
        <div className='card-container'>
          {shows.map((show) => (
            <div className='card' key={show.id}>
              <h3>{show.title}</h3>
              <img src={show.image} alt={show.title} />
              <p>Number of Seasons: {show.seasons}</p>
              <p>Last Updated: {show.updated}</p>
              <p>Genres: {show.genres.map((genreId) => genreLookupTable[genreId]).join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PodcastList;
  