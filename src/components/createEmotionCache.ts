import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createEmotionCache() {
  // Configuración diferente para servidor vs cliente
  if (!isBrowser) {
    return createCache({
      key: 'mui-style-ssr',
      prepend: true,
    });
  }

  // Solo en el cliente busca el insertion point
  const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');

  return createCache({
    key: 'mui-style',
    insertionPoint: emotionInsertionPoint ?? undefined,
    prepend: true,
  });
}
