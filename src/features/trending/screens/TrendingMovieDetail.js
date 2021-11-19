import React, {useContext, useEffect} from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { MovieDetailCard } from "../../../components/MovieDetailCard";
import { MoviesContainer } from "../../../components/styles";
import { ButtonContainer } from "../../../components/styles";
import { MoviesContext } from "../../../utils/context/MovieContext";

export const TrendingMovieDetail = ({ route, navigation }) => {
  const {getCredits, cast} = useContext(MoviesContext);
  const { movie } = route.params;

  useEffect(() => {
getCredits(movie.id);
  }, []);

 
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
          <MovieDetailCard 
          movie={movie} 
          cast={cast}
          />
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
