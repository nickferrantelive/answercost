import { TRADES, SITE } from "@/lib/data";
export const dynamic = "force-static";
export default function sitemap() {
  const p = ["", "/calculator/", "/vendors/", "/sponsor/", "/newsletter/", "/about/", ...TRADES.map(t => `/trades/${t.slug}/`)];
  return p.map(x => ({ url: SITE.url + x, lastModified: new Date("2026-10-16") }));
}
