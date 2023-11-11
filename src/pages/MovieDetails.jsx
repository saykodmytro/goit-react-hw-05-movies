import { getMovieDetails } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const [moviesDetails, setMoviesDetails] = useState({});
  const backLinkRef = useRef(location.state?.from ?? '/');
  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    try {
      setLoader(true);
      const getMoviesInfo = async () => {
        const resp = await getMovieDetails(movieId);
        console.log('resp: ', resp.data);
        setMoviesDetails(resp.data);
      };
      getMoviesInfo();
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
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
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
