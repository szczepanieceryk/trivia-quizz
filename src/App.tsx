import React, { createContext } from 'react';
import QuizForm from './layouts/TriviaQuizz/QuizForm';
import useLocalStorage from './hooks/useLocalStorage';
import { DifficultyContextType } from './types/types';

export const DifficultyContext = createContext<DifficultyContextType | undefined>(undefined);

const App = () => {
  const [difficulty, setDifficulty] = useLocalStorage('difficulty', 'easy');

  return (
    <div className="md:relative p-4 md:p-8 h-screen bg-gray-900 text-white">
      <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 max-w-3xl mx-auto w-[350px] md:w-3/4 md:h-[450px]">
        <h1 className="text-xl font-bold text-center">🏆 Trivia Quiz Game</h1>
        <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
          <QuizForm />
        </DifficultyContext.Provider>
      </div>
    </div>
  );
};

export default App;
