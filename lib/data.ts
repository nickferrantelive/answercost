// All facts below come from the public sources listed in SOURCES.
// "checked" = date Vance (AI) read the source page. Prices can change; always verify on the vendor site.
export const CHECKED = "2026-10-16"; // original research date; re-checked sources carry their own date

export const SOURCES = {
  snow: { name: "The Snow Media, AI receptionist options for plumbing and HVAC compared (2026)", url: "https://thesnowmedia.com/resources/ai-receptionist-plumbing-hvac-options-compared/" },
  nextphone: { name: "NextPhone blog, Best AI receptionist for plumbers 2026 (vendor-written, prices read Oct 5, 2026)", url: "https://www.getnextphone.com/blog/best-ai-receptionist-for-plumbers" },
  cloudtalk: { name: "CloudTalk blog, Best AI receptionist for salons and spas (vendor-written)", url: "https://www.cloudtalk.io/blog/best-ai-receptionist-for-salons-spas/" },
  justcall: { name: "JustCall blog, Best AI receptionists for HVAC and plumbing (vendor-written, pricing as of Sep 2026)", url: "https://justcall.io/blog/best-ai-receptionist-for-hvac.html" },
  retell: { name: "Retell AI, Voice AI pricing compared (vendor-written)", url: "https://www.retellai.com/learn/voice-ai-platform-pricing-compared-what-you-are-actually-paying-for" },
  teamshift: { name: "Teamshift, Missed calls cost by industry: 2026 US data", url: "https://teamshift.io/guides/missed-calls-cost-by-industry-2026" },
  vifi: { name: "ViFi partners page (vendor)", url: "https://vifi.us/partners/" },
  frontdesk: { name: "My AI Front Desk affiliate page (vendor)", url: "https://www.myaifrontdesk.com/affiliate" },
  vibehackers: { name: "Vibehackers, AI phone receptionist idea validation report", url: "https://vibehackers.io/ideas/ai-phone-receptionist-cbb9db4c" },
  credminds: { name: "Credminds, AI receptionist statistics 2026", url: "https://www.credminds.com/ai-receptionist-statistics" },
  rosiePricing: { name: "Rosie pricing page (vendor)", url: "https://heyrosie.com/pricing", checked: "2026-10-20" },
  goodcallPricing: { name: "Goodcall pricing page (vendor)", url: "https://www.goodcall.com/pricing", checked: "2026-10-20" },
  frontdeskPricing: { name: "My AI Front Desk pricing page (vendor)", url: "https://www.myaifrontdesk.com/pricing", checked: "2026-10-20" },
  nextphonePricing: { name: "NextPhone pricing page (vendor)", url: "https://www.getnextphone.com/pricing", checked: "2026-10-20" },
  samedayPricing: { name: "Sameday pricing page (vendor)", url: "https://sameday.ai/pricing", checked: "2026-10-17" },
  retellPricing: { name: "Retell AI pricing page (vendor)", url: "https://www.retellai.com/pricing", checked: "2026-10-17" },
  phonelyPricing: { name: "Phonely pricing page (vendor)", url: "https://www.phonely.ai/pricing", checked: "2026-10-20" },
  pr800: { name: "800.com press release, Oct 7, 2026 (GlobeNewswire)", url: "https://www.globenewswire.com/news-release/2026/10/07/3376512/0/en/800-com-launches-free-trial-of-ai-agents-for-small-businesses.html", checked: "2026-10-17" },
  prKai: { name: "KaiCalls press release (openPR)", url: "https://www.openpr.com/news/4650141/kaicalls-launches-a-10-a-month-ai-secretary-for-the-calls-small", checked: "2026-10-17" },
  prVpbx: { name: "VirtualPBX news, Oct 10, 2026 (vendor)", url: "https://www.virtualpbx.com/news/ai-employee-preview/", checked: "2026-10-17" },
  smithPricing: { name: "Smith.ai AI Receptionist pricing page (vendor)", url: "https://smith.ai/pricing/ai-receptionist", checked: "2026-10-18" },
  trilletPricing: { name: "Trillet pricing page (vendor)", url: "https://www.trillet.ai/pricing", checked: "2026-10-18" },
  vapiPricing: { name: "Vapi pricing page (vendor)", url: "https://vapi.ai/pricing", checked: "2026-10-18" },
  blandPricing: { name: "Bland AI pricing page (vendor)", url: "https://www.bland.ai/pricing", checked: "2026-10-18" },
  dialzaraPricing: { name: "Dialzara pricing page (vendor)", url: "https://dialzara.com/pricing", checked: "2026-10-18" },
  upfirstPricing: { name: "Upfirst pricing page (vendor)", url: "https://www.upfirst.ai/pricing", checked: "2026-10-18" },
  oncrewPricing: { name: "OnCrew pricing page (vendor)", url: "https://oncrew.ai/pricing", checked: "2026-10-18" },
  bizrnrPricing: { name: "BizRnR home page pricing (vendor)", url: "https://bizrnr.com/", checked: "2026-10-18" },
  justcallPricing: { name: "JustCall pricing page (vendor)", url: "https://justcall.io/pricing/", checked: "2026-10-19" },
  cloudtalkPricing: { name: "CloudTalk pricing page (vendor)", url: "https://www.cloudtalk.io/pricing/", checked: "2026-10-19" },
  synthflowPricing: { name: "Synthflow pricing page (vendor)", url: "https://synthflow.ai/pricing", checked: "2026-10-19" },
  ringcentralPricing: { name: "RingCentral AI Receptionist pricing page (vendor)", url: "https://www.ringcentral.com/pricing/ai-receptionist.html", checked: "2026-10-19" },
  agentzapPricing: { name: "AgentZap pricing page (vendor)", url: "https://agentzap.ai/pricing", checked: "2026-10-19" },
  aircomPricing: { name: "AI-Receptionist.com pricing page (vendor)", url: "https://ai-receptionist.com/pricing/", checked: "2026-10-20" },
} as Record<string, { name: string; url: string; checked?: string }>;
export type SourceKey = string;
export const LAST_CHECKED = "2026-10-20";
export const sourceChecked = (k: SourceKey) => SOURCES[k]?.checked || CHECKED;

