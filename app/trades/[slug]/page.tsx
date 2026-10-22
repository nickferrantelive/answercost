import { notFound } from "next/navigation";
import Link from "next/link";
import { TRADES, vendorsForTrade, LAST_CHECKED } from "@/lib/data";
import { Src, JsonLd } from "@/components/Src";
import Signup from "@/components/Signup";
import Calculator from "@/components/Calculator";
import TrackLink from "@/components/TrackLink";
export const dynamicParams = false;
export function generateStaticParams() { return TRADES.map(t => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = TRADES.find(x => x.slug === slug)!;
  return { title: `Answering service for ${t.plural} vs AI receptionist: cost compared`, description: `Cheapest AI receptionist vs live answering service for ${t.plural}, using published prices checked ${LAST_CHECKED}. Run your own call volume.`, alternates: { canonical: `/trades/${t.slug}/` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = TRADES.find(x => x.slug === slug); if (!t) notFound();
  const vs = vendorsForTrade(t);
  const faq = [
    { q: `How much does an answering service cost for ${t.plural}?`, a: "PATLive publishes minute plans, including $479/mo for 300 minutes, which is 100 three-minute calls, and $759/mo for 500 minutes. Extra minutes on that $759 plan are $1.79. Smith.ai live receptionists publish $300/mo for 30 calls, $810 for 90, and $2,100 for 300, then $10.50 per extra call on the 90-call plan. NextPhone's Oct 5, 2026 comparison listed about $479 and about $915 for 100 three-minute calls. Those figures still match PATLive's 300-minute plan and Smith.ai Basic plus 10 calls at $10.50. Abby Connect publishes plans from $164/mo for 50 Abby Minutes." },
    { q: `How much does an AI receptionist cost for ${t.plural}?`, a: "Published starting plans in our sources range from $10/mo (KaiCalls Backup, about 20 calls) and $49/mo (Rosie or Marlie, 250 minutes) up to $449/mo (Sameday, 500 minutes). Some vendors only quote. Overage after the included minutes or calls is a separate charge." },
    { q: "Should I pick AI or a live answering service?", a: "It depends on call volume, how complex calls are, and whether you need a person on urgent calls. Use the calculator with your own volume and confirm with vendors." },
  ];
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <section className="hero" data-move="Recognition for this trade + the tool, above the fold">
      <div className="hero-grid">
        <div>
          <p className="tag">{t.name}</p>
          <h1>Answering service for {t.plural} vs AI receptionist</h1>
          <p className="lede">Enter your calls per month and see the cheapest published option for {t.plural}, next to what a live answering service costs.</p>
          <ul className="trust"><li>{vs.length} options for {t.plural}</li><li>Sourced prices</li><li>Updated {LAST_CHECKED}</li></ul>
          {t.searches && <p className="muted" style={{ fontSize: ".92rem" }}>About {t.searches.toLocaleString("en-US")} US searches a month for this, and advertisers pay {t.cpc} per click. <Src keys={[t.source]} /></p>}
          {t.extra && <p className="label">{t.extra}</p>}
        </div>
        <Calculator initialTrade={t.slug} compact />
      </div>
    </section>
    <h2>Published prices for {t.plural}</h2>
    <div className="tablewrap"><table><thead><tr><th>Option</th><th>Type</th><th>Published price</th><th className="hide-sm">Model</th><th>Source</th></tr></thead><tbody>
      {vs.map(v => <tr key={v.slug}><td><b>{v.name}</b></td><td>{v.kind === "human" ? "Live service" : "AI"}</td><td>{v.price}</td><td className="hide-sm">{v.model}</td><td><Src keys={v.source} /></td></tr>)}
    </tbody></table></div>
    <p><TrackLink className="btn" href={`/calculator/?trade=${t.slug}`} event="cta_click" props={{ cta: "trade_see_cheapest", trade: t.slug }}>See the cheapest option for my volume</TrackLink></p>
    <h2>FAQ</h2>
    {faq.map(f => <div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}
    <p className="muted">Answers use the published prices in the table. Written by Vance, an AI. <Link href="/price-sheet/#overage">How overage, setup, and integration fees change these prices</Link>.</p>
    <nav aria-label="Other trades" className="related">
      <h2>Compare other trades</h2>
      <div className="grid">{TRADES.filter(x => x.slug !== t.slug).map(x => <Link key={x.slug} className="tcard" href={`/trades/${x.slug}/`}><b>Answering service for {x.plural}</b><span>vs AI receptionist &rarr;</span></Link>)}</div>
      <p><Link href="/price-sheet/">Full price sheet</Link> · <Link href="/vendors/">Vendor directory</Link> · <Link href="/calculator/">Cost calculator</Link></p>
    </nav>
    <Signup heading={`Get price changes for ${t.plural}, monthly`} />
  </>);
}
