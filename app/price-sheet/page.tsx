import { VENDORS, LAST_CHECKED } from "@/lib/data";
import { Src } from "@/components/Src";
import Signup from "@/components/Signup";
export const metadata = { title: "AI receptionist and answering service price sheet", description: `Every published price we track for AI receptionists, voice AI platforms and live answering services, with sources. Updated ${LAST_CHECKED}.` };
const groups: [string, string][] = [["ai", "AI receptionists (ready-made)"], ["platform", "Voice AI platforms (build it yourself)"], ["human", "Live answering services"]];
export default function Page() {
  return (<>
    <h1>The price sheet</h1>
    <p className="lede">Every published starting price we track, with its source. Updated {LAST_CHECKED}. Free, no email needed.</p>
    {groups.map(([k, title]) => (<section key={k}><h2>{title}</h2><div className="tablewrap"><table><thead><tr><th>Vendor</th><th>Published price</th><th className="hide-sm">Model</th><th>Source</th></tr></thead><tbody>
      {VENDORS.filter(v => v.kind === k).map(v => <tr key={v.slug}><td><b>{v.name}</b></td><td>{v.price}</td><td className="hide-sm">{v.model}</td><td><Src keys={v.source} /></td></tr>)}
    </tbody></table></div></section>))}
    <Signup heading="Get this sheet updated monthly" />
  </>);
}
