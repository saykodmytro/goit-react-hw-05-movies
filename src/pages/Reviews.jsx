import { getMovieReviews } from 'api/themoviedb-api';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMoviesReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const resp = await getMovieReviews(movieId);
        setMoviesReviews(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  return movieReviews.length === 0 ? (
    <h3 className="no-reviews">No Reviews!</h3>
  ) : (
    <div>
      {loader && <Loader />}
      {error !== null && <p className="error-bage">{error}</p>}
      <ul className="list-reviews">
        {movieReviews.length !== 0 &&
          movieReviews.map(({ id, author, content }) => (
            <li key={id} className="item-casts">
              <h3 className="casts-name">Author: {author}</h3>
              <p className="casts-character">Content: {content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
