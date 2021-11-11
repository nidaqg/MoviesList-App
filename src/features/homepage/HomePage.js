import React, { useContext, useState } from "react";
import { MoviesContainer, Synopsis } from "./styles";
import { ScrollView, View } from "react-native";
import { MovieCardInfo } from "./MovieCardInfo";
import { SearchBar } from "./SearchBar";
import { ErrorCard } from "./styles";
import { MoviesContext } from "../../utils/context/MovieContext";
import { ActivityIndicator, Colors } from "react-native-paper";

export const HomePage = () => {
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
            movieData.map((movie) => <MovieCardInfo movie={movie} />)
          ) : (
            null
          )}
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
