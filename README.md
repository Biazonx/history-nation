# history-nation

This project is ready to deploy for free on Cloudflare Workers.

## Recommended free option

Use Cloudflare Workers. This repo already builds a Worker-compatible SSR bundle, and Cloudflare gives you a free `*.workers.dev` URL.

## Deploy steps

1. Create a free Cloudflare account at `https://dash.cloudflare.com/sign-up`.
2. Log in from this project:

```bash
npm run cf:login
```

3. Deploy:

```bash
npm run deploy
```

4. After deploy, Cloudflare will print your live URL, usually something like:

```text
https://history-nation.<your-subdomain>.workers.dev
```

## Useful commands

```bash
npm run build
npm run cf:whoami
npm run deploy
```

## Notes

- The Worker name is set to `history-nation` in `wrangler.jsonc`.
- The deploy script uses the generated Worker config at `dist/server/wrangler.json`.
- If you later want a custom domain, you can add it from the Cloudflare dashboard.
