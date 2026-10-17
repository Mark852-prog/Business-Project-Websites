---
name: find-and-pitch
description: Find small local businesses on Instagram with no website, build a live demo site for each, and type a personal DM with the link for Mark to send. Use when asked for new leads, a new batch, or "do today's DMs".
---

# Find and pitch

Goal: N leads (default 10) in the target city from CLAUDE.md, each with a live demo and a typed DM.

## 1. Find (in Chrome, with Instagram logged in)
- Search Instagram for hashtags or places like `#manchesterbarber`, `#birminghamnails` or `#leedslashes`, plus the city's location page.
- Keep accounts that are **active** (a post in the last 30 days), **independent** (not a chain), and have **no website**: the bio link is missing, or only Linktree/Booksy/Fresha/WhatsApp. "DM to book" in the bio is the best sign.
- Check each one: search Google for "<name> <city>" and skip it if it has a real website.
- Skip anything already in `leads/tracker.md`.

## 2. Collect (public info only)
Business name, Instagram handle, area, address if shown, services and prices (bio, highlights, price-list posts), hours, phone or WhatsApp, booking link, and 1–2 specific details for the DM (a recent cut or set, how many years they've been going, their vibe).

## 3. Build
- Copy `clients/_template.json` to `clients/<slug>.json`. Set `"preview": true`, `"lang": "en"` and the right currency. Pick a theme to match their style (`classic` or `bold` for barbers, `blush` for nails/lashes/beauty, `fresh` for wellness).
- Set `contact.instagram`. If they use Booksy/Fresha, set `booking.url` and `booking.provider`; otherwise the WhatsApp form.
- If prices are unknown, leave `price` out of those services rather than guessing. Leave `reviews` empty.
- For a non-EU business, set `"legal": {"owner": "<business name>"}`.
- Run `node build.js`, preview with `node serve.js`, check it on a phone-width screen, then commit and push. Wait about 1 minute, then open `https://mark852-prog.github.io/Business-Project-Websites/<slug>/` to confirm it's live.

## 4. Type the DM (don't send)
Open their DMs and type, personalised, short, with no hard sell:

> Hey [name]! Love your work, that [specific detail] is 🔥
> Noticed you don't have a website yet, so I built you one to show what it could look like: [link]
> Clients can see your prices and book you straight away, even at midnight. It's already made, so if you want it live it's [£99 first-clients price], and I handle everything. No worries if not!

Leave it **unsent** for Mark. Add the lead to `leads/tracker.md` with status `typed`.

## 5. Report
Give Mark a short list: business, handle, demo link, and "DM typed, ready to send".
Follow up only once, 3–4 days later, with a short friendly nudge.
