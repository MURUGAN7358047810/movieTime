import React, { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import { MovieCard } from './MovieCard';

//1bbded75

const API_URL = 'http://www.omdbapi.com?apikey=1bbded75'





function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

setMovies(data.Search);
}
  useEffect(() => {
    searchMovies('superman');

  },[]);
  return (
    
    <div className='app'>
      <h1>MovieTime</h1>

      <div className="search">
      <input type="text" placeholder='Search for movies'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} />

      <img src={searchIcon} alt="search"
      onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
          {movies.map((movie) => (
            <MovieCard movies1={movie}/>
          ))}
          
        </div>
        ):(
          <div className='empty'>
          <h2>No Movies Found</h2>
          </div>
        )
      }

       
   </div>
  );
}

export default App;
