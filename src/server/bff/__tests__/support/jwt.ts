/** Builds an unsigned JWT-looking string with the given `exp` (seconds). Test only. */
export function fakeJwt(expSeconds: number, sub = 'user-1'): string {
  const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url');
  return `${encode({ alg: 'HS256', typ: 'JWT' })}.${encode({ id: sub, exp: expSeconds })}.signature`;
}
