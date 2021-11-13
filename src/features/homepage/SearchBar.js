import React, {useContext, useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchContainer } from '../../components/styles';
import { MoviesContext } from '../../utils/context/MovieContext';

export const SearchBar =() => {

    const {onSubmitMovie} = useContext(MoviesContext);

//hold query from movies searchbar
const [searchMovie, setSearchMovie] = useState('');

//function to handle text change in search bar
const onChangeSearch = query => {
    setSearchMovie(query)
  };

    return (
        <SearchContainer>
        <Searchbar
      placeholder="Search by movie name"
      onChangeText={onChangeSearch}
      value={searchMovie}
      onSubmitEditing={() => onSubmitMovie(searchMovie)}
    />
        </SearchContainer>
    )
}