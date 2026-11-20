import Link from "next/link";
import { TRADES, SITE, SOURCES, LAST_CHECKED, VENDORS, vendorsForTrade } from "@/lib/data";
import { TradeIcon, ArrowIcon, CheckIcon, CrossIcon } from "@/components/Icons";
import Signup from "@/components/Signup";
import Calculator from "@/components/Calculator";
import { JsonLd } from "@/components/Src";
import TrackLink from "@/components/TrackLink";
import { formatDate } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/");
const aiMonthlyPrices: number[] = VENDORS.flatMap(v => {
  if (v.kind !== "ai" || !v.calc) return [];
  const c = v.calc;
  if (c.type === "tiers") return c.tiers.map(t => t.monthly);
  if (c.type === "flat" || c.type === "bundle") return [c.monthly];
  return [];
});
const lowestPaidAiMonthly = Math.min(...aiMonthlyPrices.filter(p => p > 0));
export default function Home() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url }} />
    <section className="hero hero-home" data-move="Recognition + tool-page engine: one question, answered on the spot">
      <div className="hero-grid">
        <div>
          <h1>Stop overpaying to <mark className="hl hl-h1">answer your phone.</mark></h1>
          <p className="lede">See what an AI receptionist costs next to a live answering service for your call volume and trade. Paid AI plans start at ${Math.round(lowestPaidAiMonthly).toLocaleString("en-US")} a month, but they cap your minutes, so the plan that fits your calls often costs more.</p>
          <p className="sources">Sources: <a href={SOURCES.nextphone.url} target="_blank" rel="noopener nofollow">NextPhone</a>, <a href={SOURCES.justcall.url} target="_blank" rel="noopener nofollow">JustCall</a>, <a href={SOURCES.snow.url} target="_blank" rel="noopener nofollow">The Snow Media</a> and <Link href="/about/">more</Link>. <Link href="/price-sheet/#overage">How overage, setup, and integration fees change a quote</Link>.</p>
        </div>
        <Calculator compact />
        <ul className="trust" data-move="Trust: legitimate proof only, no testimonials">
          <li>{VENDORS.length} options compared</li><li>Every price sourced</li><li>Prices checked {formatDate(LAST_CHECKED)}</li><li>Sorted by price, not payment</li>
        </ul>
      </div>
    </section>
    <section id="trades" className="band" data-reveal data-move="Route by situation: each trade gets its own page and CTA">
      <h2>Pick your trade, see the cheapest option</h2>
      <div className="grid trades">{TRADES.map(t => (<TrackLink key={t.slug} className="tcard" href={`/trades/${t.slug}/`} event="cta_click" props={{ cta: "home_trade_card", trade: t.slug }}><TradeIcon slug={t.slug} className="tcard-ico" /><b>{t.name}</b><span>{vendorsForTrade(t).length} options <ArrowIcon className="ico" /></span></TrackLink>))}</div>
    </section>
    <section className="band" data-reveal data-move="Disqualify: honest fit check instead of fake scarcity">
      <h2>Who this is for</h2>
      <div className="fit">
        <div className="fit-yes"><h3><CheckIcon className="ico" /> Good fit</h3><p>Owners of small service businesses who miss calls on the job and want a phone answered without paying for a full-time receptionist.</p></div>
        <div className="fit-no"><h3><CrossIcon className="ico" /> Not a fit</h3><p>Large call centers, or anyone who needs a custom quote today. We show published starting prices, not negotiated deals.</p></div>
      </div>
    </section>
    <Signup />
  </>);
}
