import { pageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/date";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TRADES, vendorsForTrade, LAST_CHECKED } from "@/lib/data";
import { Src, JsonLd } from "@/components/Src";
import Signup from "@/components/Signup";
import Calculator from "@/components/Calculator";
import TrackLink from "@/components/TrackLink";
import { TradeIcon, ArrowIcon } from "@/components/Icons";
export const dynamicParams = false;
export function generateStaticParams() { return TRADES.map(t => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = TRADES.find(x => x.slug === slug)!;
  return { title: `Answering service for ${t.plural} vs AI receptionist: cost compared`, description: `Cheapest AI receptionist vs live answering service for ${t.plural}, using published prices checked ${formatDate(LAST_CHECKED)}. Run your own call volume.`, ...pageMetadata(`/trades/${t.slug}/`) };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = TRADES.find(x => x.slug === slug); if (!t) notFound();
  const vs = vendorsForTrade(t);
  const faq = [
    { q: `How much does an answering service cost for ${t.plural}?`, a: "PATLive publishes minute plans, including $479/mo for 300 minutes, which is 100 three-minute calls, and $759/mo for 500 minutes. Extra minutes on that $759 plan are $1.79. Smith.ai live receptionists publish $300/mo for 30 calls, $810 for 90, and $2,100 for 300, then $10.50 per extra call on the 90-call plan. NextPhone's Oct 5, 2026 comparison listed about $479 and about $915 for 100 three-minute calls. Those figures still match PATLive's 300-minute plan and Smith.ai Basic plus 10 calls at $10.50. Abby Connect publishes plans from $164/mo for 50 Abby Minutes." },
    { q: `How much does an AI receptionist cost for ${t.plural}?`, a: "Published starting plans in our sources range from $10/mo (KaiCalls Backup, about 20 calls) and $49/mo (Rosie or Marlie, 250 minutes) up to $449/mo (Sameday, 500 minutes). Some vendors only quote. Overage after the included minutes or calls is a separate charge when the vendor publishes one. KaiCalls and VirtualPBX list no per-minute overage." },
    { q: "Should I pick AI or a live answering service?", a: "It depends on call volume, how complex calls are, and whether you need a person on urgent calls. Use the calculator with your own volume and confirm with vendors." },
  ];
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <section className="hero" data-move="Recognition for this trade + the tool, above the fold">
      <div className="hero-grid">
        <div>
          <p className="tag tag-trade"><TradeIcon slug={t.slug} className="ico" /> {t.name}</p>
          <h1>Answering service for {t.plural} vs AI receptionist</h1>
          <p className="lede">Enter your calls per month and see the cheapest published option for {t.plural}, next to what a live answering service costs.</p>
          <ul className="trust"><li>{vs.length} options for {t.plural}</li><li>Sourced prices</li><li>Updated {formatDate(LAST_CHECKED)}</li></ul>
          {t.searches && <p className="sources">About {t.searches.toLocaleString("en-US")} US searches a month for this, and advertisers pay {t.cpc} per click. <Src keys={[t.source]} /></p>}
          {t.extra && <p className="label">{t.extra}</p>}
        </div>
        <Calculator initialTrade={t.slug} compact />
      </div>
    </section>
    <section className="band" data-reveal>
    <h2>Published prices for {t.plural}</h2>
    <div className="tablewrap"><table className="stack" role="table"><thead role="rowgroup"><tr role="row"><th role="columnheader">Option</th><th role="columnheader">Type</th><th role="columnheader">Published price</th><th role="columnheader">Model</th><th role="columnheader">Source</th></tr></thead><tbody role="rowgroup">
      {vs.map(v => <tr role="row" key={v.slug}><td role="cell" className="cell-name"><b>{v.name}</b></td><td role="cell" data-label="Type">{v.kind === "human" ? "Live service" : "AI"}</td><td role="cell" data-label="Published price">{v.price}</td><td role="cell" data-label="Model">{v.model}</td><td role="cell" data-label="Source"><Src keys={v.source} /></td></tr>)}
    </tbody></table></div>
    <p className="after"><TrackLink className="btn" href={`/calculator/?trade=${t.slug}`} event="cta_click" props={{ cta: "trade_see_cheapest", trade: t.slug }}>See the cheapest option for my volume <ArrowIcon className="ico" /></TrackLink></p>
    </section>
    <section className="band faq" data-reveal>
    <h2>FAQ</h2>
    {faq.map(f => <div className="qa" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}
    <p className="muted">Answers use the published prices in the table. Written by Vance, an AI. <Link href="/price-sheet/#overage">How overage, setup, and integration fees change these prices</Link>.</p>
    </section>
    <nav aria-label="Other trades" className="related band" data-reveal>
      <h2>Compare other trades</h2>
      <div className="grid trades">{TRADES.filter(x => x.slug !== t.slug).map(x => <Link key={x.slug} className="tcard" href={`/trades/${x.slug}/`}><TradeIcon slug={x.slug} className="tcard-ico" /><b>Answering service for {x.plural}</b><span>vs AI receptionist <ArrowIcon className="ico" /></span></Link>)}</div>
      <p className="footlinks"><Link href="/price-sheet/">Full price sheet</Link><Link href="/vendors/">Vendor directory</Link><Link href="/calculator/">Cost calculator</Link></p>
    </nav>
    <Signup heading={`Get price changes for ${t.plural}, monthly`} />
  </>);
}
