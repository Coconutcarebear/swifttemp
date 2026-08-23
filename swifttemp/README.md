# SwiftTemp

Marketing site for SwiftTemp Climate Solutions.
Next.js 16 (App Router) · Cloudflare Workers via OpenNext · Supabase for leads.

## Quick start

```bash
npm install
cp .dev.vars.example .dev.vars   # fill in, never commit
npm run dev                      # http://localhost:3000
```

## Deploy

```bash
npm run preview   # build + run the real Worker locally
npm run deploy    # build + deploy to Cloudflare
```

Secrets (never in the repo):

```bash
npx wrangler secret put SUPABASE_SERVICE_KEY
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put DISPATCH_EMAIL
```

Non-secret values (`SUPABASE_URL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) live in
`wrangler.jsonc` under `vars`.

## Where things live

| What | Where |
|---|---|
| NAP, license number, hours | `lib/site.ts` — single source of truth |
| Seasonal offer bar | `lib/offers.ts` — one-line PR to change |
| Service page content | `content/services/*.ts` |
| Design tokens | `app/globals.css` (`:root`) |
| Lead capture | `app/api/lead/route.ts` |
| Database schema | `supabase/schema.sql` |

## Rules worth not breaking

- **Never white text on `--orange`.** 2.34:1, fails WCAG. Navy on orange is 5.63:1.
- **Never `--blue` at body size.** 4.28:1, fails AA. Use `--blue-ink` for text.
- **`--ice` is a surface tint, never a text color.**
- **The lead form must work with JavaScript disabled.** It is a plain form POST
  that redirects. Don't convert it to a fetch handler.
- **`SUPABASE_SERVICE_KEY` never reaches the client.** Grep the build output
  before every launch.
- **License number stays in the footer of every page.** N.J.A.C. 13:32A-5.1
  requires it in all advertising.
- **Don't set `site.rating.verified = true`** until the numbers come from the
  real Google Business Profile. Fabricated ratings in JSON-LD can earn a
  manual action.

## Outstanding

1. Real logo SVG lockups — header runs a wordmark placeholder.
2. Norwester license check before self-hosting the webfont.
3. Every `[bracket]` filled, or its module removed.
4. Technician photos, or cut the team sections.
