import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Footprints, Gem, Layers, LayoutGrid, Palette, Shirt, Tags } from "lucide-react";

export type FilterDimension = "type" | "color" | "brand";
export type ItemCategoryId = "top" | "bottom" | "footwear" | "accessory" | "outwear";
export type CategoryId = "all" | ItemCategoryId;
export type CollectionId = "summer" | "sport" | "winter";
export type CollectionSelection = CollectionId | null;

export type WardrobeItem = {
  id: string;
  title: string;
  category: ItemCategoryId;
  type: string;
  color: string;
  brand: string;
  collectionIds: CollectionId[];
  dateAdded: string;
};

export type CategoryDefinition = {
  id: CategoryId;
  title: string;
  Icon: LucideIcon;
};

export type CollectionDefinition = {
  id: CollectionId;
  title: string;
};

export type DimensionDefinition = {
  id: FilterDimension;
  title: string;
  Icon: LucideIcon;
};

export const collectionDefinitions: CollectionDefinition[] = [
  { id: "summer", title: "Summer" },
  { id: "sport", title: "Sport" },
  { id: "winter", title: "Winter" },
];

export const categoryDefinitions: CategoryDefinition[] = [
  { id: "all", title: "All", Icon: LayoutGrid },
  { id: "top", title: "Tops", Icon: Shirt },
  { id: "bottom", title: "Bottoms", Icon: Layers },
  { id: "footwear", title: "Footwear", Icon: Footprints },
  { id: "accessory", title: "Accessories", Icon: Gem },
  { id: "outwear", title: "Outwear", Icon: Layers },
];

export const dimensionDefinitions: DimensionDefinition[] = [
  { id: "type", title: "Type", Icon: Tags },
  { id: "color", title: "Color", Icon: Palette },
  { id: "brand", title: "Brand", Icon: BadgeCheck },
];

export const collectionTitleById: Record<CollectionId, string> = {
  summer: "Summer",
  sport: "Sport",
  winter: "Winter",
};

export const wardrobeItems: WardrobeItem[] = [
  {
    id: "item-01",
    title: "Linen Shirt",
    category: "top",
    type: "Shirt",
    color: "White",
    brand: "Uniqlo",
    collectionIds: ["summer"],
    dateAdded: "2026-01-29",
  },
  {
    id: "item-02",
    title: "Running Tee",
    category: "top",
    type: "T-Shirt",
    color: "Blue",
    brand: "Nike",
    collectionIds: ["summer", "sport"],
    dateAdded: "2026-02-02",
  },
  {
    id: "item-03",
    title: "Silk Blouse",
    category: "top",
    type: "Blouse",
    color: "Red",
    brand: "Chanel",
    collectionIds: ["summer"],
    dateAdded: "2025-12-22",
  },
  {
    id: "item-04",
    title: "Denim Jeans",
    category: "bottom",
    type: "Jeans",
    color: "Indigo",
    brand: "Levi's",
    collectionIds: ["summer", "winter"],
    dateAdded: "2026-01-16",
  },
  {
    id: "item-05",
    title: "Jogger Pants",
    category: "bottom",
    type: "Pants",
    color: "Gray",
    brand: "Adidas",
    collectionIds: ["sport", "winter"],
    dateAdded: "2026-02-05",
  },
  {
    id: "item-06",
    title: "Training Shorts",
    category: "bottom",
    type: "Shorts",
    color: "Black",
    brand: "Nike",
    collectionIds: ["summer", "sport"],
    dateAdded: "2026-01-31",
  },
  {
    id: "item-07",
    title: "City Sneakers",
    category: "footwear",
    type: "Sneakers",
    color: "White",
    brand: "Nike",
    collectionIds: ["summer", "sport"],
    dateAdded: "2026-02-01",
  },
  {
    id: "item-08",
    title: "Leather Boots",
    category: "footwear",
    type: "Boots",
    color: "Black",
    brand: "Zara",
    collectionIds: ["winter"],
    dateAdded: "2025-11-24",
  },
  {
    id: "item-09",
    title: "Beach Sandals",
    category: "footwear",
    type: "Sandals",
    color: "Beige",
    brand: "H&M",
    collectionIds: ["summer"],
    dateAdded: "2025-08-15",
  },
  {
    id: "item-10",
    title: "Baseball Cap",
    category: "accessory",
    type: "Hat",
    color: "Navy",
    brand: "Adidas",
    collectionIds: ["summer", "sport"],
    dateAdded: "2026-02-04",
  },
  {
    id: "item-11",
    title: "Wool Scarf",
    category: "accessory",
    type: "Scarf",
    color: "Gray",
    brand: "Uniqlo",
    collectionIds: ["winter"],
    dateAdded: "2025-12-03",
  },
  {
    id: "item-12",
    title: "Sunglasses",
    category: "accessory",
    type: "Eyewear",
    color: "Black",
    brand: "Gucci",
    collectionIds: ["summer"],
    dateAdded: "2025-07-11",
  },
  {
    id: "item-13",
    title: "Wool Coat",
    category: "outwear",
    type: "Coat",
    color: "Camel",
    brand: "Burberry",
    collectionIds: ["winter"],
    dateAdded: "2025-12-28",
  },
  {
    id: "item-14",
    title: "Light Trench",
    category: "outwear",
    type: "Trench",
    color: "Beige",
    brand: "Burberry",
    collectionIds: ["summer", "winter"],
    dateAdded: "2025-10-10",
  },
];
