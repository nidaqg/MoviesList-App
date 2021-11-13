import React, { useContext} from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { MoviesContext } from "../../../utils/context/MovieContext";
import { GenreContainer, GenreCard, GenreTitle} from "../styles";

export const GenrePage = () => {

const {genreList} =useContext(MoviesContext)
    
  return (
    <>
      <GenreContainer>
          <ScrollView>
              {
                  genreList.map(item => (
                      <TouchableOpacity
                      onPress={()=> console.log(item.name)}
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
