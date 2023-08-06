// SeasonEpisodes.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SeasonEpisodes = () => {
  const [season, setSeason] = useState(null);
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
  const { id, seasonNumber } = useParams();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((showData) => {
        const selectedSeason = showData.seasons.find((seasonData) => seasonData.season === parseInt(seasonNumber));
        setSeason(selectedSeason);
      })
      .catch((error) => {
        console.error('Error fetching season episodes:', error);
      });
  }, [id, seasonNumber]);

  const handleToggleFavorite = (episodeNumber) => {
    // Check if the episode is already in favorites
    if (favoriteEpisodes.includes(episodeNumber)) {
      // If already in favorites, remove it from favorites
      setFavoriteEpisodes(favoriteEpisodes.filter((episode) => episode !== episodeNumber));
    } else {
      // If not in favorites, add it to favorites
      setFavoriteEpisodes([...favoriteEpisodes, episodeNumber]);
    }
  };

  if (!season) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{season.title}</h2>
      <div className='episode-cards-container'>
        {season.episodes.map((episode) => (
          <div className='episode-card' key={episode.title}>
            <h3>{episode.title}</h3>
            <p>Episode: {episode.episode}</p>
            <H5AudioPlayer autoPlay={false} src={episode.file} onPlay={(e) => console.log('Audio is playing')} />

            <button onClick={() => handleToggleFavorite(episode.episode)}>
              {favoriteEpisodes.includes(episode.episode) ? 'Remove from Favorites' : 'Mark as Favorite'}
            </button>
          </div>
        ))}
      </div>
      <Link to={`/show/${id}`}>
        <button className='button'>Back to Show Details</button>
      </Link>
    </div>
  );
};

export default SeasonEpisodes;
