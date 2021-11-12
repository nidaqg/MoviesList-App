import React from "react";
import { MovieCard, MovieTitle, Rating, RatingsContainer, Synopsis } from "./styles";
import { Image, Text } from "react-native";
//imports to use star svg for rating
import star from '../../../assets/star';
import { SvgXml } from "react-native-svg";

export const MovieCardInfo = ({movie = {}}) => {
//deconstruct movie object
  const {
    title = "Movie Title",
    release_date = 2000,
    vote_average = 5,
    poster_path = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    id = 1,
  } = movie;

  //this will create an array with number of elements equal to the rating number
  //Math.floor to account for decimal places
  const ratingArray = Array.from(new Array(Math.floor(vote_average)));


  return (
    <>
      <MovieCard 
      key={id}
      elevation={7}>
        <MovieTitle>{title} { release_date ?
        ('('+`${release_date}`.substr(0,4)+')'): (
          null
        )}

        </MovieTitle>
        <Image 
        style={{height:400}}
        source={{ uri:"https://image.tmdb.org/t/p/w500" +`${poster_path}`}}
        resizeMode='contain' 
        />
        <RatingsContainer>
          <Text>Rating:</Text>
          <Rating>{ratingArray.map((_,i) => (
                <SvgXml key ={`star-${id}-${i}`} xml={star} width={30} height={30} />
              ))}
              </Rating>
              </RatingsContainer>
      </MovieCard>
    </>
  );
};
