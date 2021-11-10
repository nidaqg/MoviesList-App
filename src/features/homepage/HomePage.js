import React, { useEffect, useState } from "react";
import { MoviesContainer } from "./styles";
import { ScrollView, Text } from "react-native";
import { MovieCardInfo } from "./MovieCardInfo";
import { getMovies } from "../../utils/APIcalls";

export const HomePage = () => {
  const[movieData, setMovieData] = useState({});

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
