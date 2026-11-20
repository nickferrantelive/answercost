import type { Metadata } from "next";

// The root metadataBase resolves paths against SITE.url. Page-level Open Graph
// objects replace inherited values, so retain the shared file image explicitly.
export function pageMetadata(path: string): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: { siteName: "AnswerCost", type: "website", url: path, images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }] },
  };
}
