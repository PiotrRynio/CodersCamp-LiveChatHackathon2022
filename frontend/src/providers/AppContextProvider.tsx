import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  playerName: string;
  setPlayerName: (newPlayerName: string) => void;
};

const appContextDefaultValue = {
  playerName: '',
  setPlayerName: (newPlayerName: string) => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValue);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerName, setPlayerName] = useState<string>(appContextDefaultValue.playerName);

  return (
    <AppContext.Provider
      value={{
        playerName,
        setPlayerName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
