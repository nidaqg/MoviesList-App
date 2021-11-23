import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { MoviesContext } from "../../../utils/context/MovieContext";
import { GenreContainer, GenreCard, GenreTitle, CardCover, GenreCardContainer } from "../styles";
import {Card} from "react-native-paper";

export const GenrePage = ({ navigation }) => {
  const { genreList } = useContext(MoviesContext);

  return (
    <>
      <GenreContainer>
        <ScrollView>
          {genreList.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("MoviesByGenre", { id: item.id })
              }
            >
              <GenreCard 
              key={item.id}
              >
                <GenreTitle>{item.name}</GenreTitle>
              </GenreCard>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </GenreContainer>
    </>
  );
};
