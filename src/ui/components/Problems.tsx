import { useCallback, useEffect, useState } from 'react';

import { useAsync } from '../../component-catalog/AsyncStates/useAsync';
import { ProblemList } from '../../pages/ProblemList/ProblemList';
import { isApiError } from '../../services/api/apiClient';
import { problemsService } from '../../services/problems/problemsService';
import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import type { Problem as ListProblem } from '../../pages/ProblemList/ProblemList.types';
import type { Problem as ServiceProblem } from '../../services/problems/problemsService.types';

function toListProblem(problem: ServiceProblem): ListProblem {
  return {
    id: problem.id,
    title: problem.title,
    difficulty: problem.difficulty,
    status: problem.status ?? 'unsolved',
  };
}

export default function ProblemsPage() {
  const { data, loading, error, execute } = useAsync<ListProblem[]>();
  const [selectedProblemId, setSelectedProblemId] = useState<number | undefined>();

  const loadProblems = useCallback(
    () =>
      execute(async () => {
        const response = await problemsService.getProblems();
        return response.data.map(toListProblem);
      }),
    [execute]
  );

  useEffect(() => {
    void loadProblems();
  }, [loadProblems]);

  const apiError = error && isApiError(error) ? error : null;

  return (
    <ClientOnlyMuiProvider>
      <ProblemList
        problems={data ?? []}
        selectedProblemId={selectedProblemId}
        onSelectProblem={setSelectedProblemId}
        loading={loading}
        error={apiError}
        onRetry={() => void loadProblems()}
      />
    </ClientOnlyMuiProvider>
  );
}
