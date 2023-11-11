import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [loader, setLoader] = useState(false);
  // const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    try {
      setLoader(true);
      const getMoviesList = async () => {
        const { results } = await getTrendingMovies();
        console.log('results: ', results);
        setTrendingMoviesList(results);
      };
      getMoviesList();
    } catch (error) {
      console.log(error);
      // setError(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  return (
    <div>
      {loader && <Loader />}
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
