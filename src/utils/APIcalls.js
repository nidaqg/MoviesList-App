import axios from "axios";
import {API_KEY} from '@env';


export const getMovies = (query) => {
let baseURL = "https://api.themoviedb.org/3/search/movie?api_key="
let APIkey = API_KEY
let extras = "&language=en-US&page=1&include_adult=false"

    return (
    axios.get(baseURL + APIkey + "&query=" + query + extras)
    )
}