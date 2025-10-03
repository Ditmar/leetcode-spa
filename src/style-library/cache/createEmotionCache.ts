import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

function createEmotionCache() {
    let insertionPoint;

    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]') as HTMLElement;
        insertionPoint = emotionInsertionPoint ?? undefined;
    }

    return createCache({
        key: 'mui-style',
        insertionPoint,
        prepend: true
    });
}

export default createEmotionCache;