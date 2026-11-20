// Shared estimate logic for the calculator. Moved verbatim out of
// components/Calculator.tsx so server pages can reuse it; the math is unchanged.
import type { Vendor } from "@/lib/data";

export const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export type Row = { v: Vendor; low: number | null; label: string; note: string; ready: boolean };

export function rowFor(v: Vendor, total: number): Row | null {
  const c = v.calc; if (!c) return null;
  if (c.type === "flat") return { v, low: c.monthly, label: "from " + fmt(c.monthly), note: "Starting plan; check plan limits", ready: true };
  if (c.type === "bundle") return total <= c.minutes
    ? { v, low: c.monthly, label: fmt(c.monthly), note: `Fits the ${c.minutes}-minute plan`, ready: true }
    : { v, low: null, label: "Over plan", note: `Needs more than ${c.minutes} min; larger plan not published in our source`, ready: true };
  if (c.type === "tiers") { const tier = c.tiers.find(x => total <= x.minutes); return tier
    ? { v, low: tier.monthly, label: tier.monthly === 0 ? "$0" : fmt(tier.monthly), note: `Fits the ${tier.minutes.toLocaleString("en-US")}-minute plan`, ready: true }
    : { v, low: null, label: "Over plan", note: `Needs more than ${c.tiers[c.tiers.length - 1].minutes.toLocaleString("en-US")} min; larger plan not published`, ready: true }; }
  return { v, low: total * c.low, label: c.low === c.high ? fmt(total * c.low) : `${fmt(total * c.low)} to ${fmt(total * c.high)}`, note: "Usage only. You build and run the agent; phone and setup extra", ready: false };
}
