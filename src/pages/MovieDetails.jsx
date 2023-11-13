import { getMovieDetails } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { defaultImg, imgUrl } from 'utils/const';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const [error, setError] = useState(null);
  const [moviesDetails, setMoviesDetails] = useState({});
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const resp = await getMovieDetails(movieId);
        setMoviesDetails(resp.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  const {
    poster_path,
    homepage,
    original_title,
    original_name,
    vote_average,
    overview,
    genres,
  } = moviesDetails;

  return moviesDetails.length === 0 ? (
    <h3 className="no-reviews">
      Sorry, but there are no details for this movie!
    </h3>
  ) : (
    <div>
      {loader && <Loader />}
      {error !== null && <p className="error-bage">{error}</p>}
      <Link className="go-back" to={backLinkRef.current}>
        Go back
      </Link>
      <div className="container-movie-details">
        <div className="cont-img">
          <img
            className="img-movie-id"
            src={poster_path ? `${imgUrl}${poster_path}` : defaultImg}
            alt={homepage}
            width="300"
            height="400"
          />
        </div>{' '}
        <div className="cont-movies-info">
          <h2>{original_title || original_name}</h2>
          <p>Raiting: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div className="additional-info">
        <h3>Aditional information</h3>
        <ul className="list-add-info list">
          <li>
            <Link className="go-back" to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className="go-back" to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
