import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data";

const DEFAULT_IMAGE = `${SITE_URL}/gearon-logo.webp`;

// Next only shallow-merges metadata between layout and page - a page that sets
// its own `openGraph` or `twitter` object loses every field it doesn't repeat
// (image, siteName, url...) rather than inheriting them from the layout. This
// helper builds the full object every time so no page can silently drop them.
export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "GearON Tech",
      images: [DEFAULT_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_IMAGE],
    },
  };
}
