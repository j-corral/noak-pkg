import React from 'react';

import { DocumentInitialProps } from 'next/document';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

export const emotionCache = createCache({
  key: 'css',
});

export const { extractCritical } = createEmotionServer(emotionCache);

export interface EmotionStyleProps {
  initialProps: DocumentInitialProps;
}

export function EmotionStyle({ initialProps }: EmotionStyleProps) {
  const styles = extractCritical(initialProps.html);

  return [
    initialProps.styles,
    <style
      key="emotion-css"
      dangerouslySetInnerHTML={{ __html: styles.css }}
      data-emotion-css={styles.ids.join(' ')}
    />,
  ];
}
