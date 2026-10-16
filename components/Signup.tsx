"use client";
import { useState } from "react";
export default function Signup() {
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    try {
      const r = await fetch((process.env.NEXT_PUBLIC_BASE_PATH || "") + "/api/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email }) });
      const j = await r.json().catch(() => ({}));
      setMsg(r.ok ? "Thanks. You are on the list." : j.error || "Signup is not live yet. Check back soon.");
    } catch { setMsg("Signup is not live yet. Check back soon."); }
  }
  return (
    <form onSubmit={submit} className="signup">
      <label htmlFor="email">Weekly email: new prices, new tools, what changed.</label>
      <div><input id="email" name="email" type="email" required placeholder="you@business.com" /> <button>Subscribe</button></div>
      {msg && <p>{msg}</p>}
    </form>
  );
}
