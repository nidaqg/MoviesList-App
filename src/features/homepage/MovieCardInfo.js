import React from "react";
import { MovieCard, MovieTitle, Rating, Synopsis } from "./styles";
import { View, Image } from "react-native";
//imports to use star svg for rating
import star from '../../../assets/star';
import { SvgXml } from "react-native-svg";

export const MovieCardInfo = ({movie = {}}) => {
//deconstruct movie object
  const {
    original_title = "Movie Title",
    release_date = 2000,
    overview = "Summary goes here, will probably be 2-3 lines so adding more words to display it",
    vote_average = 5,
    poster_path = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    id = 1,
  } = movie;

  //this will create an array with number of elements equal to the rating number
  //Math.floor to account for decimal places
  const ratingArray = Array.from(new Array(Math.floor(vote_average)));


  return (
    <>
      <MovieCard elevation={7}>
        <MovieTitle>{original_title} ({`${release_date}`.substr(0,4)})</MovieTitle>
        <Image 
        style={{height:400}}
        source={{ uri:"https://image.tmdb.org/t/p/w500" +`${poster_path}`}}
        resizeMode='contain' 
        />
          <Rating>{ratingArray.map((_,i) => (
                <SvgXml key ={`star-${id}-${i}`} xml={star} width={20} height={20} />
              ))}
              </Rating>
          <Synopsis>{overview}</Synopsis>

      </MovieCard>
    </>
  );
};
