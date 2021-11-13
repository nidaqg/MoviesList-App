import React from "react";
import { MovieCard, MovieTitle, Rating, RatingsContainer} from "./styles";
//imports to use star svg for rating
import star from '../../assets/star';
import { SvgXml } from "react-native-svg";
import { Caption, Card } from "react-native-paper";

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
        <Card.Cover 
        style={{height:500}}
        source={ poster_path !== null ? (
         {uri:"https://image.tmdb.org/t/p/w500" +`${poster_path}`}
        ):(
        {uri:"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"}
        )}
        resizeMode='cover' 
        />
        <RatingsContainer>
          <Caption>Rating:</Caption>
          <Rating>{ratingArray.map((_,i) => (
                <SvgXml key ={`star-${id}-${i}`} xml={star} width={30} height={30} />
              ))}
              </Rating>
              </RatingsContainer>
      </MovieCard>
    </>
  );
};
