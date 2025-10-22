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
    <div className="mb-4 p-4 bg-gray-900 text-white rounded-lg shadow-sm">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl font-bold text-center">🏆 Trivia Quiz Game</h1>
        <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
          <TriviaQuizz />
        </DifficultyContext.Provider>
      </div>
    </div>
  );
};

export default App;
