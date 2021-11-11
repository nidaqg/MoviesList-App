import React from 'react';
import { ScrollView } from 'react-native';
import { MovieCardInfo } from './MovieCardInfo';
import { MoviesContainer } from './styles';

export const MoviesDetail = ({route}) => {

    const {movie} = route.params;

    return(
        <>
        <MoviesContainer>
            <ScrollView>
          <MovieCardInfo movie={movie}/>  
          </ScrollView>
          </MoviesContainer>
        </>
    )
}