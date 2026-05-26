import { RequestConfig } from './apiClient.types';
import { buildUrl } from './apiClient.utils';
const isSRR = typeof window === 'undefined';
const API_BASE_URL = isSRR ? process.env.API_BASE_URL || 'http://localhost:3000/api' : '/api';

const request = async <T>(
  path: string,
  body?: Record<string, unknown>,
  method: string = 'GET',
  config?: RequestConfig
): Promise<T> => {
  const url = buildUrl(API_BASE_URL, path, config?.queryParams);
  const response = await fetch(url, {
    method: method,
    headers: config?.headers,
    body: body ? JSON.stringify(body) : undefined,
    signal: config?.signal,
    credentials: config?.credentials,
  });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json() as Promise<T>;
};
export { request };
