/**
 * Central site configuration used for SEO, AEO (Answer Engine Optimization),
 * structured data and navigation. Edit values here once and they propagate
 * across every page.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  description: string;
  defaultOgImage: string;
  locale: string;
  twitterHandle: string;
  themeColor: string;
  keywords: string[];
}

export const SITE: SiteConfig = {
  name: "GTA STACK",
  shortName: "GTA STACK",
  // IMPORTANT: keep in sync with `site` in astro.config.mjs
  url: "https://gtastack.com",
  description:
    "GTA STACK is the complete Grand Theft Auto VI wiki, database and resource — vehicles, weapons, characters, maps, release date countdown and breaking news for Vice City and Leonida.",
  defaultOgImage: "/og/gta-stack-og.jpg",
  locale: "en_US",
  twitterHandle: "@gtastack",
  themeColor: "#0a0a0c",
  keywords: [
    "GTA 6",
    "Grand Theft Auto VI",
    "GTA 6 wiki",
    "GTA 6 database",
    "GTA 6 vehicles",
    "GTA 6 map",
    "Vice City",
    "Leonida",
    "GTA 6 release date",
    "GTA 6 news",
  ],
};

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Database", href: "/database", icon: "database" },
  { label: "Vehicles", href: "/vehicles", icon: "directions_car" },
  { label: "Map", href: "/map", icon: "map" },
  { label: "News", href: "/news", icon: "newspaper" },
  { label: "Guides", href: "/guides", icon: "menu_book" },
];

/** Release date used for the countdown HUD. */
export const GTA6_RELEASE_DATE = "2026-11-19T00:00:00Z";
