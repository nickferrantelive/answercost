export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}));
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, aud = process.env.RESEND_AUDIENCE_ID;
  if (!key || !aud) return Response.json({ error: "Signup is not live yet. Check back soon." }, { status: 503 });
  const r = await fetch(`https://api.resend.com/audiences/${aud}/contacts`, { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ email, unsubscribed: false }) });
  return r.ok ? Response.json({ ok: true }) : Response.json({ error: "Could not subscribe right now." }, { status: 502 });
}
