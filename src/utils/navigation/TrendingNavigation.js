import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Trending } from '../../features/trending/screens/Trending';
import {TrendingMovieDetail} from '../../features/trending/screens/TrendingMovieDetail';

const Stack = createStackNavigator();

export const TrendingNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS, headerShown:false }}
      >
        <Stack.Screen name="Main" component={Trending} />
        <Stack.Screen name="TrendingMovieDetail" component={TrendingMovieDetail} />
      </Stack.Navigator>
    );
  };