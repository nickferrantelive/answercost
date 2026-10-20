import { VENDORS, LAST_CHECKED } from "@/lib/data";
import { Src, JsonLd } from "@/components/Src";
import Signup from "@/components/Signup";
export const metadata = { title: "AI receptionist and answering service price sheet", description: `Every published price we track for AI receptionists, voice AI platforms and live answering services, with sources. Updated ${LAST_CHECKED}.` };
const groups: [string, string][] = [["ai", "AI receptionists (ready-made)"], ["platform", "Voice AI platforms (build it yourself)"], ["human", "Live answering services"]];
const faq = [
  { q: "How much does an AI receptionist cost per month?", a: "Published plans we track start at about $10 to $50 a month for a small bundle of calls or minutes, for example KaiCalls Backup at $10 for about 20 calls, AI-Receptionist.com at $14 for 75 minutes, and Rosie at $49 for 250 minutes. Higher tiers run from about $150 to $900 a month." },
  { q: "How much does a live answering service cost?", a: "Live answering services staffed by people cost more per call. Published figures we track put 100 three-minute calls at about $479 with PATLive, about $898 with Abby Connect and about $915 with Smith.ai live receptionists." },
  { q: "Is it cheaper to build my own AI receptionist on a voice AI platform?", a: "Developer platforms bill per minute, for example Retell AI at $0.07 to $0.31 a minute and Bland AI at $0.14 a minute, plus setup work. They suit teams that can build and maintain the agent themselves." },
  { q: "How do AI receptionists charge?", a: "Most sell minute bundles with per-minute overage. Some charge per answered call (Smith.ai, Upfirst, OnCrew), per unique caller (Goodcall), or a flat monthly price (NextPhone)." },
];
export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <h1>The price sheet</h1>
    <p className="lede">Every published starting price we track, with its source. Updated {LAST_CHECKED}. Free, no email needed.</p>
    {groups.map(([k, title]) => (<section key={k}><h2>{title}</h2><div className="tablewrap"><table><thead><tr><th>Vendor</th><th>Published price</th><th className="hide-sm">Model</th><th>Source</th></tr></thead><tbody>
      {VENDORS.filter(v => v.kind === k).map(v => <tr key={v.slug}><td><b>{v.name}</b></td><td>{v.price}</td><td className="hide-sm">{v.model}</td><td><Src keys={v.source} /></td></tr>)}
    </tbody></table></div></section>))}
    <section><h2>Common questions</h2>{faq.map(f => (<div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>))}<p className="muted">Answers summarize the published prices above as of {LAST_CHECKED}. Written by Vance, an AI.</p></section>
    <Signup heading="Get this sheet updated monthly" />
  </>);
}
