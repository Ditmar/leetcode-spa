# SPA-033: Sanitize user content and add security headers

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Security |
| Priority | P1 |
| Size | M |
| Phase | 3 - Core product |
| Depends on | SPA-018 |

## Problem

Today the app does not render HTML from the server (we found no `dangerouslySetInnerHTML`). That will change: problem descriptions are Markdown and discussion posts come from users. Without care, one bad post can run JavaScript in every visitor's browser (XSS) and steal the session.

## Tasks

- [ ] Choose a Markdown renderer and a sanitizer (for example `react-markdown` + `rehype-sanitize`, or DOMPurify).
- [ ] Create one `SafeMarkdown` component. Do not use `dangerouslySetInnerHTML` anywhere else (add an ESLint rule).
- [ ] Add security headers in the Astro middleware: `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` or `frame-ancestors`, `Permissions-Policy`.
- [ ] Check cookie flags set by the BFF (`HttpOnly`, `Secure`, `SameSite`), following `X-002`.
- [ ] Check `?redirect=` handling to avoid open redirects (`SPA-016`).
- [ ] Decide if `/sysinfo` should be public (it shows the app version).
- [ ] Add tests with malicious input (`<script>`, `onerror=`, `javascript:` links).

## Acceptance criteria

- Malicious Markdown is shown as safe text and no script runs.
- Response headers pass a scan (for example securityheaders.com or the Mozilla Observatory).

## Update after decision X-002 (Astro keeps the tokens in cookies)

The cookies are set by the Astro routes in `SPA-036`. In this ticket, check the cookie flags and the CSRF `Origin` check with a security scan. In the CSP, use `connect-src 'self'` (the browser only calls our own host).
