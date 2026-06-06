export type ProblemDifficulty = 'Easy' | 'Medium' | 'Hard';
export type ProblemStatus = 'solved' | 'attempted' | 'unsolved';

export interface Problem {
  id: number;
  idNumber: number;
  title: string;
  difficulty: ProblemDifficulty;
  acceptanceRate: number;
  status: ProblemStatus;
}

export interface ProblemListProps {
  problems: Problem[];
  selectedProblemId?: number;
  onSelectProblem: (id: number) => void;
}
