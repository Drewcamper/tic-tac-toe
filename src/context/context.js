import React, { createContext, useState } from "react";

export const GameContext = createContext()


export const GameProvider = ({children}) => {

    const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState('');	
    
    return (
        <GameContext.Provider value={{reset, setReset, winner, setWinner}}>
            {children}
        </GameContext.Provider>
    )
  }