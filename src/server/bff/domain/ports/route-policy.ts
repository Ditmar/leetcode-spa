/** Decides which API paths the browser may reach through the proxy (allow-list). */
export interface RoutePolicy {
  isAllowed(method: string, path: string): boolean;
}
