import React, { createContext } from 'react';
import TriviaQuizz from './layouts/TriviaQuizz/TriviaQuizz';
import useLocalStorage from './hooks/useLocalStorage';

type DifficultyContextType = {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
};

export const DifficultyContext = createContext<DifficultyContextType | undefined>(undefined);

const App = () => {
  const [difficulty, setDifficulty] = useLocalStorage('difficulty', 'easy');

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🏆 Trivia Quiz Game</h1>
        <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
          <TriviaQuizz />
        </DifficultyContext.Provider>
      </div>
    </div>
  );
};

export default App;
