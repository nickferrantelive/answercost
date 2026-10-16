import { VENDORS } from "@/lib/data";
import { Src, JsonLd } from "@/components/Src";
export const metadata = { title: "AI receptionist and answering service vendor directory", description: "Every vendor we track with published prices, pricing model and source links." };
export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: VENDORS.map((v, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "SoftwareApplication", name: v.name, applicationCategory: "BusinessApplication", ...(v.website ? { url: v.website } : {}) } })) }} />
    <h1>Vendor directory</h1>
    <p>Listings are not ranked. Links marked "partner link" may earn us a commission at no cost to you.</p>
    <table><thead><tr><th>Vendor</th><th>Type</th><th>Published price</th><th>Model</th><th>Notes</th><th>Source</th><th>Visit</th></tr></thead><tbody>
      {VENDORS.map(v => { const href = v.affiliateUrl || v.website; return (<tr key={v.slug} id={v.slug}><td>{v.name}</td><td>{v.kind}</td><td>{v.price}</td><td>{v.model}</td><td>{v.notes}</td><td><Src keys={v.source} /></td><td>{href ? <a href={href} target="_blank" rel={v.affiliateUrl ? "sponsored noopener" : "noopener nofollow"}>{v.affiliateUrl ? "Visit (partner link)" : "Visit"}</a> : "n/a"}</td></tr>); })}
    </tbody></table>
  </>);
}
