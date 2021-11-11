import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomePage } from './src/features/homepage/HomePage';
import { MoviesContextProvider } from './src/utils/context/MovieContext';
import { Navigation } from './src/utils/navigation/Navigation';

export default function App() {
  return (
    <>
    <MoviesContextProvider>
    <Navigation/>
    <StatusBar style="auto" />
    </MoviesContextProvider>
    </>
  );
}

