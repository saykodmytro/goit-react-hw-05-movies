import { getMovieCredits } from 'api/themoviedb-api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { defaultImg, imgUrl } from 'utils/const';

const Cast = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const [movieCast, setMoviesCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const resp = await getMovieCredits(movieId);
        setMoviesCast(resp.data.cast);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  return movieCast.length === 0 ? (
    <h3 className="no-reviews">
      Sorry, but there are no casts for this movie!
    </h3>
  ) : (
    <div>
      {loader && <Loader />}
      {error !== null && <p className="error-bage">{error}</p>}
      <ul className="list-casts list">
        {movieCast.length !== 0 &&
          movieCast.map(
            ({ cast_id, original_name, character, profile_path }) => (
              <li key={cast_id} className="item-casts">
                <img
                  src={profile_path ? `${imgUrl}${profile_path}` : defaultImg}
                  alt={original_name}
                  width="250"
                />
                <h3 className="casts-name">{original_name}</h3>
                <p className="casts-character">Character: {character}</p>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Cast;
