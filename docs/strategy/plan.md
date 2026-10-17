# Vance Plan for Nick Ferrante (AI-generated draft, by Vance / Grok Bot)

## Verdict
Pitch 5 simple-problem ideas, Timothy-style. Vance's top pick: **Connector Cookbook**, a directory of copy-paste setup recipes for wiring AI agents (Grok Bot, Claude, ChatGPT, Hermes, Cursor) to real services (Stripe, Resend, Vercel, GitHub, Gmail, Search Console). Nick chooses. Then build it the Build Stack way: ship v1 fast, Vercel + GitHub + Resend + Stripe sponsor link, daily ops and weekly CEO update routines, post on X.

## 1. Idea pitch (Nick picks one)

How Alex and Timothy brainstormed (quoted from transcript):
> "the best businesses are the ones that solve challenges. Agent use cases solves the challenge of people not knowing what to do with AI agents."
> "you want to solve problems in very simple ways. You just want to build simple micro businesses here that our agents can fully take care of."
> Prompt: "I want you to design, build, and run an autonomous business for me. Let's first come up with the idea. I want this to be very simple problem my audience might have. I'm into AI AI agents, tech, video games, and vibe coding. What are some very simple challenge challenges we can solve?"
> Bot reply: "Here's six simple problems your audience actually runs into. Each one small enough for agents to run mostly on their own."
> Alex picked: "let's do AI tool ranking. We can make a directory of AI tools, shows which AI tools people should be using for which use cases, and showcases new tool releases"

Assumed audience (Nick to correct): AI agents, builders, people starting agentic businesses after this video.

| # | Simple problem | Solution | Money | Crowdedness |
|---|---|---|---|---|
| 1 TOP PICK | "I told my agent to connect Stripe/Resend/Vercel and it got stuck." | **Connector Cookbook**: one page per agent x service pair, tested steps, gotchas, prompts. New pages auto-added when tools ship. | Featured listings from SaaS/connector makers, newsletter sponsor slot | Low. Directories cover MCP servers and prompts, not "agent X + service Y" setup recipes |
| 2 | "Which AI plan is worth paying for this month?" | **AI Plan Tracker**: prices, limits, quota changes for every AI subscription, change alerts in newsletter | Sponsors, affiliate links | Medium (model benchmark sites exist, plan/limit change tracking is thin) |
| 3 | "Where do I get free AI credits?" | **Free AI Credits**: directory of free tiers, startup credits, promos, expiry dates | Featured listings, affiliate | Medium |
| 4 | "I want an agentic business but don't know what to build." | Idea directory of micro-business ideas with demand data | Sponsors | High: agentbuiltbusinesses.com, ZHC Directory, TopAgent, AgentMRR |
| 5 | "I need prompts/skills that actually work." | Prompt/skill library | Sponsors | Very high: Stackmark, Skillful.sh, HowToPrompts, ImAiFox, Skills Playground |

Why #1: Alex's own video shows the pain ("There are a few critical connectors you need to set up"), the audience grows with every agentic-business video, pages are long-tail SEO and chatbot-quotable ("how to connect Resend to Grok Bot"), and service vendors have budget to sponsor. Research note: quick search only; demand for #1 is inferred, not measured. Verify with Search Console after launch.

Sources: https://stackmark.dev/ , https://skillful.sh/ , https://howtoprompts.com/ , https://imaifox.com/ , https://skillsplayground.com/ , https://agentbuiltbusinesses.com/ (already lists agentusecases.ai) , https://zhcdirectory.com/ , https://1topagent.com/ , https://trustmrr.com/startup/agentmrr

Alternates if Nick passes on #1: #2 AI Plan Tracker, #3 Free AI Credits.

## 2. Alex's playbook distilled
- Stack: CEO bot (Milo) on Grok Bot with Cursor cloud agents building; Vercel hosting ("completely for free"); GitHub ("push changes and PRs"); Resend newsletter; Stripe payment link; Google Search Console later.
- Setup prompt: "Your name is Timothy and I want you to be the CEO of a new agentic business I want to build."
- Action bias: "Let's just build it. Let's build. Let's have a bias for action. Don't spend too much time on name"
- Maintenance prompt: "you are going to be the autonomous CEO for this micro business. Here is everything I want you to work on and maintain for me." + list: monetizing when appropriate, optimizing SEO, optimizing for chatbots, starting and maintaining a newsletter, watching for feedback on X, watching for bugs.
- Routines: "Every morning at 7:52 a.m. PT, I will add new releases, check the site for bugs, scan for X feedback, and make one SEO improvement. It'll only message you if something matters. Every Monday night 7:17, you'll get short progress." Guardrail: "Before anything goes out to people like newsletter sign-ups, sponsorships, or payments, I'll check with you first."
- Monetization: sponsorships via Stripe link (logo on site, ticker, newsletter). $1,100 from two sponsors, one paid $600. Newsletter ~2,000 subs, called "the most valuable part".
- Growth: SEO + chatbot optimization, daily newsletter, X posting ("I started posting two times a day"; "You can do this with like 50 followers"), plug the site occasionally.

## 3. Build plan (short)
- Domain ideas: connectorcookbook.com, agentwiring.com, hookupmyagent.com (check availability before buying).
- Site: home search ("agent + service"), /agents/[agent], /services/[service], /recipes/[agent]-[service], /new, /sponsor, /newsletter, llms.txt.
- SEO: one recipe page per pair, HowTo schema, sitemap, FAQ blocks, Search Console, llms.txt for chatbots, "last tested" dates.
- Newsletter (Resend): weekly at first, "new recipes + what broke this week", sponsor slot. Every issue labeled AI-assisted.
- Sponsor: Stripe payment link, e.g. $199/week featured recipe + newsletter logo (start low, raise with traffic).
- X: Nick posts 2x/day (Vance drafts, Nick approves), recipe tips, plug site 1 in 4 posts. Label AI-drafted posts if posted by bot.
- Daily ops prompt: "Every morning at 8:00 a.m. CT: add new recipes for newly released agents or connectors, retest 3 old recipes, check site for bugs, scan X for feedback, make one SEO improvement. Only message Nick if something matters. Ask before anything goes out to people or involves money."
- Weekly CEO update prompt: "Every Monday 7:00 p.m. CT, send Nick a short progress update: traffic, subscribers, sponsor pipeline and revenue, what shipped, top 3 next moves, decisions needed."

## 4. What Nick must provide
- GitHub: already connected as nickferrantelive (1 public repo). Free.
- Vercel: login/connector. Hobby free (Pro $20/mo only if commercial terms require; sponsors are commercial so likely Pro).
- Resend: account + domain DNS. Free up to 3,000 emails/mo; $20/mo beyond.
- Stripe: account (identity + bank). No monthly fee; ~2.9% + 30c per payment.
- X: account login, or approve drafts manually. Free (API posting may need paid tier ~$200/mo; manual posting avoids it).
- Domain registrar: account + purchase approval. ~$10 to $15/yr for .com.
- Google Search Console: Google login. Free.
- Contact email: real address for sponsors.
Estimated spend: ~$15 up front, $0 to $40/mo early.
