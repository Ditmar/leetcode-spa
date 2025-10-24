import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export default function createEmotionCache() {
  // Solo en el browser
  if (!isBrowser) {
    return createCache({
      key: 'mui-style-ssr',
      // Sin insertionPoint en servidor
      prepend: true,
    });
  }

  const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
    'meta[name="emotion-insertion-point"]'
  ) ?? undefined;

  return createCache({
    key: 'mui-style',
    insertionPoint: emotionInsertionPoint,
    prepend: true,
  });
}


