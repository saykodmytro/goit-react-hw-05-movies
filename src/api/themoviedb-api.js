import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '1743fd666a2c3f73019975839ce5122f';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const getMovieDetails = async id => {
  const responce = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return responce;
};

export const getMovieCredits = async id => {
  const responce = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return responce;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return data.results;
};
