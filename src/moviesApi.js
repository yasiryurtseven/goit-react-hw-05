import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: 'application/json',
  },
});

// 1. Ana sayfa için trendler
export const getTrendingMovies = async () => {
  const response = await instance.get('/trending/movie/day?language=en-US');
  return response.data.results;
};

// 2. Arama sayfası için arama
export const searchMovies = async (query) => {
  const response = await instance.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
  return response.data.results;
};

// 3. Film detayları için
export const getMovieDetails = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}?language=en-US`);
  return response.data;
};

// 4. Oyuncu kadrosu için
export const getMovieCast = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/credits?language=en-US`);
  return response.data.cast;
};

// 5. İncelemeler için
export const getMovieReviews = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/reviews?language=en-US&page=1`);
  return response.data.results;
};