import { SITE } from "@/config/site";
import type { FaqItem } from "@/data/faq";

/** Build absolute URL from a path against the site origin. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/favicon.svg"),
    sameAs: [
      "https://twitter.com/gtastack",
      "https://www.youtube.com/@gtastack",
      "https://www.reddit.com/r/gtastack",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export interface BreadcrumbEntry {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  url: string;
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: input.headline,
    description: input.description,
    image: [input.image],
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { "@type": "Person", name: input.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.svg") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.url) },
  };
}

export interface VideoGameSchemaInput {
  releaseDate: string;
}

export function videoGameSchema(input: VideoGameSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Grand Theft Auto VI",
    alternateName: "GTA 6",
    description:
      "Grand Theft Auto VI is an upcoming open-world action-adventure game by Rockstar Games, set in the state of Leonida and the city of Vice City.",
    gamePlatform: ["PlayStation 5", "Xbox Series X|S", "PC"],
    publisher: { "@type": "Organization", name: "Rockstar Games" },
    datePublished: input.releaseDate,
    genre: ["Action-adventure", "Open world"],
    applicationCategory: "Game",
  };
}
