"use client";
import { useState } from "react";
import { VENDORS, HUMAN_RECEPTIONIST, SOURCES } from "@/lib/data";
const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
export default function Calculator() {
  const [calls, setCalls] = useState(100);
  const [mins, setMins] = useState(3);
  const total = calls * mins;
  const rows = VENDORS.filter(v => v.calc).map(v => {
    const c = v.calc!;
    let cost = "", note = "";
    if (c.type === "flat") { cost = "from " + fmt(c.monthly); note = "Flat starting plan; check limits"; }
    if (c.type === "bundle") { if (total <= c.minutes) { cost = fmt(c.monthly); note = `Fits the ${c.minutes}-minute plan`; } else { cost = "over plan"; note = `Needs more than ${c.minutes} minutes; overage or bigger plan not shown here`; } }
    if (c.type === "perMin") { cost = c.low === c.high ? fmt(total * c.low) : `${fmt(total * c.low)} to ${fmt(total * c.high)}`; note = "Usage only; phone number, setup and build time extra"; }
    return { v, cost, note };
  });
  return (
    <div className="calc">
      <div className="inputs">
        <label>Calls per month <input type="number" min={1} value={calls} onChange={e => setCalls(Math.max(1, +e.target.value))} /></label>
        <label>Average minutes per call <input type="number" min={1} value={mins} onChange={e => setMins(Math.max(1, +e.target.value))} /></label>
        <p><b>{total.toLocaleString("en-US")}</b> minutes per month</p>
      </div>
      <table><thead><tr><th>Option</th><th>Estimated monthly cost</th><th>Note</th><th>Source</th></tr></thead><tbody>
        {rows.map(({ v, cost, note }) => (<tr key={v.slug}><td>{v.name}</td><td>{cost}</td><td>{note}</td><td>{v.source.map(s => <a key={s} href={SOURCES[s].url} target="_blank" rel="noopener nofollow">link </a>)}</td></tr>))}
        <tr><td>Human receptionist (salon average)</td><td>{fmt(HUMAN_RECEPTIONIST.monthly)}</td><td>{HUMAN_RECEPTIONIST.note}</td><td><a href={SOURCES.cloudtalk.url} target="_blank" rel="noopener nofollow">link</a></td></tr>
      </tbody></table>
      <p className="muted">Live answering services at 100 three-minute calls a month, per NextPhone's Oct 5, 2026 table: PATLive about $479, Abby Connect (person) about $898, Smith.ai live about $915. These are estimates from published prices, not quotes. Verify on each vendor site.</p>
    </div>
  );
}
