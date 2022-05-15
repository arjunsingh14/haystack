import { useState, useEffect, useContext } from "react";
import React from "react";
import { characters } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    
  const generateGame = (array) => {
    const copy = array.slice(0);
    const seed = [];
    while (seed.length <= 2) {
      const index = Math.floor(Math.random() * copy.length);
      if (seed.includes(copy[index]) === false) {
        seed.push(copy[index]);
      }
    }
    return seed;
  };

  const [gameSeed, setGame] = useState([]);
  useEffect(() => {
    setGame(generateGame(characters));
  }, []);
  return (
    <AppContext.Provider value={{ gameSeed }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
