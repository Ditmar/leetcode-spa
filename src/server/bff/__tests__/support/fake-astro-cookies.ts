import type { AstroCookieSetOptions } from 'astro';

export interface CookieWrite {
  name: string;
  value: string;
  options: AstroCookieSetOptions;
  deleted: boolean;
}

/** Minimal stand-in for Astro `cookies` that records every write. */
export class FakeAstroCookies {
  readonly writes: CookieWrite[] = [];
  private readonly jar = new Map<string, string>();

  constructor(initial: Record<string, string> = {}) {
    Object.entries(initial).forEach(([k, v]) => this.jar.set(k, v));
  }

  get(name: string) {
    const value = this.jar.get(name);
    return value === undefined ? undefined : { value };
  }

  has(name: string) {
    return this.jar.has(name);
  }

  set(name: string, value: string, options: AstroCookieSetOptions = {}) {
    this.jar.set(name, value);
    this.writes.push({ name, value, options, deleted: false });
  }

  delete(name: string, options: AstroCookieSetOptions = {}) {
    this.jar.delete(name);
    this.writes.push({ name, value: '', options, deleted: true });
  }

  lastWrite(name: string): CookieWrite | undefined {
    return [...this.writes].reverse().find((w) => w.name === name);
  }
}
