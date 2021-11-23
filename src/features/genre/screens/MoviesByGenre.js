import React, { useEffect, useContext } from "react";

import { GenreContainer } from "../styles";
import {FadeInView} from "../../../utils/animation/FadeAnimation";
import { ButtonContainer } from "../../../components/styles";
import { MoviesContext } from "../../../utils/context/MovieContext";
import {MovieCardInfo} from "../../../components/MovieCardInfo"

import { ScrollView, View } from "react-native";
import { ActivityIndicator, Colors, Button } from "react-native-paper";

export const MoviesByGenre = ({navigation, route}) => {

const {isGenreLoading, getGenreMovies, genreMovies} = useContext(MoviesContext);
const {id} = route.params;

//function to call to activate API
const populatePage = (id) => {
    getGenreMovies(id);

};

useEffect(() => {
populatePage(id)
},[])


  return (
    <>
      <GenreContainer>
        {isGenreLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )}

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
          {genreMovies.length ? (
            genreMovies.map((movie) => 
              <FadeInView
              key={movie.id}
              >
            <MovieCardInfo
            clicked={navigation.navigate}
            goToPage={"GenreMovieDetail"}
            key={movie.id}
             movie={movie} />
            </FadeInView>
            )
          ) : (
            null
          )}
        </ScrollView>
      </GenreContainer>
    </>
  );
};
