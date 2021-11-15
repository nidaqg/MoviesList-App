import React, { useEffect, useContext } from "react";

import { GenreContainer } from "../styles";
import {FadeInView} from "../../../utils/animation/FadeAnimation";
import { MovieCardInfo } from "../../../components/MovieCardInfo";
import { ButtonContainer } from "../../../components/styles";
import { MoviesContext } from "../../../utils/context/MovieContext";

import { ScrollView, View } from "react-native";
import { ActivityIndicator, Colors, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

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
            <TouchableOpacity
            key={movie.id}
            onPress={() => {
                navigation.navigate("GenreMovieDetail", {movie:movie})
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
      </GenreContainer>
    </>
  );
};
