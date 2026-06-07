export interface VehicleStat {
  label: string;
  value: number; // out of 10
  accent: "primary" | "secondary" | "tertiary";
}

export interface Vehicle {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  description: string;
  image: string;
  estValue: string;
  topSpeed: string;
  stats: VehicleStat[];
  featured?: boolean;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "vapid-dominator-gtx",
    name: "Vapid Dominator GTX",
    manufacturer: "Vapid",
    category: "Muscle",
    description:
      "American muscle reborn. The Dominator GTX trades raw nostalgia for tuned aggression — a thunderous V8 wrapped in retro-modern bodywork built for the Leonida highways.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=70",
    estValue: "¢1,250,000",
    topSpeed: "152 mph",
    featured: true,
    stats: [
      { label: "Speed", value: 9, accent: "secondary" },
      { label: "Accel", value: 8.5, accent: "secondary" },
      { label: "Handling", value: 7, accent: "tertiary" },
    ],
  },
  {
    id: "imponte-deluxo-neon",
    name: "Imponte Deluxo Neon",
    manufacturer: "Imponte",
    category: "Sports Classic",
    description:
      "The quintessential symbol of 80s excess. Retuned for modern streets, this classic sports car offers unmatched aesthetic appeal with surprisingly competitive straight-line performance.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=70",
    estValue: "¢865,000",
    topSpeed: "138 mph",
    featured: true,
    stats: [
      { label: "Speed", value: 8.5, accent: "secondary" },
      { label: "Accel", value: 7.8, accent: "secondary" },
      { label: "Handling", value: 6.5, accent: "tertiary" },
    ],
  },
  {
    id: "pegassi-zentorno-x",
    name: "Pegassi Zentorno X",
    manufacturer: "Pegassi",
    category: "Super",
    description:
      "A razor-edged hypercar built for the Vice City strip. The Zentorno X carves corners with telepathic precision and embarrasses anything in its rearview mirror.",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=900&q=70",
    estValue: "¢2,400,000",
    topSpeed: "171 mph",
    featured: true,
    stats: [
      { label: "Speed", value: 10, accent: "primary" },
      { label: "Accel", value: 9.5, accent: "primary" },
      { label: "Handling", value: 9, accent: "primary" },
    ],
  },
  {
    id: "liberty-city-cycles-avarus",
    name: "Liberty City Cycles Avarus",
    manufacturer: "LCC",
    category: "Motorcycle",
    description:
      "A long, low chopper dripping with chrome. The Avarus is pure boulevard intimidation — slow to corner, but unforgettable on the strip.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=70",
    estValue: "¢420,000",
    topSpeed: "121 mph",
    stats: [
      { label: "Speed", value: 7, accent: "secondary" },
      { label: "Accel", value: 8, accent: "secondary" },
      { label: "Handling", value: 5.5, accent: "tertiary" },
    ],
  },
];

export const FEATURED_VEHICLES = VEHICLES.filter((v) => v.featured);
