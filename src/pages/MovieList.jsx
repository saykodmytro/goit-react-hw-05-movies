import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <div>
      {moviesList.length !== 0 &&
        moviesList.map(({ id, original_title, original_name }) => (
          <li key={id} className="item-list-movies">
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {original_title || original_name}
            </Link>
          </li>
        ))}
    </div>
  );
};

export default MovieList;
