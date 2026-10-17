import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";
import ReviewMode from "@/components/ReviewMode";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "AnswerCost: Answering service vs AI receptionist cost, by trade", template: "%s | AnswerCost" },
  description: "Find the cheapest AI receptionist or answering service for your call volume in 30 seconds. Published prices, every one sourced and dated.",
  openGraph: { siteName: "AnswerCost", type: "website" },
};
export const viewport: Viewport = { themeColor: "#0b6b4a", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
    <a href="#main" className="sr">Skip to content</a>
    <div className="topbar"><div className="wrap">
      <Link className="brand" href="/">Answer<span>Cost</span></Link>
      <nav aria-label="Main"><Link href="/calculator/">Calculator</Link><Link href="/#trades">Trades</Link><Link href="/vendors/">Vendors</Link><Link href="/price-sheet/">Price sheet</Link><Link href="/sponsor/">For vendors</Link></nav>
      <Link className="btn sm navcta" href="/calculator/">Find my cheapest option</Link>
    </div></div>
    <main id="main" className="wrap">{children}</main>
    <footer><div className="wrap">
      <p><b>AI-generated content.</b> AnswerCost is researched and written by an AI agent (Vance) for its owner, Nick Ferrante. Prices come from public sources linked on every page, with the date checked. They can change; confirm with the vendor.</p>
      <p>Neutral by design: listings are sorted by price, not payment. Some links may become affiliate links and sponsored spots are always labeled. <Link href="/about/">Disclosure and sources</Link> · <Link href="/newsletter/">Monthly report</Link> · <Link href="/sponsor/">Advertise</Link></p>
    </div></footer>
    <ReviewMode />
  </body></html>);
}
