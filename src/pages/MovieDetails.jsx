import { getMovieDetails } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const [moviesDetails, setMoviesDetails] = useState({});
  const backLinkRef = useRef(location.state?.from ?? '/');
  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    const getMoviesInfo = async () => {
      try {
        setLoader(true);
        const resp = await getMovieDetails(movieId);
        console.log('resp: ', resp.data);
        setMoviesDetails(resp.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getMoviesInfo();
  }, [movieId]);
  console.log('moviesDetails: ', moviesDetails);

  const {
    poster_path,
    homepage,
    original_title,
    original_name,
    vote_average,
    overview,
    genres,
  } = moviesDetails;

  return (
    <div>
      {loader && <Loader />}
      <Link className="go-back" to={backLinkRef.current}>
        Go back
      </Link>
      <div className="container-movie-details">
        <div className="cont-img">
          <img
            className="img-movie-id"
            src={`${imgUrl}${poster_path}`}
            alt={homepage}
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
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
