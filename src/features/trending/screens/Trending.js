import React, { useContext} from "react";
import { MoviesContainer} from "../../../components/styles";

import {FadeInView} from "../../../utils/animation/FadeAnimation"
import { ScrollView } from "react-native";
import { MovieCardInfo } from "../../../components/MovieCardInfo";
import { MoviesContext } from "../../../utils/context/MovieContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Trending = ({navigation}) => {
  const { trending} = useContext(MoviesContext);
  //hold query from movies searchbar

  return (
    <>
      <MoviesContainer>

        <ScrollView>
          {trending.length ? (
            trending.map((movie) => 
            <TouchableOpacity
            onPress={() => {
              navigation.navigate("TrendingMovieDetail", {movie: movie,})
            }}
            >
              <FadeInView>
            <MovieCardInfo 
            key={movie.id}
            movie={movie} />
            </FadeInView>
            </TouchableOpacity>
            )
          ) : (
            null
          )}
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
