# Chat proxy (OpenRouter)

The website is static, so the OpenRouter key can't live in the page. This tiny Cloudflare Worker holds it.

```sh
cd worker
npx wrangler login
npx wrangler secret put OPENROUTER_API_KEY   # paste your key when prompted
npx wrangler deploy                          # prints https://mld-chat.<you>.workers.dev
```

Then put that URL in `docs/public/assets/js/config.js` (`CHAT_API`). Until it is set, the site falls back to
answering with sentences quoted straight from the page.

- Change the model in `wrangler.toml` (`MODEL`).
- Only the origins in `ALLOWED_ORIGINS` can call it. Add a Cloudflare rate-limiting rule on the worker route to cap abuse and spend.
- Set a monthly spend limit on the key in the OpenRouter dashboard.
