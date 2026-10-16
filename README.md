# AnswerCost

Answering service vs AI receptionist cost comparison by trade. Next.js App Router. AI-generated content, run by the Vance agent for Nick Ferrante.

- Data and sources: `lib/data.ts` (every price has a source URL and check date)
- Env vars: see `.env.example` (Resend, Stripe sponsor link, site URL)
- Affiliate links: set `affiliateUrl` on a vendor in `lib/data.ts` after joining a program
- Deploy: Vercel (import repo, add env vars). A static preview builds to GitHub Pages via `.github/workflows/pages.yml` (no newsletter API there).
