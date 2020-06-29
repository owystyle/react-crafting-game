import React, { useContext, createContext, useReducer } from "react";
import { reducer, initialState } from ".";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

function useGame() {
  return useContext(GameContext);
}

export default useGame;
