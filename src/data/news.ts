export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  image?: string;
  featured?: boolean;
  body?: string;
}

export const NEWS: NewsArticle[] = [
  {
    id: "trailer-3-analysis",
    slug: "gta-6-trailer-3-frame-by-frame-analysis",
    title: "GTA 6 Trailer 3 — Frame-by-Frame Breakdown of Every Hidden Detail",
    excerpt:
      "Rockstar's third trailer is dense with information. We slowed it down to a crawl and catalogued every vehicle, location and gameplay hint buried in the footage.",
    category: "ANALYSIS",
    author: "A. Hashmi",
    date: "2026-06-04",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=70",
    featured: true,
    body: "Rockstar's third trailer for Grand Theft Auto VI runs just over two minutes, but it is packed with detail that rewards repeat viewing. From the rebuilt lighting model to the dynamic crowd systems on Vice Beach, here is everything we spotted.",
  },
  {
    id: "devolver-release-window",
    slug: "devolver-digital-not-afraid-of-gta-6-release-date",
    title: "Devolver Digital Is the Only Publisher Not Afraid of GTA 6's Release Date",
    excerpt:
      "As November 19, 2026 remains the release date for GTA 6, Take-Two's CEO continues to reassure investors while rival studios reshuffle their calendars.",
    category: "INDUSTRY",
    author: "A. Hashmi",
    date: "2026-06-04",
    body: "While most publishers are quietly moving their fourth-quarter releases away from the GTA 6 launch window, Devolver Digital has taken the opposite approach.",
  },
  {
    id: "preorder-leaks-debunked",
    slug: "gta-6-best-buy-preorder-leaks-debunked",
    title: "Those GTA 6 Best Buy Pre-order Leaks? Zelnick Shut Them Down",
    excerpt:
      "A wave of retailer listings sparked rumours of a delay. Take-Two's leadership moved quickly to confirm the date has not changed.",
    category: "NEWS",
    author: "P. Luu",
    date: "2026-06-04",
    body: "Screenshots of supposed Best Buy pre-order pages circulated over the weekend, suggesting a 2027 slip. Take-Two's response was unambiguous.",
  },
  {
    id: "budget-moat",
    slug: "gta-6-budget-the-moat-no-studio-can-cross",
    title: "GTA 6's Reported Budget Is the Moat No Other Studio Can Cross",
    excerpt:
      "Industry analysts argue the scale of investment behind GTA 6 has created a competitive gap rivals simply cannot close this generation.",
    category: "OPINION",
    author: "P. Luu",
    date: "2026-06-03",
    body: "The numbers attached to Grand Theft Auto VI's development are staggering, and they raise an interesting question about what competition even looks like at this scale.",
  },
];

export const FEATURED_NEWS = NEWS.find((n) => n.featured) ?? NEWS[0];
export const SIDEBAR_NEWS = NEWS.filter((n) => !n.featured).slice(0, 3);
