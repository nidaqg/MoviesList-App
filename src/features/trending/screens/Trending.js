import React, { useContext} from "react";
import { MoviesContainer} from "../../../components/styles";
import { ActivityIndicator, Colors } from "react-native-paper";

import {TrendingMovieCardInfo} from "../../../components/TrendingMovieCardInfo"
import {FadeInView} from "../../../utils/animation/FadeAnimation"
import { ScrollView, View } from "react-native";
import { MoviesContext } from "../../../utils/context/MovieContext";

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
              <FadeInView
              key={movie.id}>
            <TrendingMovieCardInfo 
            clicked={navigation.navigate}
            key={movie.id}
            movie={movie} />
            </FadeInView>
            )
          ) : (
            null
          )}
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
