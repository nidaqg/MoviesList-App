import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HomePage } from '../../features/homepage/HomePage';
import { SettingsPage } from '../../features/settings/Settings';
import { FavouritesPage } from '../../features/favourites/Favourites';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
      <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Movies') {
                iconName = 'fast-food-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'Favourites') {
                iconName = 'map-outline';
              } 
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#06304b",
            tabBarInactiveTintColor: '#BDBFC2',
          })}
          > 
      <Tab.Screen name="Movies" component={HomePage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      <Tab.Screen name="Favourites" component={FavouritesPage} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}