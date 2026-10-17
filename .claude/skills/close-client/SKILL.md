---
name: close-client
description: Handle a business that replied to a DM: answer questions, agree the price, collect their details, take payment and launch the real site. Use when Mark forwards a reply or says someone said yes.
---

# Close a client

1. **Reply:** draft a short, friendly answer to their message for Mark to send. Answer any objections with `docs/SALES-KIT.md`. Never offer below the floor (UK £79 + £10/month).
2. **Agree:** confirm the price, then send the one-page agreement from `docs/AGREEMENT.md`, filled in. They reply "I agree".
3. **Payment:** Mark sends a PayPal or Wise payment link for the setup fee. Wait for Mark to confirm it's paid before launching.
4. **Intake:** send the message from `docs/CLIENT-INTAKE.md` asking for photos, final prices, hours, booking preference and their legal name.
5. **Launch:**
   - Update `clients/<slug>.json` with their real details and photos (in `clients/<slug>/`).
   - Set `"preview": false` and `"domain"`, then push.
   - Walk Mark through connecting their domain (`docs/DEPLOY.md`).
6. **Track:** set the status in `leads/tracker.md` to `won`, with the price and the monthly fee start date.
