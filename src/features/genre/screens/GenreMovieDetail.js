import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { MovieDetailCard } from "../../../components/MovieDetailCard";
import { MoviesContainer } from "../../../components/styles";
import { ButtonContainer } from "../../../components/styles";

export const GenreMovieDetail = ({ route, navigation }) => {
  const { movie } = route.params;

  return (
    <>
      <MoviesContainer>
          <ButtonContainer>
        <Button
          icon="arrow-left"
          color="white"
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
        </ButtonContainer>
        <ScrollView>
          <MovieDetailCard movie={movie} />
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
