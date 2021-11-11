import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomePage } from './src/features/homepage/HomePage';
import { MoviesContextProvider } from './src/utils/context/MovieContext';

export default function App() {
  return (
    <>
    <MoviesContextProvider>
    <HomePage/>
    <StatusBar style="auto" />
    </MoviesContextProvider>
    </>
  );
}

