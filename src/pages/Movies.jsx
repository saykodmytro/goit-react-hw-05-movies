import { getMovieByQuery } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from './MovieList';

const Movies = () => {
  const [moviesListByName, setMoviesListByName] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const moviesListRef = useRef([]);
  const queryValue = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.moviesName.value;
    if (value.trim() === '') {
      return alert('Sorry can not be empty');
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!queryValue) {
          return;
        }
        setLoader(true);
        const resp = await getMovieByQuery(queryValue);
        setMoviesListByName(resp);
        moviesListRef.current = resp;
      } catch (error) {
        console.log('error: ', error);
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [queryValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">
          <input
            className="input"
            type="text"
            placeholder="Search"
            name="moviesName"
          />
          <button className="go-back">Search</button>
        </label>
      </form>

      <div>
        {loader && <Loader />}
        {error !== null && <p className="error-bage">{error}</p>}
        <ul className="list-movies">
          <MovieList moviesList={moviesListByName} />
        </ul>
      </div>
    </div>
  );
};

export default Movies;
