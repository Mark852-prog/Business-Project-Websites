# Free hosting with Cloudflare Pages

Cloudflare Pages is free, needs no credit card, has unlimited bandwidth, works with private GitHub repos, and adds HTTPS automatically.

## One-time setup: the portfolio and all demos

1. Create a free account at <https://dash.cloudflare.com/sign-up>.
2. Go to **Workers & Pages → Create → Pages → Connect to Git**, and pick this repository.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** `node build.js`
   - **Build output directory:** `dist`
   - **Production branch:** your main branch
4. Click **Save and Deploy**.

You get `https://<project-name>.pages.dev/`, which is your portfolio page. Each demo lives at `https://<project-name>.pages.dev/<client-name>/`.
Every push to the repo redeploys automatically, so a new demo is live about a minute after Claude pushes it.

Tip: choose a neutral project name, such as `yourname-web`, because it appears in every demo link.

## When a client pays: give them their own domain

Each paying client gets their **own Pages project**, so their site sits at the root of their domain.

1. **Workers & Pages → Create → Pages → Connect to Git**, and pick the **same repo** again.
2. Project name: the client's name, for example `kiez-barbers`.
3. Build command: `node build.js --site kiez-barbers`. Output directory: `dist`.
4. Deploy. Their site is now at `https://kiez-barbers.pages.dev`.
5. In the client file, set `"preview": false` and `"domain": "https://www.theirdomain.de"`. Then commit and push.
6. **Custom domain:** in the project, go to **Custom domains → Set up a custom domain**, enter `www.theirdomain.de`, and follow the instructions:
   - If the client's domain is at another registrar (IONOS, OVH, Namecheap and so on), Cloudflare shows a **CNAME record** to add. The client can do this, or can give you access.
   - The simplest option: the client buys the domain **through Cloudflare Registrar** in their own account at cost price, then adds you as a member. Everything then happens in one place.

## Other free options

- **Netlify** (free tier): same idea. Build command `node build.js`, publish directory `dist`.
- **GitHub Pages:** free for **public** repos only. It doesn't run the build command by itself, so it would need a GitHub Action. Cloudflare is simpler.

If you use a host other than Cloudflare, set the environment variable `SITE_HOST` to that host's name and address, so the privacy page names the correct provider.
