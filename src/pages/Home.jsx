import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import MovieList from './MovieList';

const Home = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const { results } = await getTrendingMovies();
        setTrendingMoviesList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      {error !== null && <p className="error-bage">{error}</p>}
      <h1 className="title">Trending today</h1>
      <ul className="list-movies">
        <MovieList moviesList={trendingMoviesList} />
      </ul>
    </div>
  );
};

export default Home;
