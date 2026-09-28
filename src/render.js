'use strict';

const fs = require('fs');
const path = require('path');
const I18N = require('./i18n');
const THEMES = require('./themes');

const CSS = fs.readFileSync(path.join(__dirname, 'assets/style.css'), 'utf8');
const JS = fs.readFileSync(path.join(__dirname, 'assets/site.js'), 'utf8');
const DAY_KEYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const SCHEMA_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// JSON that is safe to put inside a <script> tag
function scriptJson(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function fill(template, vars) {
  return template.replace(/\{(\w+)\}/g, (m, key) => (key in vars ? vars[key] : m));
}

function digits(phone) {
  return String(phone || '').replace(/[^\d]/g, '');
}

function telHref(phone) {
  return 'tel:' + String(phone).replace(/[^\d+]/g, '');
}

function initials(name) {
  return name.split(/\s+/).filter(w => /[A-Za-zÀ-ž]/.test(w[0])).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

function faviconSvg(site, theme) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${theme.accent}"/>` +
    `<text x="32" y="42" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="700" fill="${theme.accentText}">${esc(initials(site.name))}</text></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function themeVars(theme) {
  return `:root{--bg:${theme.bg};--surface:${theme.surface};--text:${theme.text};--muted:${theme.muted};` +
    `--line:${theme.line};--accent:${theme.accent};--accent-text:${theme.accentText};` +
    `--heading:${theme.heading};--body:${theme.body};--hw:${theme.headingWeight}}`;
}

// A text field can be a plain string or one value per language:
// "tagline": { "fr": "...", "en": "..." }. This picks the right one.
function isTranslation(v) {
  return v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length > 0 &&
    Object.keys(v).every(k => k in I18N);
}

function localize(value, lang, fallback) {
  if (Array.isArray(value)) return value.map(v => localize(v, lang, fallback));
  if (isTranslation(value)) return value[lang] ?? value[fallback] ?? Object.values(value)[0];
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = localize(v, lang, fallback);
    return out;
  }
  return value;
}

function resolve(site) {
  const s = { ...I18N.en, ...I18N[site.lang] };
  const theme = { ...THEMES[site.theme], ...(site.colors || {}) };
  const money = (amount) => new Intl.NumberFormat(s.locale, {
    style: 'currency', currency: site.currency || 'EUR',
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2
  }).format(amount);
  return { s, theme, money };
}

function head(site, theme, title, description, extra = '', page = '') {
  const noindex = site.preview ? '<meta name="robots" content="noindex">' : '';
  const canonical = site.domain && !site.preview ? `<link rel="canonical" href="${esc(site.domain)}/${site.pathPrefix || ''}${page}">` : '';
  return `<!doctype html>
<html lang="${esc(site.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="${esc(theme.bg)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
${noindex}${canonical}${site.domain && !site.preview && site.langLinks && site.langLinks.length > 1
  ? site.langLinks.map(l => `<link rel="alternate" hreflang="${esc(l.lang)}" href="${esc(site.domain)}/${l.primary ? '' : l.lang + '/'}${page}">`).join('') : ''}
<link rel="icon" href="${faviconSvg(site, theme)}">
<style>${themeVars(theme)}${CSS}</style>
${extra}
</head>`;
}

function previewBanner(site, s) {
  return site.preview ? `<div class="preview">${esc(fill(s.preview_banner, { business: site.name }))}</div>` : '';
}

function footer(site, s) {
  return `<footer><div class="wrap">
  <span>© ${new Date().getFullYear()} ${esc(site.name)}</span>
  <a href="legal.html">${esc(s.legal_link)}</a>
</div></footer>`;
}

function renderServices(site, s, money) {
  const groups = [];
  for (const svc of site.services) {
    const title = svc.group || '';
    let group = groups.find(g => g.title === title);
    if (!group) groups.push(group = { title, items: [] });
    group.items.push(svc);
  }
  const html = groups.map(g => `<div>
    ${g.title ? `<h3>${esc(g.title)}</h3>` : ''}
    <ul class="svc">${g.items.map(svc => {
      const price = svc.price == null ? '' : (svc.priceFrom ? `${esc(s.from)} ` : '') + esc(money(svc.price)) +
        (site.kind === 'stay' ? ` <small class="muted">/ ${esc(s.per_night)}</small>` : '');
      const meta = [svc.duration ? `${svc.duration} ${s.min}` : '', svc.description || ''].filter(Boolean).join(' · ');
      return `<li><div class="row"><span class="name">${esc(svc.name)}</span><span class="fill"></span><span class="price">${price}</span></div>${meta ? `<div class="meta">${esc(meta)}</div>` : ''}</li>`;
    }).join('')}</ul>
  </div>`).join('');
  return `<div class="services${groups.length > 1 ? ' cols' : ''}">${html}</div>`;
}

function renderStayBooking(site, s) {
  const b = site.booking || {};
  const c = site.contact;
  const online = b.url ? `
    <a class="btn block" href="${esc(b.url)}" target="_blank" rel="noopener">${esc(s.booking_online_btn)}${b.provider ? ` · ${esc(b.provider)}` : ''}</a>` : '';
  const form = (c.whatsapp || c.email) ? `
    ${online ? `<p class="or">${esc(s.booking_or)}</p>` : ''}
    <form class="form" id="stay-form">
      ${site.services.length > 1 ? `<label>${esc(s.f_room)}
        <select name="room" required>${site.services.map(r => `<option>${esc(r.name)}</option>`).join('')}</select>
      </label>` : `<input type="hidden" name="room" value="${esc(site.services[0].name)}">`}
      <div class="two">
        <label>${esc(s.f_arrival)}<input type="date" name="arrival" required></label>
        <label>${esc(s.f_departure)}<input type="date" name="departure" required></label>
      </div>
      <div class="two">
        <label>${esc(s.f_guests)}<input type="number" name="guests" min="1" max="${esc(b.maxGuests || 20)}" value="2" required></label>
        <label>${esc(s.f_name)}<input type="text" name="name" autocomplete="name" required></label>
      </div>
      <label>${esc(s.f_note)}<textarea name="note" rows="3"></textarea></label>
      <button class="btn block" type="submit">${esc(c.whatsapp ? s.f_submit_wa : s.f_submit_mail)}</button>
    </form>` : '';
  const phone = c.phone ? `<p class="small" style="margin:18px 0 0">${esc(s.or_call)} <a href="${telHref(c.phone)}">${esc(c.phone)}</a></p>` : '';
  return `<section class="block" id="book"><div class="wrap split">
  <div>
    <p class="eyebrow">${esc(s.book_now)}</p>
    <h2>${esc(s.stay_title)}</h2>
    <p class="muted">${esc(s.stay_intro_form)}</p>
  </div>
  <div class="card">${online}${form}${phone}</div>
</div></section>`;
}

function renderBooking(site, s) {
  if (site.kind === 'stay') return renderStayBooking(site, s);
  const b = site.booking || {};
  const c = site.contact;
  const canRequest = b.requestForm !== false && (c.whatsapp || c.email);
  const online = b.url ? `
    <a class="btn block" href="${esc(b.url)}" target="_blank" rel="noopener">${esc(s.booking_online_btn)}${b.provider ? ` · ${esc(b.provider)}` : ''}</a>` : '';
  const form = canRequest ? `
    ${online ? `<p class="or">${esc(s.booking_or)}</p>` : ''}
    <form class="form" id="booking-form">
      <label>${esc(s.f_service)}
        <select name="service" required>${site.services.map(svc => `<option>${esc(svc.name)}</option>`).join('')}</select>
      </label>
      <div class="two">
        <label>${esc(s.f_date)}<input type="date" name="date" required></label>
        <label>${esc(s.f_time)}<select name="time" required></select></label>
      </div>
      <label>${esc(s.f_name)}<input type="text" name="name" autocomplete="name" required></label>
      <label>${esc(s.f_note)}<textarea name="note" rows="2"></textarea></label>
      <button class="btn block" type="submit">${esc(c.whatsapp ? s.f_submit_wa : s.f_submit_mail)}</button>
    </form>` : '';
  const phone = c.phone ? `<p class="small" style="margin:18px 0 0">${esc(s.or_call)} <a href="${telHref(c.phone)}">${esc(c.phone)}</a></p>` : '';
  return `<section class="block" id="book"><div class="wrap split">
  <div>
    <p class="eyebrow">${esc(s.book_now)}</p>
    <h2>${esc(s.booking_title)}</h2>
    <p class="muted">${esc(b.url ? s.booking_intro_online : s.booking_intro_form)}</p>
  </div>
  <div class="card">${online}${form}${phone}</div>
</div></section>`;
}

function renderHours(site, s) {
  return `<table class="hours">${DAY_KEYS.map((key, i) => {
    const r = site.hours[key] || [];
    const txt = r.length ? r.map(x => x.replace('-', '–')).join(', ') : s.closed;
    return `<tr data-day="${i}"><td>${esc(s.days[i])}</td><td>${esc(txt)}</td></tr>`;
  }).join('')}</table>`;
}

function mapsUrl(site) {
  const a = site.address;
  const q = [site.name, a.street, a.postcode, a.city].filter(Boolean).join(', ');
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
}

function jsonLd(site, money) {
  const a = site.address;
  const data = {
    '@context': 'https://schema.org',
    '@type': site.schemaType || 'LocalBusiness',
    name: site.name,
    description: site.tagline,
    telephone: site.contact.phone,
    email: site.contact.email,
    url: site.domain,
    address: {
      '@type': 'PostalAddress', streetAddress: a.street, postalCode: a.postcode,
      addressLocality: a.city, addressCountry: a.country
    },
    openingHoursSpecification: site.hours && DAY_KEYS.flatMap((key, i) => (site.hours[key] || []).map(r => {
      const [opens, closes] = r.split('-');
      return { '@type': 'OpeningHoursSpecification', dayOfWeek: SCHEMA_DAYS[i], opens, closes };
    })),
    sameAs: site.contact.instagram ? [`https://www.instagram.com/${site.contact.instagram}/`] : undefined,
    priceRange: site.priceRange
  };
  return `<script type="application/ld+json">${scriptJson(data)}</script>`;
}

function renderHome(site) {
  const { s, theme, money } = resolve(site);
  const c = site.contact;
  const a = site.address;
  const title = site.seoTitle || `${site.name} · ${a.city}`;
  const description = site.seoDescription || site.tagline;
  const hasAbout = site.about && site.about.length;
  const hasReviews = site.reviews && site.reviews.length;
  const hasGallery = site.gallery && site.gallery.length;
  const base = site.assetBase || '';
  const heroStyle = site.heroImage ? ` style="--hero-img:url('${esc(base + site.heroImage)}')"` : '';
  const stay = site.kind === 'stay';
  const hasHours = !!site.hours;
  const info = [
    ...(site.checkIn ? [{ label: s.check_in, value: site.checkIn }] : []),
    ...(site.checkOut ? [{ label: s.check_out, value: site.checkOut }] : []),
    ...(site.info || [])
  ];
  const langSwitch = (site.langLinks || []).length > 1
    ? `<span class="langs">${site.langLinks.map(l => l.current
        ? `<b aria-current="true">${esc(l.lang.toUpperCase())}</b>`
        : `<a href="${esc(l.href)}" hreflang="${esc(l.lang)}" lang="${esc(l.lang)}" title="${esc(l.name)}">${esc(l.lang.toUpperCase())}</a>`).join('')}</span>`
    : '';

  const clientData = {
    locale: s.locale,
    whatsapp: digits(c.whatsapp),
    email: c.email || '',
    hours: DAY_KEYS.map(k => (site.hours && site.hours[k]) || []),
    strings: {
      open_now: s.open_now, closed_now: s.closed_now, closed: s.closed, booking_title: s.booking_title,
      msg_intro: fill(s.msg_intro, { business: site.name }), msg_service: s.msg_service, msg_date: s.msg_date,
      msg_time: s.msg_time, msg_name: s.msg_name, msg_note: s.msg_note, stay_title: s.stay_title,
      stay_msg_intro: fill(s.stay_msg_intro, { business: site.name }), msg_room: s.msg_room,
      msg_arrival: s.msg_arrival, msg_departure: s.msg_departure, msg_nights: s.msg_nights, msg_guests: s.msg_guests
    }
  };

  const about = Array.isArray(site.about) ? site.about : [site.about];

  return `${head(site, theme, title, description, jsonLd(site, money))}
<body>
${previewBanner(site, s)}
<header class="top"><div class="wrap">
  <a class="brand" href="#">${esc(site.name)}</a>
  <nav>
    <a href="#services">${esc(stay ? s.nav_rooms : s.nav_services)}</a>
    ${hasAbout ? `<a href="#about">${esc(s.nav_about)}</a>` : ''}
    <a href="#visit">${esc(hasHours ? s.nav_hours : s.nav_contact)}</a>
  </nav>
  ${langSwitch}
  <a class="btn book" href="#book">${esc(s.book_now)}</a>
</div></header>

<main>
<section class="hero${site.heroImage ? ' has-photo' : ''}"${heroStyle}><div class="wrap">
  <p class="eyebrow">${esc(site.kicker || a.city)}</p>
  <h1>${esc(site.name)}</h1>
  <p class="lead">${esc(site.tagline)}</p>
  <div class="actions">
    <a class="btn" href="#book">${esc(s.book_now)}</a>
    ${c.phone ? `<a class="btn ghost" href="${telHref(c.phone)}">${esc(s.call)} ${esc(c.phone)}</a>` : ''}
  </div>
  ${hasHours ? '<p class="status" data-status hidden><span class="dot"></span><span></span></p>' : ''}
  ${site.highlights && site.highlights.length ? `<ul class="highlights">${site.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
</div></section>

<section class="block" id="services"><div class="wrap">
  <p class="eyebrow">${esc(stay ? s.nav_rooms : s.nav_services)}</p>
  <h2>${esc(stay ? s.rooms_title : s.services_title)}</h2>
  ${renderServices(site, s, money)}
</div></section>

${renderBooking(site, s)}

${hasAbout ? `<section class="block" id="about"><div class="wrap split">
  <div><p class="eyebrow">${esc(s.nav_about)}</p><h2>${esc(site.aboutTitle || s.about_title)}</h2></div>
  <div class="about">${about.map(p => `<p>${esc(p)}</p>`).join('')}</div>
</div></section>` : ''}

${hasGallery ? `<section class="block"><div class="wrap">
  <h2>${esc(s.gallery_title)}</h2>
  <div class="gallery">${site.gallery.map(img => `<img src="${esc(base + (img.src || img))}" alt="${esc(img.alt || site.name)}" loading="lazy">`).join('')}</div>
</div></section>` : ''}

${hasReviews ? `<section class="block"><div class="wrap">
  <h2>${esc(s.reviews_title)}</h2>
  <div class="reviews">${site.reviews.map(r => `<figure class="review">
    <div class="stars" aria-hidden="true">${'★'.repeat(r.stars || 5)}</div>
    <blockquote>${esc(r.text)}</blockquote>
    <figcaption>${esc(r.author)}${r.source ? ` · ${esc(r.source)}` : ''}</figcaption>
  </figure>`).join('')}</div>
</div></section>` : ''}

<section class="block" id="visit"><div class="wrap split">
  <div>
    <p class="eyebrow">${esc(s.nav_contact)}</p>
    <h2>${esc(s.find_title)}</h2>
    <address>${esc(a.street)}<br>${esc([a.postcode, a.city].filter(Boolean).join(' '))}</address>
    <ul class="contact-list">
      ${c.phone ? `<li>${esc(s.phone)}: <a href="${telHref(c.phone)}">${esc(c.phone)}</a></li>` : ''}
      ${c.email ? `<li>${esc(s.email)}: <a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>` : ''}
      ${c.instagram ? `<li><a href="https://www.instagram.com/${esc(c.instagram)}/" target="_blank" rel="noopener">${esc(s.follow)} · @${esc(c.instagram)}</a></li>` : ''}
    </ul>
    <a class="btn ghost" href="${esc(mapsUrl(site))}" target="_blank" rel="noopener">${esc(s.directions)}</a>
  </div>
  <div>
    ${hasHours ? `<h3>${esc(s.hours_title)}</h3>
    ${renderHours(site, s)}
    <p class="status" data-status hidden><span class="dot"></span><span></span></p>` : ''}
    ${info.length ? `<h3${hasHours ? ' style="margin-top:32px"' : ''}>${esc(s.stay_info)}</h3>
    <table class="hours">${info.map(i => `<tr><td>${esc(i.label)}</td><td>${esc(i.value)}</td></tr>`).join('')}</table>` : ''}
  </div>
</div></section>
</main>

${footer(site, s)}

<div class="mobile-bar">
  ${c.phone ? `<a class="btn ghost" href="${telHref(c.phone)}">${esc(s.call)}</a>` : ''}
  <a class="btn" href="#book">${esc(s.book_now)}</a>
</div>

<script type="application/json" id="site-data">${scriptJson(clientData)}</script>
<script>${JS}</script>
</body>
</html>
`;
}

function renderLegal(site, host) {
  const { s, theme } = resolve(site);
  const l = site.legal || {};
  const a = site.address;
  const owner = l.owner || site.name;
  return `${head(site, theme, `${s.legal_link} · ${site.name}`, s.legal_link, '', 'legal.html')}
<body>
${previewBanner(site, s)}
<header class="top"><div class="wrap">
  <a class="brand" href="./">${esc(site.name)}</a>
  <a class="btn ghost" href="./">${esc(s.back)}</a>
</div></header>
<main class="wrap legal">
  <h1>${esc(s.imprint_title)}</h1>
  <p class="muted">${esc(s.imprint_owner)}</p>
  <p>${esc(owner)}${l.owner && l.owner !== site.name ? `<br>${esc(site.name)}` : ''}<br>
  ${esc(a.street)}<br>${esc([a.postcode, a.city].filter(Boolean).join(' '))}${a.countryName ? `<br>${esc(a.countryName)}` : ''}</p>
  <p>${site.contact.phone ? `${esc(s.phone)}: ${esc(site.contact.phone)}<br>` : ''}${site.contact.email ? `${esc(s.email)}: ${esc(site.contact.email)}` : ''}</p>
  ${l.vatId ? `<p>${esc(s.vat)}: ${esc(l.vatId)}</p>` : ''}
  ${l.register ? `<p>${esc(s.register)}: ${esc(l.register)}</p>` : ''}
  <h2>${esc(s.privacy_title)}</h2>
  ${s.privacy_text.map(p => `<p>${esc(fill(p, { host }))}</p>`).join('\n  ')}
</main>
${footer(site, s)}
</body>
</html>
`;
}

function renderPortfolio(sites) {
  const theme = THEMES.classic;
  const cards = sites.map(raw => {
    const site = localize(raw, raw.lang, raw.lang);
    const t = { ...THEMES[site.theme], ...(site.colors || {}) };
    return `<a class="card" href="${esc(site.slug)}/" style="text-decoration:none;display:block;border-top:6px solid ${esc(t.accent)}">
      <h3 style="margin-bottom:.2em">${esc(site.name)}</h3>
      <p class="muted" style="margin:0">${esc(site.address.city)} · ${esc(site.lang.toUpperCase())} · ${esc(site.theme)}</p>
    </a>`;
  }).join('');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Website portfolio</title><meta name="robots" content="noindex">
<style>${themeVars(theme)}${CSS}.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}</style>
</head><body>
<main class="wrap" style="padding:64px 0">
  <p class="eyebrow">Portfolio</p>
  <h1 style="font-size:clamp(2.2rem,6vw,3.6rem)">Websites for local businesses</h1>
  <p class="muted" style="max-width:52ch">Fast, mobile-first websites with online booking, opening hours and directions. Tap any example to open it.</p>
  <div class="grid" style="margin-top:32px">${cards}</div>
</main>
</body></html>
`;
}

module.exports = { renderHome, renderLegal, renderPortfolio, localize, I18N, THEMES, DAY_KEYS };
