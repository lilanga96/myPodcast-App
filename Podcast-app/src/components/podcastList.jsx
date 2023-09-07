import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PodcastList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('title');
  const [dateSortOrder, setDateSortOrder] = useState('asc');

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
    return <div>Loading...</div>;
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

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

  
    if (selectedSortBy !== 'updated') {
      setDateSortOrder('asc');
    }
  };

  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const toggleDateSortOrder = () => {
    setDateSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedShows = filteredShows.slice().sort((a, b) => {
    if (sortBy === 'title') {
      return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortBy === 'updated') {
      return dateSortOrder === 'asc'
        ? new Date(a.updated).getTime() - new Date(b.updated).getTime()
        : new Date(b.updated).getTime() - new Date(a.updated).getTime();
    }

    return 0;
  });

  

  return (
    <div className="podcast-list-container">
      <div className="podcast-list-header">
        <h2 className="podcast-list-title">Podcast Shows</h2>
        <div className="sorting-options">
          <button onClick={toggleSortOrder}>
            Sort by title {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
          <label className="sort-by-label">
            Sort by:{' '}
            <select value={sortBy} onChange={handleSortByChange}>
              <option value="title">Title</option>
              <option value="updated">Date Updated</option>
            </select>
            </label>
          {sortBy === 'updated' && (
            <button className="sort-by-date-btn" onClick={toggleDateSortOrder}>
              Sort by date {dateSortOrder === 'asc' ? 'Descending' : 'Ascending'}
            </button>
          )}
        </div>
      </div>

      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title..."
      />

      <div className="card-container">
        {loading ? (
          <div>Loading...</div>
        ) : sortedShows.length === 0 ? (
          <div>No shows found.</div>
        ) : (
          sortedShows.map((show) => (
            <div key={show.id}>
              <div className="card">
                <h3>{show.title}</h3>
                <Link to={`/show/${show.id}`}>
                  <img src={show.image} alt={show.title} />
                </Link>
                <p>Number of Seasons: {show.seasons}</p>
                <p>Last Updated: {formatDate(show.updated)}</p>
                <p>Genres: {show.genres.map((genreId) => genreLookupTable[genreId]).join(', ')}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PodcastList;
