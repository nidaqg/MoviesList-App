import React from "react";
import { MovieCard, MovieTitle, Rating, Synopsis } from "./styles";
import {Card } from "react-native-paper";

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
      <MovieCard elevation={5}>
        <MovieTitle>{original_title} ({`${release_date}`.substr(0,4)})</MovieTitle>
        <Card.Cover source={{ uri:"https://image.tmdb.org/t/p/w500" +`${poster_path}`}} />
          <Rating>{vote_average}</Rating>
          <Synopsis>{overview}</Synopsis>

      </MovieCard>
    </>
  );
};
