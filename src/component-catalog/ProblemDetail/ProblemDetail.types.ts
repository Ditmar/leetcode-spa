export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints: string[];
  acceptance: number;
  status?: 'solved' | 'attempted' | 'unsolved';
}

export interface ProblemDetailProps {
  problem: Problem;
}

export type ProblemDifficulty = Problem['difficulty'];
