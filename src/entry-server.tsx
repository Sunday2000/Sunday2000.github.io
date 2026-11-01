// Point d'entrée du pré-rendu (utilisé uniquement au build par scripts/prerender.mjs).
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import type { Lang } from './seo';

export { META, LANG_PATH, SITE_URL } from './seo';

export function render(lang: Lang, config: Record<string, unknown> = {}) {
  return renderToString(<App lang={lang} {...config} />);
}