export type Vendor = {
  slug: string; name: string; kind: "ai" | "human" | "platform";
  price: string; model: string; notes: string; source: SourceKey[];
  homeServices?: boolean; salons?: boolean;
  website: string;
  affiliateUrl?: string; // filled only after Nick joins a program
  hasPublicAffiliateProgram?: boolean;
  calc?: { type: "bundle"; monthly: number; minutes: number } | { type: "tiers"; tiers: { monthly: number; minutes: number }[] } | { type: "flat"; monthly: number } | { type: "perMin"; low: number; high: number };
};

export const VENDORS: Vendor[] = [
  { slug: "rosie", name: "Rosie", kind: "ai", price: "$49/mo for 250 min, $149 for 1,000 min, $299 for 2,000 min", model: "Minute bundles", notes: "Listed as a cheap after-hours message taker in JustCall's comparison.", source: ["rosiePricing", "justcall"], homeServices: true, website: "https://heyrosie.com", hasPublicAffiliateProgram: true, calc: { type: "tiers", tiers: [{ monthly: 49, minutes: 250 }, { monthly: 149, minutes: 1000 }, { monthly: 299, minutes: 2000 }] } },
  { slug: "smith-ai", name: "Smith.ai AI Receptionist", kind: "ai", price: "Free for 25 calls ($3 per extra call); Pro $150/mo for 75 calls, $270 for 150, $500 for 300; Enterprise from $500/mo", model: "Per call", notes: "Extra calls on Pro cost $2.50 to $2.17 each. Offers human escalation. Native ServiceTitan and Housecall Pro per JustCall.", source: ["smithPricing", "justcall"], homeServices: true, website: "https://smith.ai", hasPublicAffiliateProgram: true },
  { slug: "sameday", name: "Sameday AI", kind: "ai", price: "$449/mo for 500 min, $789/mo for 1,000 min", model: "Minute bundles", notes: "Built for home services. ServiceTitan certified per The Snow Media.", source: ["samedayPricing", "snow"], homeServices: true, website: "https://sameday.ai", calc: { type: "tiers", tiers: [{ monthly: 449, minutes: 500 }, { monthly: 789, minutes: 1000 }] } },
  { slug: "avoca", name: "Avoca", kind: "ai", price: "No published price (demo-led)", model: "Quote", notes: "Aimed at larger ServiceTitan shops.", source: ["snow"], homeServices: true, website: "https://www.avoca.ai" },
  { slug: "goodcall", name: "Goodcall", kind: "ai", price: "$79/mo (100 unique customers), $129 (500), $299 (2,000); then 79, 26 or 15 cents per extra customer", model: "Billed per unique customer", notes: "Goodcall estimates about 150, 750 and 3,000 calls a month for those tiers.", source: ["goodcallPricing"], homeServices: true, salons: true, website: "https://www.goodcall.com", calc: { type: "flat", monthly: 79 } },
  { slug: "my-ai-front-desk", name: "My AI Front Desk", kind: "ai", price: "$99/mo, or $79/mo billed annually, with 200 voice minutes", model: "Plan plus minutes", notes: "Voice, text, chat and email on one plan per JustCall.", source: ["frontdeskPricing", "justcall"], homeServices: true, salons: true, website: "https://www.myaifrontdesk.com", hasPublicAffiliateProgram: true, calc: { type: "tiers", tiers: [{ monthly: 99, minutes: 200 }] } },
  { slug: "dialzara", name: "Dialzara", kind: "ai", price: "$29/mo for 60 min, $99 for 220 min, $199 for 500 min, $349 for 1,000 min", model: "Minute plans", notes: "Overage $0.48 to $0.35/min depending on plan. 7-day free trial. Listed for very low call volume, Spanish on every tier, per JustCall.", source: ["dialzaraPricing", "justcall"], homeServices: true, salons: true, website: "https://dialzara.com", calc: { type: "tiers", tiers: [{ monthly: 29, minutes: 60 }, { monthly: 99, minutes: 220 }, { monthly: 199, minutes: 500 }, { monthly: 349, minutes: 1000 }] } },
  { slug: "nextphone", name: "NextPhone", kind: "ai", price: "$199/mo (self setup), $299 (done for you), $599 (Scale); unlimited calls", model: "Flat", notes: "", source: ["nextphonePricing", "nextphone"], homeServices: true, website: "https://www.getnextphone.com", calc: { type: "flat", monthly: 199 } },
  { slug: "justcall", name: "JustCall", kind: "ai", price: "Phone plans $29, $49 or $89/user/mo billed annually (2-user minimum); AI voice agent $0.15/min, first 100 min free", model: "Seats plus AI minutes", notes: "Annual billing saves up to 29% per JustCall. 14-day free trial. The comparison source is JustCall's own blog.", source: ["justcallPricing", "justcall"], homeServices: true, website: "https://justcall.io" },
  { slug: "phonely", name: "Phonely", kind: "ai", price: "Free 100 min; $50/mo for 200 min; $150/mo for 650 min ($33 and $100/mo billed annually)", model: "Minute plans", notes: "Overage $0.25 to $0.30/min. The pricing page plan cards say 200 and 650 min, but its comparison table says 250 and 750 min; we use the lower figures. Listed as cheapest paid entry for solo stylists by CloudTalk.", source: ["phonelyPricing", "cloudtalk"], salons: true, website: "https://www.phonely.ai", calc: { type: "tiers", tiers: [{ monthly: 0, minutes: 100 }, { monthly: 50, minutes: 200 }, { monthly: 150, minutes: 650 }] } },
  { slug: "trillet", name: "Trillet", kind: "ai", price: "$49/mo for 150 minutes, then $0.20/min", model: "Minute bundle", notes: "Inbound-only plan for solo owners. 28-day money-back per CloudTalk.", source: ["trilletPricing", "cloudtalk"], salons: true, website: "https://www.trillet.ai", calc: { type: "bundle", monthly: 49, minutes: 150 } },
  { slug: "cloudtalk", name: "CloudTalk", kind: "ai", price: "AI Receptionist: 50 free minutes, paid from $99/mo for 200 min; AI Specialist from EUR 349/mo for 1,000 min", model: "Plan plus minutes", notes: "Phone system seats are extra, EUR 19 to 49/user/mo billed annually. The pricing page mixes EUR and USD. The comparison source is CloudTalk's own blog.", source: ["cloudtalkPricing", "cloudtalk"], salons: true, website: "https://www.cloudtalk.io" },
  { slug: "vifi", name: "ViFi", kind: "ai", price: "$49, $149 or $349/mo", model: "Plan plus usage", notes: "Three plans listed on the ViFi partners page.", source: ["vifi"], website: "https://vifi.us", hasPublicAffiliateProgram: true },
  { slug: "800-ai-agents", name: "800.com AI Agents", kind: "ai", price: "AI Starter $59/mo ($49 billed annually); AI Grow $149/mo ($124 annually); 7-day trial with 250 minutes", model: "Plan", notes: "Launched Oct 7, 2026. Minutes included per plan not stated in the release.", source: ["pr800"], homeServices: true, salons: true, website: "https://www.800.com/ai-agents" },
  { slug: "kaicalls", name: "KaiCalls", kind: "ai", price: "Kai Backup $10/mo for about 20 calls; Kai Answering $79/mo for about 150 calls", model: "Plan by calls", notes: "Backup works by forwarding missed calls from your existing phone. Source is a press release.", source: ["prKai"], homeServices: true, salons: true, website: "https://www.kaicalls.com/backup" },
  { slug: "virtualpbx", name: "VirtualPBX AI Employee", kind: "ai", price: "$99/mo per AI Employee", model: "Add-on to VirtualPBX phone service", notes: "New customers also get Smarter Voice phone service for up to five people, per the vendor.", source: ["prVpbx"], website: "https://www.virtualpbx.com/ai", calc: { type: "flat", monthly: 99 } },
  { slug: "upfirst", name: "Upfirst", kind: "ai", price: "$24.95/mo for 30 calls, $59.95 for 90, $159.95 for 300, $299 for 600 (20% less billed annually)", model: "Per call", notes: "Extra calls $1.50 down to $0.70 each depending on plan.", source: ["upfirstPricing"], homeServices: true, salons: true, website: "https://www.upfirst.ai" },
  { slug: "oncrew", name: "OnCrew", kind: "ai", price: "$49/mo for 100 calls, $149 for 400, $349 for 1,000; $0.99 per extra call", model: "Per call", notes: "Built for contractors. 14-day free trial, no card required to start.", source: ["oncrewPricing"], homeServices: true, website: "https://oncrew.ai" },
  { slug: "bizrnr", name: "BizRnR", kind: "ai", price: "$99/mo with 100 AI tasks, then $0.20 each", model: "Plan plus tasks", notes: "A task is one call, text, chat or workflow step. 30-day money-back guarantee.", source: ["bizrnrPricing"], homeServices: true, website: "https://bizrnr.com" },
  { slug: "ringcentral-ai-receptionist", name: "RingCentral AI Receptionist", kind: "ai", price: "$49/mo standalone with 100 min, or $39/mo add-on to RingEX ($30/mo) with 100 min; $0.50/min after that", model: "Plan plus minutes", notes: "Works with any phone system via forwarding. 14-day free trial. Billed in 30-second increments.", source: ["ringcentralPricing"], homeServices: true, salons: true, website: "https://www.ringcentral.com/ai-receptionist.html", calc: { type: "tiers", tiers: [{ monthly: 49, minutes: 100 }] } },
  { slug: "agentzap", name: "AgentZap", kind: "ai", price: "$109/mo for 150 min, $295 for 450 min, $899 for 1,500 min; plus $499 one-time setup", model: "Minute plans", notes: "Overage $0.85 to $0.70/min depending on plan. 30-day money-back guarantee. Setup fee waived on a 6-month Professional term.", source: ["agentzapPricing"], homeServices: true, salons: true, website: "https://agentzap.ai", calc: { type: "tiers", tiers: [{ monthly: 109, minutes: 150 }, { monthly: 295, minutes: 450 }, { monthly: 899, minutes: 1500 }] } },
  { slug: "ai-receptionist-com", name: "AI-Receptionist.com", kind: "ai", price: "$14/mo for 75 min, $39 for 100 min, $99 for 350 min, $199 for 1,000 min; or $140, $399, $999 or $1,999 billed yearly", model: "Minute plans", notes: "Extra minutes $0.25 each on every plan. 7-day free trial with 30 test minutes, no card required.", source: ["aircomPricing"], homeServices: true, salons: true, website: "https://ai-receptionist.com", calc: { type: "tiers", tiers: [{ monthly: 14, minutes: 75 }, { monthly: 39, minutes: 100 }, { monthly: 99, minutes: 350 }, { monthly: 199, minutes: 1000 }] } },
  { slug: "retell", name: "Retell AI", kind: "platform", price: "$0.07 to $0.31/min, $10 free credit", model: "Per minute (build it yourself)", notes: "Developer platform with no-code studio. Telephony and add-ons extra.", source: ["retellPricing", "retell"], website: "https://www.retellai.com", hasPublicAffiliateProgram: true, calc: { type: "perMin", low: 0.07, high: 0.31 } },
  { slug: "vapi", name: "Vapi", kind: "platform", price: "$0.05/min hosting plus model, voice and phone costs; $5 free credit", model: "Per minute (build it yourself)", notes: "Vapi's own calculator estimates $82 to $129 a month for 1,000 minutes. HIPAA add-on $2,000/mo.", source: ["vapiPricing", "retell"], website: "https://vapi.ai", calc: { type: "perMin", low: 0.082, high: 0.129 } },
  { slug: "bland", name: "Bland AI", kind: "platform", price: "$0.14/min with no platform fee; $0.12/min plus $299/mo platform fee on Build", model: "Per minute (build it yourself)", notes: "Transfer minutes billed separately ($0.05 or $0.04/min).", source: ["blandPricing", "snow"], website: "https://www.bland.ai", calc: { type: "perMin", low: 0.14, high: 0.14 } },
  { slug: "synthflow", name: "Synthflow", kind: "platform", price: "Enterprise contracts from $30,000/yr", model: "Annual contract", notes: "Final price scoped by call volume, concurrency, telephony and integrations. No self-serve plan listed.", source: ["synthflowPricing", "snow"], website: "https://synthflow.ai" },
  { slug: "abby-connect", name: "Abby Connect", kind: "human", price: "From $165/mo; about $898 for 100 three-minute calls answered by a person", model: "Live or hybrid answering service", notes: "Also sells AI answering: about $493.50 for 100 calls.", source: ["justcall", "nextphone"], homeServices: true, website: "https://www.abby.com" },
  { slug: "patlive", name: "PATLive", kind: "human", price: "About $479 for 100 three-minute calls; $1,475 for 300", model: "Live answering service", notes: "", source: ["nextphone"], website: "https://www.patlive.com" },
  { slug: "smith-ai-live", name: "Smith.ai live receptionists", kind: "human", price: "About $915 for 100 three-minute calls; $2,100 for 300", model: "Live answering service", notes: "", source: ["nextphone"], website: "https://smith.ai" },
];

