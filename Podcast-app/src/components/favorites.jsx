// Favorites.js
import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Favorites = ({ favoriteEpisodes, allEpisodes, onToggleFavorite }) => {
  const favoriteEpisodesData = allEpisodes.filter((episode) => favoriteEpisodes.includes(episode.episode));

  return (
    <div>
      <h2>Favorite Episodes</h2>
      <div className='episode-cards-container'>
        {favoriteEpisodesData.map((episode) => (
          <div className='episode-card' key={episode.title}>
            <h3>{episode.title}</h3>
            <p>Episode: {episode.episode}</p>
            <H5AudioPlayer autoPlay={false} src={episode.file} onPlay={(e) => console.log('Audio is playing')} />
            <button onClick={() => onToggleFavorite(episode.episode)}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
