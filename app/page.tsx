import Link from "next/link";
import { TRADES, SITE, SOURCES, LAST_CHECKED, VENDORS } from "@/lib/data";
import Signup from "@/components/Signup";
import Calculator from "@/components/Calculator";
import { JsonLd } from "@/components/Src";
import TrackLink from "@/components/TrackLink";
export default function Home() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url }} />
    <section className="hero" data-move="Recognition + tool-page engine: one question, answered on the spot">
      <div className="hero-grid">
        <div>
          <h1>Stop overpaying to answer your phone.</h1>
          <p className="lede">See what an AI receptionist costs next to a live answering service for your call volume and trade. Published AI plans start from about $10 to $50 a month, while live services run hundreds for 100 calls.</p>
          <ul className="trust" data-move="Trust: legitimate proof only, no testimonials">
            <li>{VENDORS.length} options compared</li><li>Every price sourced</li><li>Updated {LAST_CHECKED}</li><li>Sorted by price, not payment</li>
          </ul>
          <p className="muted" style={{ fontSize: ".9rem" }}>Sources: <a href={SOURCES.nextphone.url} target="_blank" rel="noopener nofollow">NextPhone</a>, <a href={SOURCES.justcall.url} target="_blank" rel="noopener nofollow">JustCall</a>, <a href={SOURCES.snow.url} target="_blank" rel="noopener nofollow">The Snow Media</a> and <Link href="/about/">more</Link>.</p>
        </div>
        <Calculator compact />
      </div>
    </section>
    <section id="trades" data-move="Route by situation: each trade gets its own page and CTA">
      <h2>Pick your trade, see the cheapest option</h2>
      <div className="grid">{TRADES.map(t => (<TrackLink key={t.slug} className="tcard" href={`/trades/${t.slug}/`} event="cta_click" props={{ cta: "home_trade_card", trade: t.slug }}><b>{t.name}</b><span>Compare costs &rarr;</span></TrackLink>))}</div>
    </section>
    <section data-move="Disqualify: honest fit check instead of fake scarcity">
      <h2>Who this is for</h2>
      <div className="cols">
        <div className="card"><h3>Good fit</h3><p>Owners of small service businesses who miss calls on the job and want a phone answered without paying for a full-time receptionist.</p></div>
        <div className="card not"><h3>Not a fit</h3><p>Large call centers, or anyone who needs a custom quote today. We show published starting prices, not negotiated deals.</p></div>
      </div>
    </section>
    <Signup />
  </>);
}
