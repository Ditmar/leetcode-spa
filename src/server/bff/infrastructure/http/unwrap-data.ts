/**
 * ADR-003: API success bodies come inside `{ data }`. The API today still answers
 * without it, so both shapes are accepted during the transition.
 */
export function unwrapData(body: Record<string, unknown>): Record<string, unknown> {
  const { data } = body;
  return typeof data === 'object' && data !== null && !Array.isArray(data)
    ? (data as Record<string, unknown>)
    : body;
}
