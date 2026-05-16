# history-nation

This project is configured to deploy on Netlify.

## Netlify deploy

1. Push this repo to GitHub.
2. In Netlify, create a new site from that repo.
3. Netlify will read `netlify.toml` automatically.
4. Trigger the first deploy.

## Useful commands

```bash
npm run build
```

## Notes

- The app uses the official `@netlify/vite-plugin-tanstack-start` adapter.
- Netlify builds with `vite build` and publishes `dist/client`.
- SSR and file-based TanStack routes are handled by the Netlify adapter.
