import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PodcastList from "./components/podcastList";
import ShowDetails from "./components/showDetails";


function App() {
  

  return (
    <Router>
      

        <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
    
    </Router>
  )
}

export default App
