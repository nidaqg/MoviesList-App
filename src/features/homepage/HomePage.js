import React, { useEffect, useState } from "react";
import { MoviesContainer } from "./styles";
import { ScrollView, Text } from "react-native";
import { MovieCardInfo } from "./MovieCardInfo";
import { getMovies } from "../../utils/APIcalls";
import { SearchBar } from "../../components/SearchBar";

export const HomePage = () => {
  //create state to hold movie data from API call
  const[movieData, setMovieData] = useState({});
//search by  movie
  const [searchMovie, setSearchMovie] = React.useState('');

  const onChangeSearch = query => {
    setSearchMovie(query)
    console.log(searchMovie)
  };

  //function to retrieve movies from API
  const moviesData = () => {
    getMovies("star wars")
      .then((response) => {
        if (response) {
          console.log(response.data.results);
          setMovieData(response.data.results)
        } else {
          console.log("error");
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
  moviesData()
  }, [])

  return (
    <>
      <MoviesContainer>
        <SearchBar
        onChangeSearch={onChangeSearch}
        value={searchMovie}
        />
        <ScrollView>
          {
            movieData.length ? (
              movieData.map(movie => (
            <MovieCardInfo
          movie={movie}
          />
              ))
            ) : (
<Text>No movies found!</Text>
            )
          }
          
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
