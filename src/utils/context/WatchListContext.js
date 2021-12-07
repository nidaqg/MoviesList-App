import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({children}) => {
const [watchList, setWatchList] = useState(null);

const addToWatchList = (movie) => {
  if(watchList !== null) {
    setWatchList([...watchList, movie]);
  } else {
    setWatchList([movie])
  }
  };

  //function for removing a restaurant from favourites
  const removeFromWatchList = (movie) => {
    //filter out movie by id
    if (watchList !== null) {
    const newWatchList = watchList.filter(
      (x) => x.id !== movie.id
    );
    setWatchList(newWatchList);
    }
  };

  useEffect(() => {
    watchList !== null ?
   storeWatchList(watchList) : null
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
    console.log("GET", value)
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