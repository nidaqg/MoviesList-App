import React, { useContext, useState } from "react";
import { MoviesContainer, Synopsis } from "./styles";

import {FadeInView} from "./../../utils/animation/FadeAnimation"
import { ScrollView, View } from "react-native";
import { MovieCardInfo } from "./MovieCardInfo";
import { SearchBar } from "./SearchBar";
import { ErrorCard } from "./styles";
import { MoviesContext } from "../../utils/context/MovieContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const HomePage = ({navigation}) => {
  const { isLoading, movieData } = useContext(MoviesContext);
  //hold query from movies searchbar
  const [searchMovie, setSearchMovie] = useState("");

  return (
    <>
      <MoviesContainer>
        {isLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )}

        <SearchBar value={searchMovie} />
        <ScrollView>
          {movieData.length ? (
            movieData.map((movie) => 
            <TouchableOpacity
            onPress={() => {
              navigation.navigate("MoviesDetail")
            }}
            >
            <MovieCardInfo movie={movie} />
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
