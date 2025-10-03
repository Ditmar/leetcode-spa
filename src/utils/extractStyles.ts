import { renderToString } from 'react-dom/server';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../style-library/cache/createEmotionCache';
import type { ReactElement } from 'react';

interface ExtractedStyles {
    html: string;
    css: string;
    ids: string[];
}

export function extractCriticalStyles(element: ReactElement): ExtractedStyles {
    const cache = createEmotionCache();
    const { extractCritical } = createEmotionServer(cache);

    const { html, css, ids } = extractCritical(renderToString(element));

    return { html, css, ids };
}

export function createStyleTag(css: string): string {
    return `<style data-emotion="mui-style">${css}</style>`;
}