import { GO_LIVE, SITE_LAST_UPDATED } from "@/lib/data";
import { formatDate } from "@/lib/date";

// The owner credit line. Its look lives in the --builtby-* variables at the top of
// the ".builtby" block in app/globals.css, so it can be restyled in one place.
export default function BuiltBy() {
  return (
    <p className="builtby">
      <span>Built by <a href="https://ai-evolution.space/">Nick Ferrante</a></span>
      <span>Go-live: {formatDate(GO_LIVE)}</span>
      <span>Last updated: {formatDate(SITE_LAST_UPDATED)}</span>
    </p>
  );
}
