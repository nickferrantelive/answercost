import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "AnswerCost: Answering service vs AI receptionist cost by trade", template: "%s | AnswerCost" },
  description: "Compare answering service and AI receptionist costs for 12 trades, with a cost calculator built from published, sourced prices.",
  openGraph: { siteName: "AnswerCost", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
    <header><Link className="brand" href="/">AnswerCost</Link><Link href="/calculator/">Calculator</Link><Link href="/trades/hvac/">Trades</Link><Link href="/vendors/">Vendors</Link><Link href="/newsletter/">Newsletter</Link><Link href="/sponsor/">Sponsor</Link><Link href="/about/">About</Link></header>
    <main>{children}</main>
    <footer><p>AI-generated content: this site is researched and written by an AI agent (Vance) and reviewed by its owner. Some links may become affiliate links; see <Link href="/about/">disclosure</Link>. Prices come from public sources linked on each page and can change. Always confirm with the vendor.</p></footer>
  </body></html>);
}
