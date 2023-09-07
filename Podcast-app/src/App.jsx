// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PodcastList from './components/podcastList';
import ShowDetails from './components/showDetails';
import SeasonEpisodes from './components/seasonEpisodes';



function App() {
  const [episodesData, setEpisodesData] = useState([]);
  

  useEffect(() => {
    fetchEpisodesData();
  }, []);

  const fetchEpisodesData = async () => {
    try {
      const response = await fetch('https://podcast-api.netlify.app/shows');
      const data = await response.json();
      setEpisodesData(data);
    } catch (error) {
      console.error('Error fetching episodes data:', error);
    }
  };

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PodcastList />} />
        <Route path='/show/:id' element={<ShowDetails />} />
        <Route
          path='/show/:id/season/:seasonNumber'
          element={
            <SeasonEpisodes
              episodesData={episodesData}
        
            />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
