export type ProblemDifficulty = 'Easy' | 'Medium' | 'Hard';

export type ProblemStatus = 'solved' | 'attempted' | 'unsolved';

export interface Problem {
  id: number;
  title: string;
  difficulty: ProblemDifficulty;
  tags: string[];
  status?: ProblemStatus;
}

export interface ProblemDetail extends Problem {
  description: string;
  examples: string[];
  constraints: string[];
  starterCode?: string;
}

export interface ProblemFilters {
  search?: string;
  difficulty?: ProblemDifficulty;
  status?: ProblemStatus;
  tag?: string;
  page?: number;
  pageSize?: number;
}

export interface ProblemListResponse {
  data: Problem[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface ProblemStats {
  total: number;
  solved: number;
  attempted: number;
}
