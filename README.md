# Small-business websites

A zero-cost system for finding small local businesses (barbers, nail salons, beauty and massage studios and so on) that have no website, and selling them a fast, mobile-first site with booking built in.

- **Claude builds the sites.** Each business is one small JSON file, and one command turns it into a finished website.
- **You find businesses, send messages and collect payments.** Scripts and pricing are in [`docs/`](docs/).
- **It costs nothing to run.** Hosting is free on Cloudflare Pages, there are no paid tools, and each client buys their own domain.

## What every site includes

- Services and prices, grouped (for example Hair / Beard)
- **Booking.** Customers pick a service, a date and a time from the real opening hours, and the site opens WhatsApp with a ready-made message to the business. There's no backend and no monthly fee. If the business already uses Booksy, Fresha, Treatwell or similar, a "Book online" button links to it.
- An "Open now / Closed now" badge, with today's hours highlighted
- Tap-to-call, a directions link and Instagram, plus a sticky Call / Book bar on phones
- Reviews, an about section and an optional photo gallery
- A legal notice and privacy page (Impressum-style) in the site's language
- **GDPR-friendly by design:** no cookies, no tracking, no Google Fonts and no embedded Google Maps
- SEO basics: meta tags, a `LocalBusiness` schema, and a sitemap once the site has a real domain
- **Several languages on one site**, with a language switch: set `"languages": ["fr", "en"]` and write any text as `{ "fr": "...", "en": "..." }`. The main language goes at `/` and the others at `/en/` and so on.
- 8 languages: English, German, French, Spanish, Italian, Dutch, Polish and Portuguese
- **Two kinds of business:**
  - `"kind": "appointment"` (the default) for barbers and salons: services, opening hours, and a date and time picker
  - `"kind": "stay"` for gîtes and B&Bs: rooms with a price per night, arrival and departure dates, number of guests, and check-in and practical info
- 5 themes: `classic` (dark and brass, for barbers), `blush` (nails and beauty), `fresh` (massage and physio), `terroir` (warm stone, for gîtes and B&Bs), `bold` (modern barbers and gyms)

## Demo sites (fictional businesses)

| File | Business | Language | Theme |
|---|---|---|---|
| `clients/kiez-barbers.json` | Barbershop, Berlin | DE | classic |
| `clients/atelier-lune.json` | Nail salon, Lyon | FR | blush |
| `clients/harbour-fade.json` | Barbershop, Dublin | EN | bold |
| `clients/mas-des-oliviers.json` | B&B, Luberon (`kind: stay`) | FR + EN | terroir |

All their names, numbers and reviews are made up, and they show a "preview" banner.

## Commands

You need Node.js 18 or newer and nothing else. There's no `npm install`.

```bash
node build.js                    # build every site into dist/ (+ a portfolio page at dist/index.html)
node serve.js                    # preview at http://localhost:8080
node build.js --site kiez-barbers  # build one site into dist/ root (for its own domain)
```

## Adding a new business

1. Copy `clients/_template.json` (for appointments) or `clients/_template-stay.json` (for B&Bs and gîtes) to `clients/<short-name>.json` and fill it in. In practice, you send Claude their Instagram handle and details and Claude does this part.
2. Photos (optional) go in `clients/<short-name>/`, for example `clients/<short-name>/photo1.jpg`. Then list them in `"gallery"` as `"photo1.jpg"`.
3. Keep `"preview": true` while it's a pitch. This shows a banner and hides the site from Google. Set it to `false` when they pay.
4. Run `node build.js`, then commit and push. Cloudflare updates the live site automatically.

## Docs

- [`docs/PLAYBOOK.md`](docs/PLAYBOOK.md): the whole process, step by step, and who does what
- [`docs/EMAIL-OUTREACH.md`](docs/EMAIL-OUTREACH.md): how Claude finds B&Bs and gîtes and writes Gmail drafts for you to send
- [`leads/`](leads/): every lead found so far, and its status
- [`docs/SALES-KIT.md`](docs/SALES-KIT.md): finding leads, DM scripts, follow-ups, objections and pricing
- [`docs/CLIENT-INTAKE.md`](docs/CLIENT-INTAKE.md): the message to send once they say yes
- [`docs/AGREEMENT.md`](docs/AGREEMENT.md): a one-page agreement template
- [`docs/DEPLOY.md`](docs/DEPLOY.md): free hosting on Cloudflare Pages and connecting a client's domain
