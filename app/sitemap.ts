import { TRADES, SITE, LAST_CHECKED } from "@/lib/data";
export const dynamic = "force-static";
// Pages that show prices change whenever lib/data.ts is re-checked, so their lastmod follows LAST_CHECKED.
const STATIC_LASTMOD = "2026-10-18";
export default function sitemap() {
  const data = ["", "/calculator/", "/price-sheet/", "/vendors/", ...TRADES.map(t => `/trades/${t.slug}/`)];
  const fixed = ["/sponsor/", "/newsletter/", "/about/"];
  return [
    ...data.map(x => ({ url: SITE.url + x, lastModified: new Date(LAST_CHECKED), changeFrequency: "daily" as const, priority: x === "" ? 1 : 0.8 })),
    ...fixed.map(x => ({ url: SITE.url + x, lastModified: new Date(STATIC_LASTMOD), changeFrequency: "monthly" as const, priority: 0.3 })),
  ];
}
