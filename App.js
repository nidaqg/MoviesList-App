import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MoviesContextProvider } from './src/utils/context/MovieContext';
import { WatchListContextProvider } from './src/utils/context/WatchListContext';
import { Navigation } from './src/utils/navigation/Navigation';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useOswald, Oswald_700Bold} from '@expo-google-fonts/oswald';


export default function App() {

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_700Bold})

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }
  
  return (
    <>
      <WatchListContextProvider>
    <MoviesContextProvider>
    <Navigation/>
    <StatusBar style="auto" />
    </MoviesContextProvider>
    </WatchListContextProvider>

    </>
  );
}

