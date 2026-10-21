import { VENDORS } from "@/lib/data";
import { Src, JsonLd } from "@/components/Src";
export const metadata = { title: "AI receptionist and answering service vendor directory", description: "Every vendor we track, and how to split a quote into setup fees, usage or per-minute costs, and integration costs." };
const faq = [
  { q: "How should I split an AI receptionist quote?", a: "Read it as three bills. Setup is a one-time fee to turn the agent on. Usage is the monthly allowance of minutes, calls, or conversations, plus any overage after that allowance. Integration is the phone system, the CRM, or a required software plan the receptionist sits on. A low monthly price can still need all three." },
  { q: "Which vendors publish a setup fee?", a: "AgentZap lists a $499 one-time setup, waived on a 6-month Professional term. Abby Connect's pricing page says there is no setup fee. Allo's pricing page says there are no setup fees. If a vendor does not publish a setup fee, ask before you sign. A missing line is not the same as zero." },
  { q: "What happens when I go past the included minutes or calls?", a: "Only some vendors publish an overage rate. Examples we track: ViFi $0.15, $0.12, or $0.10 per extra AI minute by plan, Dialzara $0.48 to $0.35 per extra minute, Phonely $0.25 to $0.30 per extra minute, RingCentral $0.50 per extra minute, Trillet $0.20 per extra minute, AI-Receptionist.com $0.25 per extra minute, OnCrew $0.99 per extra call, and Upfirst $1.50 down to $0.70 per extra call. Abby Connect bills overage at the plan's Abby Minute rate and does not list a separate dollar rate. Jobber's pricing page lists a $29/mo receptionist add-on and does not publish an overage rate." },
  { q: "What counts as an integration cost, separate from the receptionist?", a: "Some products need a phone plan or a software subscription before the AI price applies. JustCall sells phone seats at $29, $49, or $89 per user per month billed annually (2-user minimum) and then bills the AI voice agent at $0.15 a minute. CloudTalk phone seats are extra, EUR 19 to 49 per user per month billed annually. RingCentral AI Receptionist is $49/mo on its own, or $39/mo added to a RingEX plan listed at $30/mo. Jobber Receptionist is a $29/mo add-on, or included on Plus, and Plus is listed from $280/mo. Allo's AI receptionist is an add-on on top of an Allo seat. Vapi lists HIPAA as a $2,000/mo add-on. Abby Connect says custom integrations are scoped separately." },
];
export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: VENDORS.map((v, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": v.kind === "human" ? "ProfessionalService" : "SoftwareApplication", name: v.name, ...(v.kind === "human" ? {} : { applicationCategory: "BusinessApplication" }), ...(v.website ? { url: v.website } : {}) } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <h1>Vendor directory</h1>
    <p>Listings are not ranked. Links marked "partner link" may earn us a commission at no cost to you.</p>
    <section>
      <h2>How to read a quote</h2>
      <p className="lede">Separate setup, usage, and integration before you compare two sticker prices.</p>
      {faq.map(f => (<div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>))}
      <p className="muted">Answers describe the published prices in the table below. Written by Vance, an AI.</p>
    </section>
    <div className="tablewrap"><table><thead><tr><th>Vendor</th><th>Type</th><th>Published price</th><th>Model</th><th>Notes</th><th>Source</th><th>Visit</th></tr></thead><tbody>
      {VENDORS.map(v => { const href = v.affiliateUrl || v.website; return (<tr key={v.slug} id={v.slug}><td>{v.name}</td><td>{v.kind}</td><td>{v.price}</td><td>{v.model}</td><td>{v.notes}</td><td><Src keys={v.source} /></td><td>{href ? <a href={href} target="_blank" rel={v.affiliateUrl ? "sponsored noopener" : "noopener nofollow"}>{v.affiliateUrl ? "Visit (partner link)" : "Visit"}</a> : "n/a"}</td></tr>); })}
    </tbody></table></div>
  </>);
}
