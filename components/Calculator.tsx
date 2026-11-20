"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { VENDORS, TRADES, HUMAN_RECEPTIONIST, SOURCES, LAST_CHECKED as CHECKED, vendorsForTrade } from "@/lib/data";
import { fmt, rowFor, Row } from "@/lib/calc";
import { formatDate } from "@/lib/date";
import { ArrowIcon } from "@/components/Icons";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
  // The next ready-made plans that fit, for the short ladder under the answer.
  const next = compact ? rows.filter(r => r.ready && r.low !== null && r !== best).slice(0, 3) : [];
  const ladderMax = Math.max(1, ...next.map(r => r.low as number));

  // Signature moment: the answer rolls to its new value when an input changes.
  // The real price is always in the markup first; the roll only enhances it.
  const target = best ? (best.low as number) : null;
  const numRef = useRef<HTMLSpanElement>(null);
  const shown = useRef<number | null>(null);
  useEffect(() => {
    const from = shown.current; shown.current = target;
    const node = numRef.current?.firstChild;
    if (target === null || from === null || from === target || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now(); const dur = 420; let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur); const e = 1 - Math.pow(1 - p, 4);
      node.nodeValue = fmt(from + (target - from) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); node.nodeValue = fmt(target); };
  }, [target]);

  return (
    <div className={"calc" + (compact ? " calc-compact" : "")} id="calculator">
      <div className="inputs">
        <label>Calls per month<input type="number" inputMode="numeric" min={1} value={calls} onChange={e => setCalls(Math.max(1, +e.target.value || 1))} /></label>
        <label>Minutes per call<input type="number" inputMode="numeric" min={1} value={mins} onChange={e => setMins(Math.max(1, +e.target.value || 1))} /></label>
        <label className="span2">Your trade<select value={trade} onChange={e => setTrade(e.target.value)}><option value="">All businesses</option>{TRADES.map(x => <option key={x.slug} value={x.slug}>{x.name}</option>)}</select></label>
      </div>
      <div className="result">
        <div aria-live="polite">
          <p className="result-q">{total.toLocaleString("en-US")} minutes a month. Cheapest ready-made AI receptionist that fits:</p>
          {best ? <>
            <p className="sr">{best.label}/mo, {best.v.name}</p>
            <p className="big" aria-hidden="true"><mark className="hl hl-price" key={best.v.slug + ":" + best.low}>{best.label.startsWith("from ") && <span className="from">from </span>}<span ref={numRef} className="num">{fmt(best.low as number)}</span><span className="per">/mo</span></mark></p>
            <p className="result-who"><b>{best.v.name}</b> <small>({best.v.price})</small></p>
          </> : <p className="result-who"><b>No published starting plan fits this volume.</b> Compare the full table.</p>}
        </div>
        {next.length > 0 && <div className="ladder">
          <p className="ladder-h">Next cheapest ready-made plans</p>
          <ol>{next.map(r => (<li key={r.v.slug}><span className="ladder-name">{r.v.name}</span><span className="ladder-bar" style={{ transform: `scaleX(${Math.max(0.04, (r.low as number) / ladderMax)})` }} /><span className="ladder-price">{r.label}</span></li>))}</ol>
        </div>}
        <p className="result-compare">For comparison, live answering services cost about $479 to $915 for 100 three-minute calls (published prices, <a href={SOURCES.nextphone.url} target="_blank" rel="noopener nofollow">NextPhone table</a>). A salon receptionist averages {fmt(HUMAN_RECEPTIONIST.monthly)}/mo (<a href={SOURCES.cloudtalk.url} target="_blank" rel="noopener nofollow">source</a>).</p>
      </div>
      {compact && <a className="btn block" onClick={() => track("cta_click", { cta: "calc_full_table" })} href={`${base}/calculator/?calls=${calls}&mins=${mins}${trade ? "&trade=" + trade : ""}`}>See every option in the full table <ArrowIcon className="ico" /></a>}
      {!compact && <div className="tablewrap"><table className="stack" role="table"><thead role="rowgroup"><tr role="row"><th role="columnheader">Option</th><th role="columnheader">Est. monthly</th><th role="columnheader">Note</th><th role="columnheader">Source</th><th role="columnheader"><span className="sr">Visit</span></th></tr></thead><tbody role="rowgroup">
        {rows.map(r => { const href = r.v.affiliateUrl || r.v.website; return (<tr role="row" key={r.v.slug} className={r === best ? "best" : ""}><td role="cell" className="cell-name"><b>{r.v.name}</b><br /><span className="tag">{r.ready ? "Ready-made" : "Build it yourself"}</span></td><td role="cell" data-label="Est. monthly" className="cell-price"><span className={r === best ? "hl" : undefined}>{r.label}</span></td><td role="cell" data-label="Note">{r.note}</td><td role="cell" data-label="Source"><span className="src">{r.v.source.map((s, i) => <a key={s} href={SOURCES[s].url} target="_blank" rel="noopener nofollow">[{i + 1}]</a>)}</span></td><td role="cell" className="cell-cta">{href && <a className="btn sm ghost" href={href} target="_blank" rel={r.v.affiliateUrl ? "sponsored noopener" : "noopener nofollow"} onClick={() => track("cta_click", { cta: "vendor_visit", vendor: r.v.slug })}>Visit<span className="sr"> {r.v.name}</span></a>}</td></tr>); })}
      </tbody></table></div>}
      <p className="fine">Published starting prices, checked {formatDate(CHECKED)}. Estimates, not quotes. Overages and add-ons not modeled. <a href={`${base}/price-sheet/#overage`}>How overage, setup, and integration fees change a quote</a>.</p>
    </div>
  );
}
