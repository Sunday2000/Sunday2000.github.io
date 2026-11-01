// Métadonnées SEO par langue, partagées entre le rendu client (App) et le pré-rendu (scripts/prerender.mjs).
export const SITE_URL = 'https://sunday2000.github.io';

export type Lang = 'en' | 'fr';

export const LANG_PATH: Record<Lang, string> = { en: '/', fr: '/fr/' };

export const META: Record<Lang, { title: string; description: string; ogDescription: string; locale: string; ogAlt: string }> = {
  en: {
    title: 'Sunday KODONON · Full Stack Developer Laravel, Vue.js, React',
    description: 'Sunday KODONON, Full Stack developer (Laravel, Vue.js, React) based in Benin, working remotely (UTC+1). Business apps, REST APIs, back-offices and SEO-optimized websites.',
    ogDescription: 'Business apps, REST APIs, back-offices and websites: from business needs to production.',
    locale: 'en_US',
    ogAlt: 'Sunday KODONON, Full Stack Developer: Laravel, Vue.js, React'
  },
  fr: {
    title: 'Sunday KODONON · Développeur Full Stack Laravel, Vue.js, React',
    description: 'Sunday KODONON, développeur Full Stack Laravel, Vue.js et React basé au Bénin (remote UTC+1). Applications métier, API REST, back-offices et sites vitrines optimisés SEO.',
    ogDescription: 'Applications métier, API REST, back-offices et sites vitrines : du besoin métier à la mise en production.',
    locale: 'fr_FR',
    ogAlt: 'Sunday KODONON, Développeur Full Stack : Laravel, Vue.js, React'
  }
};

export const langFromPath = (path: string): Lang => (/^\/fr(\/|$)/.test(path) ? 'fr' : 'en');
