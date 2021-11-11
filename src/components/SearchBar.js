import React from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchContainer } from '../features/homepage/styles';

export const SearchBar =({onChangeSearch, searchQuery}) => {
    return (
        <SearchContainer>
        <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        </SearchContainer>
    )
}