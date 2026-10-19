import { TRADES, VENDORS, SOURCES, SITE, LAST_CHECKED, sourceChecked } from "@/lib/data";
export const dynamic = "force-static";
export function GET() {
  const t = `# AnswerCost
> Answering service vs AI receptionist cost comparison by trade. AI-generated content, sourced public prices, last updated ${LAST_CHECKED}.

## Pages
- [Cost calculator](${SITE.url}/calculator/)
- [Price sheet](${SITE.url}/price-sheet/)
- [Vendor directory](${SITE.url}/vendors/)
${TRADES.map(x => `- [Answering service for ${x.plural} vs AI receptionist](${SITE.url}/trades/${x.slug}/)`).join("\n")}

## How AI receptionists charge
- Per minute: you buy a bundle of talk minutes and pay overage past it (for example Rosie, Dialzara, Trillet, Phonely, RingCentral, AgentZap).
- Per call: you buy a number of answered calls a month (for example Smith.ai, Upfirst, OnCrew).
- Per unique customer: repeat callers count once (Goodcall).
- Flat plan: one monthly price, sometimes with unlimited calls (for example NextPhone, VirtualPBX).
- Build it yourself: developer platforms bill per minute plus model, voice and phone costs (Retell AI, Vapi, Bland AI).
- Live answering services staffed by people usually cost more per call than the AI plans listed below (Smith.ai live, PATLive, Abby Connect).

## Published prices (${VENDORS.length} vendors, each line shows the date the source was last read)
${VENDORS.map(v => `- ${v.name} [${v.kind === "human" ? "live answering service" : v.kind === "platform" ? "build-it-yourself platform" : "AI receptionist"}]: ${v.price} (${v.model}). Checked ${v.source.map(sourceChecked).sort().slice(-1)[0]}. Source: ${v.source.map(s => SOURCES[s].url).join(", ")}`).join("\n")}

Prices change often. Confirm on the vendor's site before buying.
`;
  return new Response(t, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
