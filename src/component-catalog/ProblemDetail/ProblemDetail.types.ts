export interface ProblemExampleObject {
  input: string;
  output: string;
  explanation?: string;
}

export type ProblemExample = string | ProblemExampleObject;

export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  description: string;
  examples: ProblemExample[];
  constraints: string[];
  acceptance?: number;
  status?: 'solved' | 'attempted' | 'unsolved';
  starterCode?: string;
}

export interface ProblemDetailProps {
  problem?: Problem | null;
}

export type ProblemDifficulty = Problem['difficulty'];
