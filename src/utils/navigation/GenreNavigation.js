import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { GenrePage } from '../../features/genre/screens/GenrePage';
import { MoviesByGenre } from '../../features/genre/screens/MoviesByGenre';
import { GenreMovieDetail } from '../../features/genre/screens/GenreMovieDetail';

const Stack = createStackNavigator();

export const GenreNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS, headerShown:false }}
      >
        <Stack.Screen name="Main" component={GenrePage} />
        <Stack.Screen name="MoviesByGenre" component={MoviesByGenre} />
        <Stack.Screen name="GenreMovieDetail" component={GenreMovieDetail}/>
      </Stack.Navigator>
    );
  };