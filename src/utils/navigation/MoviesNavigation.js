import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../../features/homepage/HomePage';
import { MoviesDetail } from '../../features/homepage/MoviesDetail';

const Stack = createStackNavigator();

export const MoviesNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{headerShown:false }}
      >
        <Stack.Screen name="Main" component={HomePage} />
        <Stack.Screen name="MoviesDetail" component={MoviesDetail} />
      </Stack.Navigator>
    );
  };