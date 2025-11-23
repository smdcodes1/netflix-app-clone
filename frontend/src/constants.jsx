
export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh";

export const baseUrl= "https://api.themoviedb.org/3";
export const API_KEY= "827853710b90b2a8b928802d3c419458";
export const imageUrl= "https://image.tmdb.org/t/p/original";

export const originals= `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions= `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const favorites= `/movie/popular?language=en-US&page=1&api_key=${API_KEY}`;
export const topRated=`/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;
export const upcoming= `/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`;