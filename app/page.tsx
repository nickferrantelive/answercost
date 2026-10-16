import Link from "next/link";
import { TRADES, SITE, SOURCES } from "@/lib/data";
import Signup from "@/components/Signup";
import { JsonLd } from "@/components/Src";
export default function Home() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url }} />
    <h1>Answering service vs AI receptionist: what it costs for your trade</h1>
    <p>{SITE.tagline} Every price on this site links to a public source with the date we checked it.</p>
    <p><Link href="/calculator/"><button>Open the cost calculator</button></Link></p>
    <h2>Why this matters</h2>
    <p>Owners still mostly search for an answering service, not AI: about 78% of typical-month searches across 12 industries asked for an answering service, and about 11% for an AI receptionist <a href={SOURCES.teamshift.url} target="_blank" rel="noopener nofollow">(Teamshift)</a>. Published AI receptionist plans start around $29 to $49 a month, while live answering services run hundreds of dollars for 100 calls <a href={SOURCES.nextphone.url} target="_blank" rel="noopener nofollow">(NextPhone table)</a>.</p>
    <h2>Pick your trade</h2>
    <div className="grid">{TRADES.map(t => (<Link key={t.slug} className="card" href={`/trades/${t.slug}/`}><b>{t.name}</b><br /><small>Answering service vs AI receptionist</small></Link>))}</div>
    <Signup />
  </>);
}
