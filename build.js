#!/usr/bin/env node
'use strict';

// Builds a website for every client in clients/*.json.
//
//   node build.js                 -> dist/<slug>/ for every client + dist/index.html portfolio
//   node build.js --site <slug>   -> only that client, straight into dist/ (for its own domain)
//
// Files starting with "_" (like _template.json) are skipped.
// Photos go in clients/<slug>/ and are copied next to the page.

const fs = require('fs');
const path = require('path');
const { renderHome, renderLegal, renderPortfolio, I18N, THEMES, DAY_KEYS } = require('./src/render');

const ROOT = __dirname;
const CLIENTS = path.join(ROOT, 'clients');
const DIST = path.join(ROOT, 'dist');
const HOST = process.env.SITE_HOST || 'Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA';

function fail(msg) {
  console.error('✖ ' + msg);
  process.exitCode = 1;
}

function validate(site) {
  const errors = [];
  const need = (cond, msg) => { if (!cond) errors.push(msg); };
  need(site.name, '"name" is missing');
  need(site.tagline, '"tagline" is missing');
  need(I18N[site.lang], `"lang" must be one of: ${Object.keys(I18N).join(', ')}`);
  need(THEMES[site.theme], `"theme" must be one of: ${Object.keys(THEMES).join(', ')}`);
  need(site.address && site.address.street && site.address.city, '"address.street" and "address.city" are required');
  need(site.contact && (site.contact.phone || site.contact.whatsapp || site.contact.email), 'add at least one of contact.phone / whatsapp / email');
  need(Array.isArray(site.services) && site.services.length, '"services" needs at least one entry');
  need(site.hours && typeof site.hours === 'object', '"hours" is missing');
  if (site.hours) {
    for (const key of Object.keys(site.hours)) {
      need(DAY_KEYS.includes(key), `unknown day "${key}" in hours (use ${DAY_KEYS.join(', ')})`);
      for (const r of site.hours[key] || []) {
        need(/^\d{2}:\d{2}-\d{2}:\d{2}$/.test(r), `hours.${key}: "${r}" should look like "09:00-18:00"`);
      }
    }
  }
  return errors;
}

function loadClients() {
  return fs.readdirSync(CLIENTS)
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => {
      const slug = f.replace(/\.json$/, '');
      let site;
      try {
        site = JSON.parse(fs.readFileSync(path.join(CLIENTS, f), 'utf8'));
      } catch (e) {
        fail(`${f}: invalid JSON (${e.message})`);
        return null;
      }
      site.slug = slug;
      const errors = validate(site);
      if (errors.length) {
        fail(`${f}:\n   - ${errors.join('\n   - ')}`);
        return null;
      }
      return site;
    })
    .filter(Boolean);
}

function writeSite(site, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), renderHome(site));
  fs.writeFileSync(path.join(outDir, 'legal.html'), renderLegal(site, HOST));

  const assets = path.join(CLIENTS, site.slug);
  if (fs.existsSync(assets)) fs.cpSync(assets, outDir, { recursive: true });

  if (site.domain && !site.preview) {
    fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n`);
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `  <url><loc>${site.domain}/</loc></url>\n  <url><loc>${site.domain}/legal.html</loc></url>\n</urlset>\n`);
  }
}

function main() {
  const args = process.argv.slice(2);
  const only = args[args.indexOf('--site') + 1];
  const single = args.includes('--site');

  const sites = loadClients();
  if (process.exitCode) return;

  fs.rmSync(DIST, { recursive: true, force: true });

  if (single) {
    const site = sites.find(s => s.slug === only);
    if (!site) return fail(`no client called "${only}" in clients/`);
    writeSite(site, DIST);
    console.log(`✔ ${site.name} -> dist/`);
    return;
  }

  for (const site of sites) {
    writeSite(site, path.join(DIST, site.slug));
    console.log(`✔ ${site.name} -> dist/${site.slug}/`);
  }
  fs.writeFileSync(path.join(DIST, 'index.html'), renderPortfolio(sites));
  console.log(`✔ portfolio -> dist/index.html (${sites.length} sites)`);
}

main();
