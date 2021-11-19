import React from "react";
import { DetailCard ,MovieTitleDetail, Rating, Synopsis, Cast } from "./styles";
import { Card } from "react-native-paper";
//imports to use star svg for rating
import star from '../../assets/star';
import { SvgXml } from "react-native-svg";
import { WatchListHeart } from "./WatchListHeart";
import { View } from "react-native";

export const MovieDetailCard = ({movie = {}, cast}) => {
//deconstruct movie object
  const {
    title = "Movie Title",
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
      <DetailCard 
      key={id}
      elevation={7}>
        <View>
          <WatchListHeart movie={movie}/>
        <Card.Cover 
        style={{height:500}}
        source={ poster_path !== null ? (
          {uri:"https://image.tmdb.org/t/p/w500" +`${poster_path}`}
         ):(
         {uri:"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"}
         )} 
        resizeMode='cover' 
        />
        </View>
        <MovieTitleDetail>{title} { release_date ?
        ('('+`${release_date}`.substr(0,4)+')'): (
          null
        )}
        </MovieTitleDetail>

          <Rating>{ratingArray.map((_,i) => (
                <SvgXml key ={`star-${id}-${i}`} xml={star} width={20} height={20} />
              ))}
              </Rating>
          <Synopsis>{overview}</Synopsis>
          {
            cast ? (
              <>
          <Cast>Starring:</Cast>
          <Cast>{cast.join(", ")}</Cast>
          </>
            ) : (
              null
            )
          }
          

      </DetailCard>
    </>
  );
};
