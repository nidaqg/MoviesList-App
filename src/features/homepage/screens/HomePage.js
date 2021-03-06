import React, { useContext, useState } from "react";
import { MoviesContainer} from "../../../components/styles";

import {FadeInView} from "../../../utils/animation/FadeAnimation"
import { ScrollView, View } from "react-native";
import { MovieCardInfo } from "../../../components/MovieCardInfo";
import { SearchBar } from "../SearchBar";
import { MoviesContext } from "../../../utils/context/MovieContext";
import { ActivityIndicator, Colors, Avatar } from "react-native-paper";
import { SearchInfoCard, Info } from "../styles";

export const HomePage = ({navigation}) => {
  const { isLoading, movieData } = useContext(MoviesContext);

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

        <SearchBar />
        <ScrollView>
          {movieData.length ? (
            movieData.map((movie) => 
              <FadeInView
              key={movie.id}
              >
            <MovieCardInfo 
            clicked={navigation.navigate}
            goToPage={"MoviesDetail"}
            key={movie.id}
            movie={movie} />
            </FadeInView>
            )
          ) : (
            <>
              <SearchInfoCard>
                <Avatar.Icon 
                icon="arrow-up"
                backgroundColor="#06304b"
                />
              <Info>Search for movies by name</Info>
            </SearchInfoCard>
            </>
          )}
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
