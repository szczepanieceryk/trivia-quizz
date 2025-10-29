import React from 'react';
import { useDifficulty } from '../../hooks/useDifficulty';
import { DifficultySelectProps } from '../../types/types';

const DifficultySelect: React.FC<DifficultySelectProps> = ({ isOpen, setIsOpen }) => {
  const { difficulty, setDifficulty } = useDifficulty();
  const difficultyLevels = ['easy', 'medium', 'hard'];

  return (
    <div className="py-10 px-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 rounded-lg w-[300px] mx-auto border-gray-200 bg-gray-900">
      <div className="relative">
        <div
          className="absolute -top-6 -right-2 w-8 h-8 bg-transparent text-white border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-300 hover:text-black transition duration-500 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          x
        </div>

        <label htmlFor="question-difficulty-id">
          Select question difficulty
          <select
            name="question-difficulty"
            id="question-difficulty-id"
            className="block p-2 rounded-md my-2 mx-auto max-w-[350px] cursor-pointer text-center bg-gray-700 text-white"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            {difficultyLevels?.map?.((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default DifficultySelect;
