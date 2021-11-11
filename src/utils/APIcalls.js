import axios from "axios";


export const getMovies = (query) => {
let baseURL = "https://api.themoviedb.org/3/search/movie?"
let APIkey = "api_key=d7de7ce6389671074d6332dc2edaec14"
let extras = "&language=en-US&page=1&include_adult=false"

    return (
    axios.get(baseURL + APIkey + "&query=" + query + extras)
    )
}