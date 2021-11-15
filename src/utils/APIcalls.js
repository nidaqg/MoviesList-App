import axios from "axios";
import {API_KEY} from '@env';


export const getMovies = (query) => {
let baseURL = "https://api.themoviedb.org/3/search/movie?api_key="
let APIkey = API_KEY
let extras = "&language=en-US&page=1&include_adult=false"

    return (
    axios.get(baseURL + APIkey + "&query=" + query + extras)
    )
};

export const getGenreList = () => {
let baseURL = "https://api.themoviedb.org/3/genre/movie/list?api_key="
let APIkey = API_KEY

return (
    axios.get(baseURL + APIkey)
)};

export const getMoviesByGenre = (query) => {
   let baseURL = "https://api.themoviedb.org/3/discover/movie?api_key="
   let APIkey = API_KEY
   let extras = "&language=en-US&sort_by=popularity.desc&include_adult=false&page=1"

   return (
       axios.get(baseURL + APIkey + "&with_genres=" + query + extras)
   )
}; 

export const getTrendingMovies = () => {
    let baseURL = "https://api.themoviedb.org/3/trending/movie/week?api_key="
    let APIkey = API_KEY
 
    return (
        axios.get(baseURL + APIkey)
    )};
