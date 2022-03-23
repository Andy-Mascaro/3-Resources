import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/movies';



export default function Movies() {
  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchMovies();
        setMovies(resp);
      } catch (e) {
        alert(e.message);
      }
      
    };
    fetch();

  }, []);

  return ( 
    <div className='movies'>
      {movies.map((movie) => ( 
        <div key={movie.id}>
          <h2>Title: {movie.title}</h2>
          <h3>Budget:  {movie.budget}</h3>
          <h4>Box Office: {movie.box_office}</h4>
          <h5>Running Time: {movie.running_time}</h5>
        </div>
      ))}
    </div>
  );
}

