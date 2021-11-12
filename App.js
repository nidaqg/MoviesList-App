import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MoviesContextProvider } from './src/utils/context/MovieContext';
import { Navigation } from './src/utils/navigation/Navigation';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


export default function App() {

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded) {
    return null;
  }
  
  return (
    <>
    <MoviesContextProvider>
    <Navigation/>
    <StatusBar style="auto" />
    </MoviesContextProvider>
    </>
  );
}

