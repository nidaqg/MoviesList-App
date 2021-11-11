import React, { createContext, useState} from "react";
import { getMovies } from "../APIcalls";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({children}) => {
//creating state for each thing we will need
const [movieData, setMovieData] = useState({});
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

  //function to handle submit of search term
  const onSubmitMovie = (query) => {
    if (query){
     getMoviesData(query)
    }
 }

 //function to retrieve movies from API
 const getMoviesData = (query) => {
     setIsLoading(true)
     setMovieData({})
     setTimeout(()=> {
   getMovies(query)
     .then((response) => {
       if (response) {
         console.log(response.data.results);
         setMovieData(response.data.results);
         setIsLoading(false)
       } else {
           setIsLoading(false)
         console.log("error");
       }
     })
     .catch((e) => {
         console.log(e)
         setIsLoading(false);
        });
}, 1000);
};


    return (
        <MoviesContext.Provider
        value={{
        onSubmitMovie,
        movieData,
        isLoading,
        }}
        >{children}</MoviesContext.Provider>
    )
}