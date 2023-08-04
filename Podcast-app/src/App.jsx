import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PodcastList from "./components/podcastList";
import ShowDetails from "./components/showDetails";
import SeasonEpisodes from "./components/seasonEpisodes";


function App() {
  

  return (
    <Router>
      

        <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/show/:id/season/:seasonNumber" element={<SeasonEpisodes />} />
        <Route path="/show/:id" element= {<ShowDetails />} />

        </Routes>
    
    </Router>
  )
}

export default App
