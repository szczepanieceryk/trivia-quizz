export interface DifficultySelectProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export type DifficultyContextType = {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
};
