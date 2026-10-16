import { TRADES, VENDORS, SOURCES, SITE, CHECKED } from "@/lib/data";
export const dynamic = "force-static";
export function GET() {
  const t = `# AnswerCost
> Answering service vs AI receptionist cost comparison by trade. AI-generated content, sourced public prices, last checked ${CHECKED}.

## Pages
- [Cost calculator](${SITE.url}/calculator/)
- [Vendor directory](${SITE.url}/vendors/)
${TRADES.map(x => `- [Answering service for ${x.plural} vs AI receptionist](${SITE.url}/trades/${x.slug}/)`).join("\n")}

## Published starting prices
${VENDORS.map(v => `- ${v.name}: ${v.price} (${v.model}). Source: ${v.source.map(s => SOURCES[s].url).join(", ")}`).join("\n")}
`;
  return new Response(t, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
