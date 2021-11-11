import React from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchContainer } from '../features/homepage/styles';

export const SearchBar =({onChangeSearch, searchQuery, onSubmit}) => {
    return (
        <SearchContainer>
        <Searchbar
      placeholder="Search by movie name"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={onSubmit}
    />
        </SearchContainer>
    )
}