import Link from "next/link";
import TrackLink from "@/components/TrackLink";
import { SITE, SOURCES, TRADES } from "@/lib/data";
export const metadata = { title: "Advertise to owners comparing AI receptionists", description: "Sponsor placements on AnswerCost trade pages, calculator and monthly price report. Labeled, neutral, priced flat." };
const total = TRADES.filter(t => t.source === "teamshift").reduce((a, t) => a + (t.searches || 0), 0);
export default function Page() {
  const link = SITE.stripeSponsorLink;
  return (<>
    <section className="hero" data-move="Selective vendor engine: assume belief, show the buyer, price it, disqualify">
      <p className="tag">For AI receptionist and answering service vendors</p>
      <h1>Be in front of owners at the moment they compare.</h1>
      <p className="lede">AnswerCost visitors arrive with one question: what will answering my phone cost? Your placement sits next to the answer.</p>
    </section>
    <h2>The buyers searching this</h2>
    <div className="cols">
      <div className="card"><div className="price">~{total.toLocaleString("en-US")}</div><p>US searches a month for answering service and AI receptionist terms across 11 trades we cover. <a href={SOURCES.teamshift.url} target="_blank" rel="noopener nofollow">Teamshift</a></p></div>
      <div className="card"><div className="price">~$216</div><p>Average Google cost per click across the 12 industries in the study, up to about $405 for law firms. <a href={SOURCES.teamshift.url} target="_blank" rel="noopener nofollow">Teamshift</a></p></div>
      <div className="card"><div className="price">+203%</div><p>Year-over-year growth in "ai receptionist" searches, 12 months to June 2026. <a href={SOURCES.credminds.url} target="_blank" rel="noopener nofollow">Credminds</a></p></div>
    </div>
    <p className="muted">These are market numbers, not AnswerCost traffic. The site launched in October 2026; we will share our own visitor and subscriber counts with every sponsor before they pay.</p>
    <h2>Placements and launch pricing</h2>
    <div className="cols">
      <div className="card"><h3>Trade page feature</h3><div className="price">$149<small>/mo per trade</small></div><p>A labeled "Sponsored" card above the price table on one trade page, for example HVAC or dental.</p></div>
      <div className="card"><h3>Calculator feature</h3><div className="price">$299<small>/mo</small></div><p>A labeled sponsored row under the calculator result, on every page that shows the calculator.</p></div>
      <div className="card"><h3>Monthly report</h3><div className="price">$99<small>/issue</small></div><p>Your logo and one line in the monthly price-change report email.</p></div>
    </div>
    <h2>What we will not sell</h2>
    <ul className="not"><li>Rank. Tables stay sorted by published price.</li><li>Edits to your price or a competitor's. Prices come from public sources only.</li><li>Unlabeled placements or fake reviews.</li></ul>
    <h2>Book a slot</h2>
    {link ? <p><TrackLink className="btn" href={link} external rel="noopener" event="sponsor_cta_click" props={{ cta: "book_slot" }}>Book a sponsor slot</TrackLink></p> : <p className="label">Checkout opens soon. Placements start once checkout is live.</p>}
    <p className="muted">Questions about fit? See our <Link href="/about/">disclosure</Link>.</p>
  </>);
}
