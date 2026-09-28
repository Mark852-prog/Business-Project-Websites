# Playbook

The goal is for you to spend about 20–30 minutes per client, most of it messaging. Claude does the building.

## Who does what

| Step | You | Claude |
|---|---|---|
| 1. Find leads | Scroll Instagram / Google Maps, 10 min a day | Suggest areas and business types, and draft the messages |
| 2. Make a demo | Send Claude the business's Instagram handle, what they offer, prices (from their posts/highlights), hours and address | Write the client file, build the demo and push it live |
| 3. Pitch | Send the DM with the demo link | Adapt the DM to the business and the language |
| 4. Close | Agree the price, send the agreement and payment details | Fill in the agreement |
| 5. Launch | Collect their real photos/info with the intake message, then forward it all to Claude | Finalise the site and set `preview: false` |
| 6. Domain | The client buys the domain; you add it in Cloudflare (5 min) | Walk you through it ([DEPLOY.md](DEPLOY.md)) |
| 7. Changes | Forward the client's change requests | Make the edits and push |

## How to ask Claude to make a demo

Paste something like this into a Claude Code session:

> New demo: @someinstagram. Barbershop in Vienna, German. Services: cut €25, fade €30, beard €15. Hours: Tue–Fri 10–19, Sat 9–15. Address: Example street 5, 1070 Wien. WhatsApp: +43 660 1234567. Vibe: dark/modern.

Claude creates the file, builds it, checks it on a phone-sized screen and pushes it. The demo is then live at `https://<your-project>.pages.dev/<name>/`.

## Rules

- **Always label demos as previews.** The preview banner is on by default. Never make a site that pretends to be the business's official site before they agree.
- **Photos:** in demos, use no photos, or theirs only once they say yes. Only use a client's own photos or logo with their permission.
- **Reviews:** only copy real reviews (Google/Instagram), and ask first. Never invent reviews for a real business.
- **One business, one personal message.** No mass DMs. Instagram limits new accounts that send lots of messages quickly, so keep it to 10–20 a day.

## Weekly rhythm (about 2–3 h/week)

- **Mon:** collect 20 leads in a sheet (name, Instagram, city, phone, notes)
- **Tue:** send Claude the best 5–10, which become 5–10 demos
- **Wed–Thu:** send the DMs
- **Fri:** follow up with anyone who opened but didn't reply
- **Any day:** forward client edits to Claude

## Tracking leads (free)

Keep a Google Sheet with these columns: `Business | City | Instagram | Phone | Demo link | Status (found / demo / sent / replied / won / lost) | Next step | Date`.
