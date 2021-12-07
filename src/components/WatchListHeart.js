import React, { useContext } from "react";
import { WatchListContext } from "../utils/context/WatchListContext";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const WatchListButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const WatchListHeart = ({ movie }) => {
  //destructure to get everything we need from the watchlist context
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);

  //to check if current movie is in watchlist
  const isAdded = (watchList !== null ? 
    watchList.find((r) => r.id === movie.id): null);

  return (
    <WatchListButton
      onPress={() => {
        !isAdded ? addToWatchList(movie) : removeFromWatchList(movie);
      }}
    >
      <AntDesign
        name={isAdded ? "heart" : "hearto"}
        size={30}
        color={isAdded ? "red" : "white"}
      />
    </WatchListButton>
  );
};
