import React from "react";
import { MovieCard, MovieTitle, Rating, Synopsis } from "./styles";
import {Card } from "react-native-paper";
import { View, Image } from "react-native";

export const MovieCardInfo = ({movie = {}}) => {

  const {
    original_title = "Movie Title",
    release_date = 2000,
    overview = "Summary goes here, will probably be 2-3 lines so adding more words to display it",
    vote_average = 5,
    poster_path = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"

  } = movie;


  return (
    <>
      <MovieCard elevation={7}>
        <MovieTitle>{original_title} ({`${release_date}`.substr(0,4)})</MovieTitle>
        <Image 
        style={{height:400}}
        source={{ uri:"https://image.tmdb.org/t/p/w500" +`${poster_path}`}}
        resizeMode='contain' 
        />
          <Rating>{`Rating: ${vote_average}`}</Rating>
          <Synopsis>{overview}</Synopsis>

      </MovieCard>
    </>
  );
};
