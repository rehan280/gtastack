/**
 * FAQ data — powers both the visible Accordion and the FAQPage JSON-LD
 * structured data. Concise, factual answers here directly improve AEO
 * (Answer Engine Optimization) for AI assistants and Google rich results.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "When is GTA 6 coming out?",
    answer:
      "Grand Theft Auto VI is scheduled to release on November 19, 2026. Rockstar Games and publisher Take-Two Interactive have repeatedly reaffirmed this date.",
  },
  {
    question: "What platforms will GTA 6 be available on?",
    answer:
      "GTA 6 will launch on PlayStation 5 and Xbox Series X|S at release. A PC version is widely expected to follow at a later date, consistent with Rockstar's past launches.",
  },
  {
    question: "Where is GTA 6 set?",
    answer:
      "GTA 6 is set in the fictional state of Leonida, a modern reimagining of Florida, with Vice City as its central metropolis. The map is the largest in the series to date.",
  },
  {
    question: "Who are the main characters in GTA 6?",
    answer:
      "GTA 6 stars Lucia and Jason, the first playable female protagonist in the main series. Their story is presented as a modern Bonnie-and-Clyde crime saga across Leonida.",
  },
  {
    question: "Is there a GTA 6 multiplayer or online mode?",
    answer:
      "Rockstar has confirmed an online component is planned. Details remain limited, but it is expected to build on the live-service foundation established by GTA Online.",
  },
  {
    question: "How big is the GTA 6 map?",
    answer:
      "While Rockstar has not given exact figures, the GTA 6 map covering Leonida and Vice City is reported to be the largest and most detailed open world the studio has ever built.",
  },
];
