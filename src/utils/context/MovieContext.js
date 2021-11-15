import React, { createContext, useState, useEffect} from "react";
import { getMovies, getGenreList, getMoviesByGenre, getTrendingMovies } from "../APIcalls";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({children}) => {
//creating state for movie data
const [movieData, setMovieData] = useState({});
const [isLoading, setIsLoading] = useState(false);

//creating state for movie data from genre search
const [genreMovies, setGenreMovies] = useState({});
const [genreList, setGenreList] = useState({});
const [isGenreLoading, setIsGenreLoading] = useState(false)

//creating state for movie data from trending
const [trending, setTrending] = useState({})

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

//function to get genre list
const getGenreListData = () => {
getGenreList()
  .then((response) => {
    if (response) {
      setGenreList(response.data.genres);
    } else {
      console.log("error");
    }
  })
  .catch((e) => {
      console.log(e)
     });
};

useEffect(()=> {
getGenreListData()
getTrendingData()
},[])

//function to get movies by genre from API
const getGenreMovies = (query) => {
  setIsGenreLoading(true)
  setGenreMovies({})
  setTimeout(()=> {
getMoviesByGenre(query)
  .then((response) => {
    if (response) {
      setGenreMovies(response.data.results);
      setIsGenreLoading(false)
    } else {
        setIsGenreLoading(false)
      console.log("error");
    }
  })
  .catch((e) => {
      console.log(e)
      setIsGenreLoading(false);
     });
}, 1000);
}

//retreive trending movies
const getTrendingData = () => {
  getTrendingMovies()
    .then((response) => {
      if (response) {
        setTrending(response.data.results);
      } else {
        console.log("error");
      }
    })
    .catch((e) => {
        console.log(e)
       });
  };
  





    return (
        <MoviesContext.Provider
        value={{
        onSubmitMovie,
        movieData,
        isLoading,
        genreList,
        getGenreMovies,
        genreMovies,
        isGenreLoading,
        trending
        }}
        >{children}</MoviesContext.Provider>
    )
}