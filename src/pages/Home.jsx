import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const { results } = await getTrendingMovies();
        console.log('results: ', results);
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
        {trendingMoviesList.length !== 0 &&
          trendingMoviesList.map(({ id, original_title, original_name }) => (
            <li key={id} className="item-list-movies">
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {original_title || original_name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
