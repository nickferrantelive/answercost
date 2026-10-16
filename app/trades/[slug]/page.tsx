import { notFound } from "next/navigation";
import Link from "next/link";
import { TRADES, vendorsForTrade, SOURCES, CHECKED } from "@/lib/data";
import { Src, JsonLd } from "@/components/Src";
import Signup from "@/components/Signup";
export const dynamicParams = false;
export function generateStaticParams() { return TRADES.map(t => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = TRADES.find(x => x.slug === slug)!;
  return { title: `Answering service for ${t.plural} vs AI receptionist: cost compared`, description: `Compare live answering services and AI receptionists for ${t.plural}, with sourced prices checked ${CHECKED}.`, alternates: { canonical: `/trades/${t.slug}/` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = TRADES.find(x => x.slug === slug); if (!t) notFound();
  const vs = vendorsForTrade(t);
  const faq = [
    { q: `How much does an answering service cost for ${t.plural}?`, a: "Published estimates for 100 three-minute calls a month: PATLive about $479, Abby Connect (person) about $898, Smith.ai live about $915, per NextPhone's Oct 5, 2026 comparison." },
    { q: `How much does an AI receptionist cost for ${t.plural}?`, a: "Published starting plans in our sources range from $29/mo (Dialzar) and $49/mo (Rosie, 250 minutes) up to $449/mo (Sameday, 500 minutes). Some vendors only quote." },
    { q: "Should I pick AI or a live answering service?", a: "It depends on call volume, how complex calls are, and whether you need a person on urgent calls. Use the calculator with your own volume and confirm with vendors." },
  ];
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <h1>Answering service for {t.plural} vs AI receptionist</h1>
    <p className="muted">Last checked {CHECKED}. Prices are published starting prices from linked sources, not quotes.</p>
    {t.searches && <p>Search demand: about {t.searches.toLocaleString("en-US")} US searches a month, average click cost {t.cpc}. Top keyword: {t.topKeyword}. <Src keys={[t.source]} /></p>}
    {t.extra && <p>{t.extra}</p>}
    <h2>Options and published prices</h2>
    <table><thead><tr><th>Option</th><th>Type</th><th>Published price</th><th>Pricing model</th><th>Source</th></tr></thead><tbody>
      {vs.map(v => <tr key={v.slug}><td>{v.name}</td><td>{v.kind === "human" ? "Live answering service" : "AI receptionist"}</td><td>{v.price}</td><td>{v.model}</td><td><Src keys={v.source} /></td></tr>)}
    </tbody></table>
    <p><Link href="/calculator/">Run your own call volume in the calculator</Link>.</p>
    <h2>FAQ</h2>
    {faq.map(f => <div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}
    <Signup />
  </>);
}
