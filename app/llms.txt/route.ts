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
- Per minute: you buy a bundle of talk minutes and pay overage past it (for example Rosie, Marlie, Dialzara, Trillet, Phonely, RingCentral, AgentZap).
- Per call: you buy a number of answered calls a month (for example Smith.ai, Upfirst, OnCrew).
- Per unique customer: repeat callers count once (Goodcall).
- Per unit: the vendor defines the unit. Newo counts a voice call of 30 seconds to 3 minutes as 1 unit, then bills longer calls in 3-minute increments.
- Flat plan: one monthly price, sometimes with unlimited calls (for example NextPhone, VirtualPBX).
- Add-on: the receptionist price sits on another subscription (for example Jobber, Allo, RingCentral on RingEX).
- Build it yourself: developer platforms bill per minute plus model, voice and phone costs (Retell AI, Vapi, Bland AI). Retell's plan card is $0.07 to $0.31 per minute. Its component table also lists speech-to-speech rates of $0.345 and $0.38 per minute.
- Live answering services staffed by people usually cost more per call than the AI plans listed below. PATLive sells minute plans, starting at pay as you go $49/mo plus $2.99/min. Smith.ai live sells call bundles from $300/mo for 30 calls. Abby Connect sells Abby Minutes from $164/mo for 50.

## How to compare a quote
Split every quote into setup, usage, and integration before comparing monthly prices. Worked examples: ${SITE.url}/price-sheet/#overage. Vendor directory: ${SITE.url}/vendors/

- Setup is a one-time fee. AgentZap lists $499, waived on a 6-month Professional term. Smith.ai live receptionists, Abby Connect, Allo, and Newo say there is no setup fee. A missing setup line is not the same as zero.
- Usage is the included minutes, calls, unique customers, or units, plus overage. Marlie is $49/mo for 250 minutes then $0.35/min, $99 for 500 then $0.35/min, $199 for 1,000 then $0.30/min, and $399 for 2,000 then $0.25/min. Newo pay as you go is $0/mo with 50 units once, then $1.75 each. Newo's AI Receptionist plan is $299/mo for 200 units, then $1.50 each. PATLive pay as you go is $49/mo plus $2.99/min. Smith.ai live overage is $11.50, $10.50, or $8.50 per extra call. On PATLive, 400 extra minutes at $1.79 equals $716, and the $759 plan plus $716 equals $1,475 before government taxes and fees. That is $24 less than the $1,499 plan for 1,000 minutes, at 900 minutes of use.
- A minute, a call, and a unit are not interchangeable. Rosie at $149 is the 1,000-minute plan, not unlimited. Jobber Receptionist is a $29/mo add-on, and the pricing page does not publish included conversations or an overage rate.
- Integration is a phone plan, a CRM, or a software subscription required before the receptionist price applies. Jobber requires a Jobber plan. Plus includes the receptionist and is listed from $280/mo when prepaid annually.

## Published prices (${VENDORS.length} vendors, each line shows the date the source was last read)
${VENDORS.map(v => `- ${v.name} [${v.kind === "human" ? "live answering service" : v.kind === "platform" ? "build-it-yourself platform" : "AI receptionist"}]: ${v.price} (${v.model}). Checked ${v.source.map(sourceChecked).sort().slice(-1)[0]}. Source: ${v.source.map(s => SOURCES[s].url).join(", ")}`).join("\n")}

Prices change often. Confirm on the vendor's site before buying.
`;
  return new Response(t, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
