import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

function createEmotionCache() {
  // Si estamos en servidor (SSR)
  if (!isBrowser) {
    return createCache({
      key: 'mui-style-ssr', // caché especial para SSR
      prepend: true,        // inserta al inicio
    });
  }

  // Solo en cliente: buscamos el insertion point definido en <meta>
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]'
  ) as HTMLElement | null;

  return createCache({
    key: 'mui-style',
    insertionPoint: emotionInsertionPoint ?? undefined,
    prepend: true,
  });
}

export default createEmotionCache;
