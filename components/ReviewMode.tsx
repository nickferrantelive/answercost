"use client";
import { useEffect } from "react";
// Internal review layer: add ?review=1 to any URL to see the conversion move behind each section.
export default function ReviewMode() {
  useEffect(() => { if (new URLSearchParams(location.search).get("review") === "1") document.querySelectorAll("[data-move]").forEach(el => el.classList.add("review")); }, []);
  return null;
}
