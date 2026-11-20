"use client";
import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { CheckIcon } from "@/components/Icons";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Signup({ heading = "Get the monthly AI receptionist price-change report" }: { heading?: string }) {
  const [msg, setMsg] = useState<React.ReactNode>("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<{ email: string; at: string } | null>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (done) doneRef.current?.focus(); }, [done]);
  const sheet = <a href={`${base}/price-sheet/`}>Open the price sheet now</a>;
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (busy) return; setBusy(true); setMsg("");
    const email = String(new FormData(e.currentTarget).get("email") || "");
    try {
      const r = await fetch(base + "/api/subscribe/", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) { track("newsletter_signup", { page: location.pathname }); setDone({ email, at: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) }); }
      else setMsg(r.status === 400 ? j.error : <>Email signup opens soon. Meanwhile, the full price sheet is free: {sheet}.</>);
    } catch { setMsg(<>We couldn&apos;t confirm whether that went through. Your email is still in the box, so you can try again.</>); }
    setBusy(false);
  }
  return (
    <section className="signup" aria-labelledby="su-h">
      <div className="signup-copy">
        <h2 id="su-h">{heading}</h2>
        <p>Once a month: which AI receptionist and answering service prices changed, new tools worth a look, and the cheapest option per trade. Free. Unsubscribe anytime.</p>
        <ul><li>Every price linked to its source and check date</li><li>Free now: the full <a href={`${base}/price-sheet/`}>price sheet</a>, no email needed</li></ul>
      </div>
      <div className="signup-form">
        {done ? (
          <div className="sent" role="status" tabIndex={-1} ref={doneRef}>
            <p className="sent-h"><CheckIcon className="ico" /> You are in.</p>
            <p>The first report goes out with the next monthly price check. {sheet}.</p>
            <p className="sent-meta">Signed up {done.email} at {done.at}. No need to send it again.</p>
            <button type="button" className="btn ghost sm" onClick={() => { setDone(null); setMsg(""); }}>Add another email</button>
          </div>
        ) : (
          <form onSubmit={submit} aria-busy={busy}>
            <label htmlFor="su-email">Email</label>
            <div className="signup-row">
              <input id="su-email" name="email" type="email" required placeholder="you@business.com" autoComplete="email" />
              <button className="btn" disabled={busy}>{busy ? "Sending..." : "Send me the monthly report"}</button>
            </div>
            {msg && <p role="alert" className="signup-msg">{msg}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
