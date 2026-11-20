// Hand-drawn line icons, one stroke weight (1.6) on a 24px grid. No icon CDN.
import type { ReactNode } from "react";

const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, focusable: false as const };

const TRADE: Record<string, ReactNode> = {
  // scales
  "law-firms": <><path d="M12 3.5v17M7.5 20.5h9M4.5 7h15" /><path d="M4.5 7 2 13h5L4.5 7zM2 13a2.5 2.5 0 0 0 5 0M19.5 7 17 13h5l-2.5-6zM17 13a2.5 2.5 0 0 0 5 0" /></>,
  // outdoor condenser unit
  hvac: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9.5" cy="12" r="3.5" /><path d="M9.5 8.5v7M6 12h7M16.5 9.5h2M16.5 12h2M16.5 14.5h2M6 19v1.5M18 19v1.5" /></>,
  // apartment block
  "property-management": <><path d="M5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 5v15.5M3 20.5h18" /><path d="M9 7.5h1.5M13.5 7.5H15M9 11.5h1.5M13.5 11.5H15M10.5 20.5v-4.5h3v4.5" /></>,
  // faucet with a drip
  plumbers: <><path d="M3.5 8h9a4.5 4.5 0 0 1 4.5 4.5V14M3.5 5.5v5M14.5 14h5M8 8V5M6 5h4" /><path d="M17 17c1 1.3 1.5 2.1 1.5 2.8a1.5 1.5 0 0 1-3 0c0-.7.5-1.5 1.5-2.8z" /></>,
  // tooth
  dentists: <path d="M12 5c-1.2-.8-2.3-1.5-3.8-1.5C5.7 3.5 4 5.5 4 8c0 2.2 1 3.4 1.4 5.8.4 2.4.5 6.7 2.2 6.7S9 15.5 12 15.5s2.7 5 4.4 5 1.8-4.3 2.2-6.7C19 11.4 20 10.2 20 8c0-2.5-1.7-4.5-4.2-4.5-1.5 0-2.6.7-3.8 1.5z" />,
  // car
  automotive: <><path d="M5 16.5H3.5v-3.3c0-.6.4-1.1 1-1.3l1.7-.5L8.3 7h7.4l2.1 4.4 1.7.5c.6.2 1 .7 1 1.3v3.3H19M10 16.5h4M6.2 11.4h11.6" /><circle cx="7.5" cy="16.5" r="2" /><circle cx="16.5" cy="16.5" r="2" /></>,
  // yard sign
  "real-estate": <><path d="M6 21V4M6 6.5h12M9.5 6.5v2.5M15.5 6.5v2.5" /><rect x="8" y="9" width="9" height="6.5" rx="1" /><path d="M10.5 12.3h4" /></>,
  // scissors
  salons: <><circle cx="6" cy="7" r="2.5" /><circle cx="6" cy="17" r="2.5" /><path d="M8.2 8.3 20 18M8.2 15.7 20 6" /></>,
  // paw
  veterinarians: <><circle cx="6.3" cy="10.3" r="1.6" /><circle cx="9.8" cy="6.5" r="1.6" /><circle cx="14.2" cy="6.5" r="1.6" /><circle cx="17.7" cy="10.3" r="1.6" /><path d="M12 12c-2.8 0-5 2.5-5 4.8 0 1.5 1.1 2.4 2.5 2.4 1 0 1.6-.5 2.5-.5s1.5.5 2.5.5c1.4 0 2.5-.9 2.5-2.4 0-2.3-2.2-4.8-5-4.8z" /></>,
  // bolt
  electricians: <path d="M13.5 2.5 5 13.5h6l-1 8 8.5-11h-6l1-8z" />,
  // shingled roof
  roofers: <><path d="M2.5 13 12 5l9.5 8" /><path d="M5.5 10.5V19.5h13v-9M16.5 8.8V5.5H19v5.4" /><path d="M8.5 12.5h7M7 15.5h10" /></>,
  // medical cross
  "medical-offices": <><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M12 8v8M8 12h8" /></>,
};

export function TradeIcon({ slug, className }: { slug: string; className?: string }) {
  return <svg {...base} className={className}>{TRADE[slug] ?? <circle cx="12" cy="12" r="8" />}</svg>;
}
export function ArrowIcon({ className }: { className?: string }) {
  return <svg {...base} className={className}><path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" /></svg>;
}
export function CheckIcon({ className }: { className?: string }) {
  return <svg {...base} strokeWidth={2} className={className}><path d="M4.5 12.5l5 5L19.5 7" /></svg>;
}
export function CrossIcon({ className }: { className?: string }) {
  return <svg {...base} strokeWidth={2} className={className}><path d="M6 6l12 12M18 6 6 18" /></svg>;
}
