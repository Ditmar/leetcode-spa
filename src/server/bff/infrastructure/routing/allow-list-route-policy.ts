import type { AllowedRoute } from './api-allow-list';
import type { RoutePolicy } from '../../domain/ports/route-policy';

interface CompiledRoute {
  methods: ReadonlySet<string>;
  regex: RegExp;
}

/** One path segment: letters, digits and a few safe characters. No `/`, `%`, `..`. */
const SEGMENT = '[A-Za-z0-9_~-][A-Za-z0-9._~-]*';

function compile(route: AllowedRoute): CompiledRoute {
  const source = route.pattern
    .split('/')
    .map((part) => (part.startsWith(':') ? SEGMENT : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
    .join('/');
  return {
    methods: new Set(route.methods.map((m) => m.toUpperCase())),
    regex: new RegExp(`^${source}/?$`),
  };
}

/** Adapter: RoutePolicy backed by a static allow-list. */
export class AllowListRoutePolicy implements RoutePolicy {
  private readonly routes: CompiledRoute[];

  constructor(allowList: readonly AllowedRoute[]) {
    this.routes = allowList.map(compile);
  }

  isAllowed(method: string, path: string): boolean {
    // Reject tricks before matching: encoded characters, dot segments, double slashes.
    if (path.includes('%') || path.includes('//') || /(^|\/)\.\.?(\/|$)/.test(path)) return false;

    const verb = method.toUpperCase() === 'HEAD' ? 'GET' : method.toUpperCase();
    return this.routes.some((route) => route.methods.has(verb) && route.regex.test(path));
  }
}
