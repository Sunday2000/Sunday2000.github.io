/// <reference types="vite/client" />

interface Window {
  SITE_CONFIG?: {
    heroImage?: boolean;
    cubes?: boolean;
    available?: boolean;
    accent?: string;
    defaultLang?: 'en' | 'fr';
  };
}
