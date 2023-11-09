import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1743fd666a2c3f73019975839ce5122f';

// https://api.themoviedb.org/3/trending/all/day?language=en-US

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?language=en-US?api_key=${API_KEY}`
  );
  return data;
};
