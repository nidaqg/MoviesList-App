import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomePage } from '../../features/homepage/screens/HomePage';
import { MoviesDetail } from '../../features/homepage/screens/MoviesDetail';

const Stack = createStackNavigator();

export const MoviesNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS, headerShown:false }}
      >
        <Stack.Screen name="Main" component={HomePage} />
        <Stack.Screen name="MoviesDetail" component={MoviesDetail} />
      </Stack.Navigator>
    );
  };