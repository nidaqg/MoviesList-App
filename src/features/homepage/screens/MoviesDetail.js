import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { MovieDetailCard } from "../MovieDetailCard";
import { MoviesContainer } from "../styles";
import { ButtonContainer } from "../styles";

export const MoviesDetail = ({ route, navigation }) => {
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
