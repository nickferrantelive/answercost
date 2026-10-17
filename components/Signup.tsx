"use client";
import { useState } from "react";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Signup({ heading = "Get the monthly AI receptionist price-change report" }: { heading?: string }) {
  const [msg, setMsg] = useState<React.ReactNode>("");
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true);
    const email = new FormData(e.currentTarget).get("email");
    const sheet = <a href={`${base}/price-sheet/`}>Open the price sheet now</a>;
    try {
      const r = await fetch(base + "/api/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email }) });
      const j = await r.json().catch(() => ({}));
      setMsg(r.ok ? <>You are in. The first report goes out with the next monthly price check. {sheet}.</> : r.status === 400 ? j.error : <>Email signup opens soon. Meanwhile, the full price sheet is free: {sheet}.</>);
    } catch { setMsg(<>Email signup opens soon. {sheet}.</>); }
    setBusy(false);
  }
  return (
    <section className="signup" aria-labelledby="su-h">
      <h2 id="su-h">{heading}</h2>
      <p>Once a month: which AI receptionist and answering service prices changed, new tools worth a look, and the cheapest option per trade. Free. Unsubscribe anytime.</p>
      <ul><li>Every price linked to its source and check date</li><li>Free now: the full <a href={`${base}/price-sheet/`}>price sheet</a>, no email needed</li></ul>
      <form onSubmit={submit}><label htmlFor="su-email" className="sr">Email</label><input id="su-email" name="email" type="email" required placeholder="you@business.com" autoComplete="email" /><button className="btn" disabled={busy}>{busy ? "Sending..." : "Send me the monthly report"}</button></form>
      {msg && <p role="status" style={{ marginBottom: 0 }}>{msg}</p>}
    </section>
  );
}
