import React, { useContext} from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { MoviesContext } from "../../../utils/context/MovieContext";
import { GenreContainer, GenreCard, GenreTitle} from "../styles";

export const GenrePage = ({navigation}) => {

const {genreList} =useContext(MoviesContext)
    
  return (
    <>
      <GenreContainer>
          <ScrollView>
              {
                  genreList.map(item => (
                      <TouchableOpacity
                      onPress={()=> navigation.navigate("MoviesByGenre", {id:item.id})}
                      >
                      <GenreCard>
                          <GenreTitle
                          key={item.id}
                          >{item.name}</GenreTitle>
                          </GenreCard>
                          </TouchableOpacity>
                  ))
              }
            </ScrollView>
      </GenreContainer>
    </>
  );
};
