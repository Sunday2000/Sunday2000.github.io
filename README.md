# Portfolio · Sunday KODONON

React + TypeScript + Vite.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/ (pré-rendu HTML de / et /fr/)
npm run preview  # sert dist/ en local
```

## Structure

- `index.html` : point d'entrée Vite (balises SEO, Open Graph, hreflang, JSON-LD)
- `src/seo.ts` : titres et descriptions par langue (partagés par l'app et le pré-rendu)
- `src/entry-server.tsx` + `scripts/prerender.mjs` : pré-rendu au build de `dist/index.html` (anglais) et `dist/fr/index.html` (français)
- `src/App.tsx` : toute l'application (données, logique, rendu)
- `src/main.tsx` : montage React
- `src/index.css` : polices, animations, états :hover
- `public/site.config.js` : options (image d'accueil, cubes 3D, disponibilité, couleur, langue par défaut)
- `public/assets/` : captures, certificats, CV, photo

## SEO

- `public/.htaccess` : HTTPS, cache et compression sur un hébergement Apache.
- Chaque langue a sa propre URL indexable : `/` (anglais) et `/fr/` (français), reliées par `hreflang`.
- Les captures sont servies en WebP (`public/assets/*.webp`) ; les PNG d'origine ne sont plus référencés.
- Après une modification du contenu, mettez à jour `lastmod` dans `public/sitemap.xml` et `dateModified` dans le JSON-LD de `index.html`.

## Déploiement

Adresse du site : https://sunday-kodonon.xedomi.com

- **GitHub Pages** : chaque push sur `main` lance le build et le déploiement (`.github/workflows/deploy.yml`) ; le domaine est déclaré dans `public/CNAME`.
- **Serveur Apache** : envoyez le contenu de `dist/` (fichier `.htaccess` compris) à la racine du sous-domaine.

Pour changer d'adresse, remplacez `https://sunday-kodonon.xedomi.com` dans `src/seo.ts`, `index.html`, `public/sitemap.xml`, `public/robots.txt` et `public/CNAME`, puis régénérez `public/assets/og-image.jpg` (l'adresse y est écrite).
