import React, { useContext, useState } from "react";
import { MoviesContainer} from "../../../components/styles";
import styled from 'styled-components/native';

import {FadeInView} from "../../../utils/animation/FadeAnimation"
import { ScrollView, View, Text } from "react-native";
import { MovieCardInfo } from "../../../components/MovieCardInfo";
import { SearchBar } from "../SearchBar";
import { MoviesContext } from "../../../utils/context/MovieContext";
import { ActivityIndicator, Colors, Avatar } from "react-native-paper";

const SearchInfoCard = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Info = styled(Text)`
  padding-top:20px;
  font-size: 24px;
  font-family: Lato_400Regular;
  color: white;
`;


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
