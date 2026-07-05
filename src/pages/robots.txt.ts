import type { APIRoute } from 'astro';

const SITE_URL = process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  : 'https://leetcode-spa-production.up.railway.app';

const PRODUCTION_HOST = new URL(SITE_URL).host;

export const GET: APIRoute = ({ request }) => {
  const host = request.headers.get('host') ?? '';
  const isProduction = host === PRODUCTION_HOST;

  const content = isProduction
    ? [
        '# robots.txt — leetcode-spa',
        `# Production: ${SITE_URL}`,
        '',
        'User-agent: *',
        'Allow: /',
        '',
        'Disallow: /api/',
        'Disallow: /sysinfo',
        '',
      ].join('\n')
    : [
        '# robots.txt — leetcode-spa',
        '# Environment: non-production (staging / development)',
        '',
        'User-agent: *',
        'Disallow: /',
        '',
      ].join('\n');

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
