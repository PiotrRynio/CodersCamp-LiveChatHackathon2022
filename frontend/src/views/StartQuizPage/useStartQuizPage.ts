import { useState } from 'react';
import { useAppContext } from 'providers/AppContextProvider';

export const useStartQuizPage = () => {
  const { playerName, setPlayerName } = useAppContext();
  const [name] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleWarning = (value: boolean) => {
    setShowWarning(value);
  };

  const handleStartGame = () => {
    if (playerName.length < 3) {
      return handleWarning(!showWarning);
    }
    setPlayerName(name);
  };

  return { playerName, setPlayerName, showWarning, handleWarning, handleStartGame };
};
