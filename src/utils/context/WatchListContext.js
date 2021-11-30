import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({children}) => {
const [watchList, setWatchList] = useState([]);

const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  //function for removing a restaurant from favourites
  const removeFromWatchList = (movie) => {
    //filter out restuarants that have the same place id to avpoid duplication
    const newWatchList = watchList.filter(
      (x) => x.id !== movie.id
    );
    setWatchList(newWatchList);
  };

  useEffect(() => {
   storeWatchList(watchList)
  },[watchList])

  useEffect (() => {
  getWatchList()
  }, [])
  
  //store to async storage
  const storeWatchList = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@watchlist', jsonValue)
    } catch (e) {
     console.log(e)
    }
  }

  //retrieve from async storage
const getWatchList = async () => {
  try {
    const value = await AsyncStorage.getItem('@watchlist')
    if(value !== null) {
      setWatchList(JSON.parse(value))
    }
  } catch(e) {
    console.log(e)
  }
}


    return (
        <WatchListContext.Provider
        value={{
            watchList,
            addToWatchList,
            removeFromWatchList
        }}
        >
            {children}
        </WatchListContext.Provider>
    )
}