import React, {useContext } from "react";
import { MoviesContainer } from "../../../components/styles";
import { WatchListContext } from "../../../utils/context/WatchListContext";
import { MovieDetailCard } from "../../../components/MovieDetailCard";
import { ScrollView, View } from "react-native";
import { Info,NoInfoCard } from "../styles";


export const WatchListPage = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <>
      <MoviesContainer>
        <ScrollView>
          {watchList !== null ? (
            watchList.map((movie) => 
            <View 
            key={movie.id}
            style={{marginTop:15}}>
            <MovieDetailCard movie={movie} />
            </View>)
          ) : (
            <NoInfoCard>
              <Info>No Movies in Watch List!</Info>
            </NoInfoCard>
          )}
        </ScrollView>
      </MoviesContainer>
    </>
  );
};
