import React, { useContext} from "react";
import { MoviesContainer} from "../../../components/styles";
import { ActivityIndicator, Colors } from "react-native-paper";


import {FadeInView} from "../../../utils/animation/FadeAnimation"
import { ScrollView, View } from "react-native";
import { MovieCardInfo } from "../../../components/MovieCardInfo";
import { MoviesContext } from "../../../utils/context/MovieContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Trending = ({navigation}) => {
  const { trending, isTrendingLoading} = useContext(MoviesContext);
  //hold query from movies searchbar

  return (
    <>
      <MoviesContainer>
      {isTrendingLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )}


        <ScrollView>
          {trending.length ? (
            trending.map((movie) => 
            <TouchableOpacity
            key={movie.id}
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
