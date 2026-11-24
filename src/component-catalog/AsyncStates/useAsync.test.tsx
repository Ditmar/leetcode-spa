import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useAsync } from './useAsync';

describe('useAsync', () => {
  it('starts in the initial state', () => {
    const { result } = renderHook(() => useAsync<string>());

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('stores data when the operation succeeds', async () => {
    const { result } = renderHook(() => useAsync<string>());

    await act(async () => {
      await result.current.execute(async () => 'Success');
    });

    expect(result.current.data).toBe('Success');
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('stores an error when the operation fails', async () => {
    const { result } = renderHook(() => useAsync<string>());

    await act(async () => {
      await result.current.execute(async () => {
        throw new Error('Request failed');
      });
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error?.message).toBe('Request failed');
    expect(result.current.loading).toBe(false);
  });

  it('resets the state', async () => {
    const { result } = renderHook(() => useAsync<string>());

    await act(async () => {
      await result.current.execute(async () => 'Success');
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });
});
