import { useCallback, useEffect, useState } from 'react';

import { ProblemList } from '../../pages/ProblemList/ProblemList';
import { problemsService } from '../../services/problems/problemsService';
import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

import type { Problem as ListProblem } from '../../pages/ProblemList/ProblemList.types';
import type { ApiError } from '../../services/api/apiClient.types';
import type { Problem as ServiceProblem } from '../../services/problems/problemsService.types';

export interface ProblemsPageProps {
  currentPath?: string;
}

function toListProblem(problem: ServiceProblem): ListProblem {
  return {
    id: problem.id,
    title: problem.title,
    difficulty: problem.difficulty,
    status: problem.status ?? 'unsolved',
  };
}

export default function ProblemsPage({ currentPath = '/problems' }: ProblemsPageProps) {
  const [problems, setProblems] = useState<ListProblem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [selectedProblemId, setSelectedProblemId] = useState<number | undefined>();

  const loadProblems = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await problemsService.getProblems();
      setProblems(response.data.map(toListProblem));
    } catch (cause) {
      const apiError: ApiError =
        cause && typeof cause === 'object' && 'message' in cause
          ? {
              message: String(cause.message),
              code: 'code' in cause ? String(cause.code) : 'UNKNOWN_ERROR',
              status: 'status' in cause && typeof cause.status === 'number' ? cause.status : 500,
            }
          : {
              message: 'An unexpected error occurred',
              code: 'UNKNOWN_ERROR',
              status: 500,
            };

      setError(apiError);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProblems();
  }, [loadProblems]);

  return (
    <ClientOnlyMuiProvider>
      <NavShell currentPath={currentPath}>
        <ProblemList
          problems={problems}
          selectedProblemId={selectedProblemId}
          onSelectProblem={setSelectedProblemId}
          loading={loading}
          error={error}
          onRetry={() => void loadProblems()}
        />
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
