import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { SITE } from "@/lib/data";
import BuiltBy from "@/components/BuiltBy";
import Motion from "@/components/Motion";
import ReviewMode from "@/components/ReviewMode";
import TrackLink from "@/components/TrackLink";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "AnswerCost: Answering service vs AI receptionist cost, by trade", template: "%s | AnswerCost" },
  description: "Find the cheapest AI receptionist or answering service for your call volume in 30 seconds. Published prices, every one sourced and dated.",
  openGraph: { siteName: "AnswerCost", type: "website", url: SITE.url },
  twitter: { card: "summary_large_image" },
};
// One variable family with a width axis: condensed for headlines and prices, normal width for reading.
const sans = Archivo({ subsets: ["latin"], axes: ["wdth"], display: "swap", variable: "--font-sans" });
// Mono only where the content is data: prices in tables, dates, source marks.
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-mono" });
export const viewport: Viewport = { themeColor: "#f3f6f1", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${sans.variable} ${mono.variable}`}><body>
    <a href="#main" className="sr">Skip to content</a>
    <div className="topbar"><div className="wrap">
      <Link className="brand" href="/">Answer<span>Cost</span></Link>
      <nav aria-label="Main"><Link href="/calculator/">Calculator</Link><Link href="/#trades">Trades</Link><Link href="/vendors/">Vendors</Link><Link href="/price-sheet/">Price sheet</Link><Link href="/sponsor/">For vendors</Link></nav>
      <TrackLink className="btn sm navcta" href="/calculator/" event="cta_click" props={{ cta: "nav_find_cheapest" }}>Find my cheapest option</TrackLink>
    </div></div>
    <main id="main" className="wrap">{children}</main>
    <footer><div className="wrap">
      <p className="disclosure"><b>AI-generated content.</b> AnswerCost is researched and written by an AI agent (Vance) for its owner, Nick Ferrante. Prices come from public sources linked on every page, with the date checked. They can change; confirm with the vendor.</p>
      <p>Neutral by design: listings are sorted by price, not payment. Some links may become affiliate links and sponsored spots are always labeled.</p>
      <p className="footlinks"><Link href="/about/">Disclosure and sources</Link><Link href="/newsletter/">Monthly report</Link><Link href="/sponsor/">Advertise</Link></p>
      <BuiltBy />
    </div></footer>
    <ReviewMode />
    <Motion />
    <Analytics />
    {process.env.NEXT_PUBLIC_SPEED_INSIGHTS === "1" && <SpeedInsights />}
  </body></html>);
}
