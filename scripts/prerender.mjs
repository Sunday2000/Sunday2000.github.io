// Pré-rendu statique : génère dist/index.html (en) et dist/fr/index.html (fr) avec le contenu HTML
// et les balises SEO propres à chaque langue. Lancé par `npm run build` après les builds client et SSR.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, META, LANG_PATH, SITE_URL } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// Mêmes options que le navigateur, lues dans public/site.config.js, pour que le HTML pré-rendu corresponde à l'hydratation.
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'public/site.config.js'), 'utf8'), sandbox);
const { heroImage, cubes, available, accent } = sandbox.window.SITE_CONFIG || {};
const config = Object.fromEntries(Object.entries({ heroImage, cubes, available, accent }).filter(([, v]) => v !== undefined));

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setAttr(html, selector, attr, value) {
  const re = new RegExp(`(<${selector}[^>]*\\s${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Balise introuvable dans index.html : <${selector}>`);
  return html.replace(re, `$1${esc(value)}$2`);
}

for (const lang of Object.keys(META)) {
  const m = META[lang], url = SITE_URL + LANG_PATH[lang], other = lang === 'en' ? 'fr' : 'en';
  let html = template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${render(lang, config)}</div>`);
  html = setAttr(html, 'meta name="description"', 'content', m.description);
  html = setAttr(html, 'link rel="canonical"', 'href', url);
  html = setAttr(html, 'meta property="og:url"', 'content', url);
  html = setAttr(html, 'meta property="og:title"', 'content', m.title);
  html = setAttr(html, 'meta property="og:description"', 'content', m.ogDescription);
  html = setAttr(html, 'meta property="og:image:alt"', 'content', m.ogAlt);
  html = setAttr(html, 'meta property="og:locale"', 'content', m.locale);
  html = setAttr(html, 'meta property="og:locale:alternate"', 'content', META[other].locale);
  html = setAttr(html, 'meta name="twitter:title"', 'content', m.title);
  html = setAttr(html, 'meta name="twitter:description"', 'content', m.ogDescription);
  html = setAttr(html, 'meta name="twitter:image:alt"', 'content', m.ogAlt);

  // Données structurées : la ProfilePage pointe vers l'URL et la langue de la page courante.
  html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (_, a, json, b) => {
    const data = JSON.parse(json);
    const page = data['@graph'].find((n) => n['@type'] === 'ProfilePage');
    Object.assign(page, { '@id': url + '#profilepage', url, name: m.title, inLanguage: lang });
    return a + JSON.stringify(data).replace(/</g, '\\u003c') + b;
  });

  const out = path.join(dist, LANG_PATH[lang], 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`pré-rendu ${lang} → ${path.relative(root, out)} (${(html.length / 1024).toFixed(0)} ko)`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
