import { getMovieByQuery } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [moviesListByName, setMoviesListByName] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const moviesListRef = useRef([]);
  const queryValue = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.moviesName.value;
    if (value.trim() === '') {
      return alert('Sorry can not be empty');
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const resp = await getMovieByQuery(queryValue);
        console.log('resp: ', resp);
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

  console.log('moviesListByName: ', moviesListByName);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter movies:
          <input type="text" name="moviesName" />
          <button>Search</button>
        </label>
      </form>

      <div>
        {loader && <Loader />}
        {error !== null && <p className="error-bage">{error}</p>}
        <ul className="list-movies">
          {moviesListByName.length !== 0 &&
            moviesListByName.map(({ id, original_title, original_name }) => (
              <li key={id} className="item-list-movies">
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  {original_title || original_name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
