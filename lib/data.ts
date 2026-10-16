// All facts below come from the public sources listed in SOURCES.
// "checked" = date Vance (AI) read the source page. Prices can change; always verify on the vendor site.
export const CHECKED = "2026-10-16";

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
} as const;
export type SourceKey = keyof typeof SOURCES;

export type Vendor = {
  slug: string; name: string; kind: "ai" | "human" | "platform";
  price: string; model: string; notes: string; source: SourceKey[];
  homeServices?: boolean; salons?: boolean;
  website: string;
  affiliateUrl?: string; // filled only after Nick joins a program
  hasPublicAffiliateProgram?: boolean;
  calc?: { type: "bundle"; monthly: number; minutes: number } | { type: "flat"; monthly: number } | { type: "perMin"; low: number; high: number };
};

export const VENDORS: Vendor[] = [
  { slug: "rosie", name: "Rosie", kind: "ai", price: "From $49/mo for 250 minutes", model: "Minute bundles", notes: "Listed as a cheap after-hours message taker in JustCall's comparison.", source: ["snow", "justcall"], homeServices: true, website: "https://heyrosie.com", hasPublicAffiliateProgram: true, calc: { type: "bundle", monthly: 49, minutes: 250 } },
  { slug: "smith-ai", name: "Smith.ai AI Receptionist", kind: "ai", price: "Free tier with 25 calls; AI Receptionist Pro $150/mo", model: "Per call", notes: "Offers human escalation. Native ServiceTitan and Housecall Pro per JustCall.", source: ["snow", "justcall"], homeServices: true, website: "https://smith.ai", hasPublicAffiliateProgram: true },
  { slug: "sameday", name: "Sameday AI", kind: "ai", price: "From $449/mo for 500 minutes", model: "Minute bundles", notes: "Built for home services. ServiceTitan certified per The Snow Media.", source: ["snow"], homeServices: true, website: "https://sameday.ai", calc: { type: "bundle", monthly: 449, minutes: 500 } },
  { slug: "avoca", name: "Avoca", kind: "ai", price: "No published price (demo-led)", model: "Quote", notes: "Aimed at larger ServiceTitan shops.", source: ["snow"], homeServices: true, website: "https://www.avoca.ai" },
  { slug: "goodcall", name: "Goodcall", kind: "ai", price: "$79 to $249/mo", model: "Billed per unique customer", notes: "$79 per agent with unlimited minutes per The Snow Media.", source: ["snow", "justcall"], homeServices: true, salons: true, website: "https://www.goodcall.com", calc: { type: "flat", monthly: 79 } },
  { slug: "my-ai-front-desk", name: "My AI Front Desk", kind: "ai", price: "$79/mo billed annually; Business plan $99/mo", model: "Flat plan plus credits", notes: "Voice, text, chat and email on one plan per JustCall.", source: ["justcall", "frontdesk"], homeServices: true, salons: true, website: "https://www.myaifrontdesk.com", hasPublicAffiliateProgram: true, calc: { type: "flat", monthly: 99 } },
  { slug: "dialzar", name: "Dialzar", kind: "ai", price: "$29/mo", model: "Plan", notes: "Listed for very low call volume, Spanish on every tier.", source: ["justcall"], homeServices: true, website: "" },
  { slug: "nextphone", name: "NextPhone", kind: "ai", price: "Flat plans from $199/mo, unlimited calls", model: "Flat", notes: "Source is NextPhone's own blog.", source: ["nextphone"], homeServices: true, website: "https://www.getnextphone.com", calc: { type: "flat", monthly: 199 } },
  { slug: "justcall", name: "JustCall", kind: "ai", price: "$29 to $89/user/mo; AI quoted", model: "Seats plus AI minutes", notes: "Source is JustCall's own blog.", source: ["justcall"], homeServices: true, website: "https://justcall.io" },
  { slug: "phonely", name: "Phonely", kind: "ai", price: "Free for 100 minutes, then $50/mo", model: "Plan", notes: "Listed as cheapest paid entry for solo stylists.", source: ["cloudtalk"], salons: true, website: "https://www.phonely.ai" },
  { slug: "trillet", name: "Trillet", kind: "ai", price: "$49/mo for 150 minutes", model: "Minute bundle", notes: "28-day money-back per CloudTalk.", source: ["cloudtalk"], salons: true, website: "https://www.trillet.ai", calc: { type: "bundle", monthly: 49, minutes: 150 } },
  { slug: "cloudtalk", name: "CloudTalk", kind: "ai", price: "50 free minutes, then EUR 99/mo", model: "Plan", notes: "Full phone system. Source is CloudTalk's own blog.", source: ["cloudtalk"], salons: true, website: "https://www.cloudtalk.io" },
  { slug: "vifi", name: "ViFi", kind: "ai", price: "$49, $149 or $349/mo", model: "Plan plus usage", notes: "Three plans listed on the ViFi partners page.", source: ["vifi"], website: "https://vifi.us", hasPublicAffiliateProgram: true },
  { slug: "retell", name: "Retell AI", kind: "platform", price: "$0.07 to $0.31/min, $10 free credit", model: "Per minute (build it yourself)", notes: "Developer platform with no-code studio. Telephony and add-ons extra.", source: ["snow", "retell"], website: "https://www.retellai.com", hasPublicAffiliateProgram: true, calc: { type: "perMin", low: 0.07, high: 0.31 } },
  { slug: "vapi", name: "Vapi", kind: "platform", price: "$0.05/min hosting plus model, voice and phone costs", model: "Per minute (build it yourself)", notes: "Vapi's calculator estimates $82 to $129 per 1,000 minutes per Retell's comparison.", source: ["retell"], website: "https://vapi.ai", calc: { type: "perMin", low: 0.082, high: 0.129 } },
  { slug: "bland", name: "Bland AI", kind: "platform", price: "From $0.14/min", model: "Per minute (build it yourself)", notes: "", source: ["snow"], website: "https://www.bland.ai", calc: { type: "perMin", low: 0.14, high: 0.14 } },
  { slug: "synthflow", name: "Synthflow", kind: "platform", price: "From $30,000/yr", model: "Annual", notes: "", source: ["snow"], website: "https://synthflow.ai" },
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
