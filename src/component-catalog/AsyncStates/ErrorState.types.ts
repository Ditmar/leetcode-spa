import type { ApiError } from '../../services/api/apiClient.types';

export interface ErrorStateProps {
  /** Error returned by the API. */
  error: ApiError;
  /** Function executed when the user clicks retry. */
  onRetry: () => void;
  /** Optional request identifier for troubleshooting. */
  requestId?: string;
}
