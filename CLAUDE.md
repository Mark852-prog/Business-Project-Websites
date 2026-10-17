# Small-business websites: project guide for Claude

## The business
We sell fast, mobile-first websites with booking to small local businesses that have no website
(barbers, nail and lash techs, beauty, massage, dog groomers, tattoo studios). Mark (the owner of this
repo) lives in France and only wants to: review and press **Send** on Instagram DMs, forward replies,
and collect payment. **Claude does everything else.**

## Current focus
- Market: **English-speaking first**, starting in **Manchester, Birmingham and Leeds (UK)**, then Dublin, then US cities.
- Channel: **Instagram DMs**, with a finished demo link in the first message. Cold emails had 0 replies out of 5, so don't use email for salons.
- Price: UK £199 + £15/month (first 3 clients: £99 + £15/month for a review). US $299 + $20/month. Ireland/EU €149 + €15/month.
- The client buys their own domain.

## How the code works
- `clients/<slug>.json` is one business. `node build.js` builds every site into `dist/<slug>/`, and `node serve.js` previews them.
- Pushing to `claude/small-business-websites-6mgga0` triggers `.github/workflows/pages.yml`, which deploys to
  **https://mark852-prog.github.io/Business-Project-Websites/<slug>/** within about a minute.
- Templates: `clients/_template.json` (appointments) and `clients/_template-stay.json` (B&Bs). Options are listed in the README.
- Demos always have `"preview": true` (banner and noindex). Set it to `false` only when the client has paid.

## Rules
- **Never press Send on Instagram (or anywhere) yourself.** Type the DM and let Mark send it. Keep it to 10–20 a day, so the account isn't flagged for automation.
- Only use public information. Use the client's own photos only after they say yes. Never invent reviews for a real business; leave `reviews` empty or copy real ones.
- If a business says no or asks to be left alone, delete its demo, push, and mark it `lost` in the tracker.
- Track every lead in `leads/tracker.md`.
- Use the skills: `/find-and-pitch` for new leads, `/close-client` when someone replies yes.
