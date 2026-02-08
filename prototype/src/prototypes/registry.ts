import type { ComponentType } from "react";
import { SandboxPrototype } from "./sandbox";
import { WardrobeFilteringPrototype } from "./wardrobe-filtering";

export type PrototypeDefinition = {
  slug: string;
  title: string;
  description: string;
  component: ComponentType;
};

export const prototypeList: PrototypeDefinition[] = [
  {
    slug: "wardrobe-filtering",
    title: "Wardrobe Filtering",
    description: "Three-level wardrobe filter interaction with collection context and swipe tabs.",
    component: WardrobeFilteringPrototype,
  },
  {
    slug: "sandbox",
    title: "Sandbox",
    description: "General-purpose interactive screen for rapid prototyping checks.",
    component: SandboxPrototype,
  },
];

export const prototypeMap = new Map(
  prototypeList.map((prototype) => [prototype.slug, prototype]),
);
