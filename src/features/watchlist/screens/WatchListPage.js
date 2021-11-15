import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { MoviesContainer } from "../../../components/styles";
import { WatchListContext } from "../../../utils/context/WatchListContext";
import { MovieDetailCard } from "../../../components/MovieDetailCard";
import { ScrollView, View, Text } from "react-native";

const NoInfoCard = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Info = styled(Text)`
  font-size: 24px;
  font-family: Lato_400Regular;
  color: white;
`;

export const WatchListPage = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <>
      <MoviesContainer>
        <ScrollView>
          {watchList.length ? (
            watchList.map((movie) => 
            <View style={{marginTop:15}}>
            <MovieDetailCard movie={movie} />
            </View>)
          ) : (
            <NoInfoCard
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Info>No Movies in Watch List!</Info>
            </NoInfoCard>
          )}
        </ScrollView>
      </MoviesContainer>
    </>
  );
};