export const HUMAN_RECEPTIONIST = { monthly: 3376, note: "Average hair salon receptionist pay, $40,513/yr (Salary.com, Aug 2026, as cited by CloudTalk)", source: "cloudtalk" as SourceKey };

export type Trade = { slug: string; name: string; plural: string; searches: number | null; cpc: string | null; topKeyword: string; source: SourceKey; homeServices?: boolean; salons?: boolean; extra?: string };

export const TRADES: Trade[] = [
  { slug: "law-firms", name: "Law Firm", plural: "law firms", searches: 1530, cpc: "about $405", topKeyword: "lawyers answering service (CPC about $782)", source: "teamshift" },
  { slug: "hvac", name: "HVAC", plural: "HVAC companies", searches: 1145, cpc: "about $150", topKeyword: "answering service for hvac (CPC about $533)", source: "teamshift", homeServices: true },
  { slug: "property-management", name: "Property Management", plural: "property managers", searches: 895, cpc: "about $139", topKeyword: "property management answering service (CPC about $140)", source: "teamshift" },
  { slug: "plumbers", name: "Plumber", plural: "plumbers", searches: 620, cpc: "about $115", topKeyword: "plumbers answering service (CPC about $120)", source: "teamshift", homeServices: true },
  { slug: "dentists", name: "Dental Office", plural: "dental offices", searches: 590, cpc: "about $165", topKeyword: "dental virtual receptionist (CPC about $231)", source: "teamshift", extra: "Dental is the one industry where searches for an AI receptionist (about 270 a month) outnumbered answering service searches (about 245), per Teamshift." },
  { slug: "automotive", name: "Auto Repair", plural: "auto repair shops", searches: 210, cpc: "about $64", topKeyword: "automotive answering service (CPC about $66)", source: "teamshift" },
  { slug: "real-estate", name: "Real Estate", plural: "real estate agents", searches: 190, cpc: "about $137", topKeyword: "real estate answering service (CPC about $146)", source: "teamshift" },
  { slug: "salons", name: "Salon", plural: "salons", searches: 130, cpc: "about $51", topKeyword: "ai receptionist for hair salon (CPC about $106)", source: "teamshift", salons: true },
  { slug: "veterinarians", name: "Veterinary", plural: "veterinary clinics", searches: 100, cpc: "about $92", topKeyword: "answering service for veterinarians (CPC about $140)", source: "teamshift" },
  { slug: "electricians", name: "Electrician", plural: "electricians", searches: 80, cpc: "about $36", topKeyword: "electricians answering service (CPC about $39)", source: "teamshift", homeServices: true },
  { slug: "roofers", name: "Roofing", plural: "roofing companies", searches: 75, cpc: "about $95", topKeyword: "roofing answering service (CPC about $95)", source: "teamshift", homeServices: true },
  { slug: "medical-offices", name: "Medical Office", plural: "medical offices", searches: 6600, cpc: "about $44", topKeyword: "medical answering service", source: "vibehackers", extra: "Medical calls can involve patient health information. Ask any vendor about HIPAA before signing. Vapi lists HIPAA as a $2,000/mo add-on, per Retell's pricing comparison." },
];

export function vendorsForTrade(t: Trade) {
  return VENDORS.filter(v => v.kind !== "platform" && (t.homeServices ? v.homeServices : t.salons ? v.salons : true));
}

export const SITE = {
  name: "AnswerCost",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://answercost.com",
  tagline: "Answering service vs AI receptionist: what it really costs, by trade.",
  stripeSponsorLink: process.env.NEXT_PUBLIC_STRIPE_SPONSOR_LINK || "",
};
