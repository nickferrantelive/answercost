"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Scroll reveals as enhancement only. Everything is visible by default, so no-JS
// readers, crawlers and full-page screenshots always get the whole page. Reveals
// arm on the reader's first scroll, and only for blocks still below the fold.
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let io: IntersectionObserver | null = null;
    const armed: Element[] = [];
    const arm = () => {
      const fold = window.innerHeight * 1.05;
      const els = Array.from(document.querySelectorAll("[data-reveal]")).filter(el => el.getBoundingClientRect().top > fold);
      if (!els.length) return;
      io = new IntersectionObserver(entries => {
        for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io?.unobserve(e.target); }
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
      for (const el of els) { el.classList.add("pre"); armed.push(el); io.observe(el); }
    };
    window.addEventListener("scroll", arm, { once: true, passive: true });
    return () => {
      window.removeEventListener("scroll", arm);
      io?.disconnect();
      for (const el of armed) el.classList.remove("pre", "in");
    };
  }, [pathname]);
  return null;
}
