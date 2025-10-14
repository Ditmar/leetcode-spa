import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

function createEmotionCache() {
  // Solo en el browser
  if (!isBrowser) {
    return createCache({
      key: 'mui-style-ssr',
      // Sin insertionPoint en servidor
      prepend: true,
    });
  }

  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]'
  ) as HTMLElement;
  const insertionPoint = emotionInsertionPoint ?? undefined;

  return createCache({
    key: 'mui-style',
    insertionPoint,
    prepend: true,
  });
}

export default createEmotionCache;
