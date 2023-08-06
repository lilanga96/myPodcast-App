// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PodcastList from './components/podcastList';
import ShowDetails from './components/showDetails';
import SeasonEpisodes from './components/seasonEpisodes';
import Favorites from './components/favorites';

function App() {
  const [episodesData, setEpisodesData] = useState([]);
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);

  useEffect(() => {
    // Fetch episodesData from the API or set it with actual data
    fetchEpisodesData();
  }, []);

  const fetchEpisodesData = async () => {
    try {
      // Fetch episodesData from the API and set it in the state
      const response = await fetch('https://podcast-api.netlify.app/shows');
      const data = await response.json();
      setEpisodesData(data);
    } catch (error) {
      console.error('Error fetching episodes data:', error);
    }
  };

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

  return (
    <Router>
      <nav>
        
        <Link to='/favorites'>Favorites</Link>
      </nav>
      <Routes>
        <Route path='/' element={<PodcastList />} />
        <Route path='/show/:id' element={<ShowDetails />} />
        <Route
          path='/show/:id/season/:seasonNumber'
          element={
            <SeasonEpisodes
              episodesData={episodesData}
              favoriteEpisodes={favoriteEpisodes}
              onToggleFavorite={handleToggleFavorite} // Pass the handleToggleFavorite function here
            />
          }
        />
        <Route
          path='/favorites'
          element={<Favorites favoriteEpisodes={favoriteEpisodes} allEpisodes={episodesData} onToggleFavorite={handleToggleFavorite} />} // Pass the handleToggleFavorite function here
        />
      </Routes>
    </Router>
  );
}

export default App;
