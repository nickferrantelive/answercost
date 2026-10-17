"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { VENDORS, TRADES, HUMAN_RECEPTIONIST, SOURCES, LAST_CHECKED as CHECKED, vendorsForTrade, Vendor } from "@/lib/data";
const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
type Row = { v: Vendor; low: number | null; label: string; note: string; ready: boolean };
function rowFor(v: Vendor, total: number): Row | null {
  const c = v.calc; if (!c) return null;
  if (c.type === "flat") return { v, low: c.monthly, label: "from " + fmt(c.monthly), note: "Starting plan; check plan limits", ready: true };
  if (c.type === "bundle") return total <= c.minutes
    ? { v, low: c.monthly, label: fmt(c.monthly), note: `Fits the ${c.minutes}-minute plan`, ready: true }
    : { v, low: null, label: "Over plan", note: `Needs more than ${c.minutes} min; larger plan not published in our source`, ready: true };
  if (c.type === "tiers") { const tier = c.tiers.find(x => total <= x.minutes); return tier
    ? { v, low: tier.monthly, label: tier.monthly === 0 ? "$0" : fmt(tier.monthly), note: `Fits the ${tier.minutes.toLocaleString("en-US")}-minute plan`, ready: true }
    : { v, low: null, label: "Over plan", note: `Needs more than ${c.tiers[c.tiers.length - 1].minutes.toLocaleString("en-US")} min; larger plan not published`, ready: true }; }
  return { v, low: total * c.low, label: c.low === c.high ? fmt(total * c.low) : `${fmt(total * c.low)} to ${fmt(total * c.high)}`, note: "Usage only. You build and run the agent; phone and setup extra", ready: false };
}
export default function Calculator({ initialTrade = "", compact = false }: { initialTrade?: string; compact?: boolean }) {
  const [calls, setCalls] = useState(100);
  const [mins, setMins] = useState(3);
  const [trade, setTrade] = useState(initialTrade);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("calls")) setCalls(Math.max(1, +p.get("calls")!));
    if (p.get("mins")) setMins(Math.max(1, +p.get("mins")!));
    if (p.get("trade")) setTrade(p.get("trade")!);
  }, []);
  const total = calls * mins;
  const first = useRef(true); const sent = useRef(false);
  useEffect(() => { if (first.current) { first.current = false; return; } if (sent.current) return; const id = setTimeout(() => { sent.current = true; track("calculator_used", { trade: trade || "all", calls: String(calls), mins: String(mins) }); }, 1200); return () => clearTimeout(id); }, [calls, mins, trade]);
  const t = TRADES.find(x => x.slug === trade);
  const pool = t ? [...vendorsForTrade(t), ...VENDORS.filter(v => v.kind === "platform")] : VENDORS;
  const rows = useMemo(() => pool.map(v => rowFor(v, total)).filter(Boolean).sort((a, b) => (a!.low ?? 1e9) - (b!.low ?? 1e9)) as Row[], [pool, total]);
  const best = rows.find(r => r.ready && r.low !== null);
  return (
    <div className="calc card" id="calculator">
      <div className="inputs">
        <label>Calls per month<input type="number" inputMode="numeric" min={1} value={calls} onChange={e => setCalls(Math.max(1, +e.target.value || 1))} /></label>
        <label>Minutes per call<input type="number" inputMode="numeric" min={1} value={mins} onChange={e => setMins(Math.max(1, +e.target.value || 1))} /></label>
        <label style={{ gridColumn: "1 / -1" }}>Your trade<select value={trade} onChange={e => setTrade(e.target.value)}><option value="">All businesses</option>{TRADES.map(x => <option key={x.slug} value={x.slug}>{x.name}</option>)}</select></label>
      </div>
      <div className="result" aria-live="polite">
        <div className="muted">{total.toLocaleString("en-US")} minutes a month. Cheapest ready-made AI receptionist that fits:</div>
        {best ? <div><span className="big">{best.label}/mo</span> <b>{best.v.name}</b> <small>({best.v.price})</small></div> : <div><b>No published starting plan fits this volume.</b> Compare the full table.</div>}
        <div className="muted" style={{ marginTop: 6 }}>For comparison, live answering services cost about $479 to $915 for 100 three-minute calls (published prices, <a href={SOURCES.nextphone.url} target="_blank" rel="noopener nofollow">NextPhone table</a>). A salon receptionist averages {fmt(HUMAN_RECEPTIONIST.monthly)}/mo (<a href={SOURCES.cloudtalk.url} target="_blank" rel="noopener nofollow">source</a>).</div>
      </div>
      {!compact && <div className="tablewrap"><table><thead><tr><th>Option</th><th>Est. monthly</th><th className="hide-sm">Note</th><th>Source</th><th></th></tr></thead><tbody>
        {rows.map(r => { const href = r.v.affiliateUrl || r.v.website; return (<tr key={r.v.slug} className={r === best ? "best" : ""}><td><b>{r.v.name}</b><br /><span className="tag">{r.ready ? "Ready-made" : "Build it yourself"}</span></td><td>{r.label}</td><td className="hide-sm">{r.note}</td><td className="src">{r.v.source.map((s, i) => <a key={s} href={SOURCES[s].url} target="_blank" rel="noopener nofollow">[{i + 1}]</a>)}</td><td>{href && <a className="btn sm ghost" href={href} target="_blank" rel={r.v.affiliateUrl ? "sponsored noopener" : "noopener nofollow"} onClick={() => track("cta_click", { cta: "vendor_visit", vendor: r.v.slug })}>Visit</a>}</td></tr>); })}
      </tbody></table></div>}
      <p className="muted" style={{ fontSize: ".85rem", marginBottom: 0 }}>Published starting prices, checked {CHECKED}. Estimates, not quotes. Overages and add-ons not modeled. {compact && <a onClick={() => track("cta_click", { cta: "calc_full_table" })} href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/calculator/?calls=${calls}&mins=${mins}${trade ? "&trade=" + trade : ""}`}>See every option in the full table</a>}</p>
    </div>
  );
}
