import React from "react";
import { MoviesContainer } from "./styles";
import { ScrollView } from "react-native";
import { MovieCardInfo } from "./MovieCardInfo";

export const HomePage = () => {
  return (
    <>
      <MoviesContainer>
        <ScrollView>
          <MovieCardInfo />
          <MovieCardInfo />
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
