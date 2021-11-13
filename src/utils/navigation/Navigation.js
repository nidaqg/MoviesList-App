import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { MoviesNavigator } from './MoviesNavigation';
import { SettingsPage } from '../../features/settings/Settings';
import { WatchListPage } from '../../features/watchlist/WatchListPage';
import { GenrePage } from '../../features/genre/screens/GenrePage';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
      <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'WatchList') {
                iconName = 'list';
              } else if ( route.name === 'Genres') {
                iconName = 'film';
              }
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#06304b",
            tabBarInactiveTintColor: '#ABACAD',
          })}
          > 
      <Tab.Screen name="Search" component={MoviesNavigator} />
      <Tab.Screen name="Genres" component={GenrePage}/>
      <Tab.Screen name="WatchList" component={WatchListPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}