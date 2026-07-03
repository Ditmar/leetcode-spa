import type {
  Problem,
  ProblemFilters,
  ProblemListResponse,
} from '../../../services/problems/problemsService.types';

export interface ProblemsPageProps {
  initialProblems: Problem[];
  initialMeta: ProblemListResponse['meta'];
  initialFilters: ProblemFilters;
  onSelectProblem?: (id: number) => void;
}
