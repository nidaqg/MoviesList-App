import React, { useEffect, useState } from "react";

import { GenreContainer } from "../styles";
import {FadeInView} from "../../../utils/animation/FadeAnimation";
import { MovieCardInfo } from "../../../components/MovieCardInfo";
import { getMoviesByGenre } from "../../../utils/APIcalls";
import { ButtonContainer } from "../../../components/styles";

import { ScrollView, View } from "react-native";
import { ActivityIndicator, Colors, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const MoviesByGenre = ({navigation, route}) => {
const [isLoading, setIsLoading] = useState(false);
const [genreMovies, setGenreMovies] = useState({});

const {id} = route.params;

//function to get movies by genre from API
const getGenreMovies = (query) => {
    setIsLoading(true)
    setGenreMovies({})
    setTimeout(()=> {
  getMoviesByGenre(query)
    .then((response) => {
      if (response) {
        console.log(response.data.results);
        setGenreMovies(response.data.results);
        setIsLoading(false)
      } else {
          setIsLoading(false)
        console.log("error");
      }
    })
    .catch((e) => {
        console.log(e)
        setIsLoading(false);
       });
}, 1000);
}

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
