"use client";
import Link from "next/link";
import { track } from "@vercel/analytics";
type P = { href: string; event: string; props?: Record<string, string>; className?: string; children: React.ReactNode; external?: boolean; rel?: string };
export default function TrackLink({ href, event, props, className, children, external, rel }: P) {
  const onClick = () => track(event, props);
  return external
    ? <a href={href} className={className} target="_blank" rel={rel} onClick={onClick}>{children}</a>
    : <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}
