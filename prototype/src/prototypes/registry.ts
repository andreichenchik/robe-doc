import type { ComponentType } from "react";
import { SandboxPrototype } from "./sandbox";

export type PrototypeDefinition = {
  slug: string;
  title: string;
  description: string;
  component: ComponentType;
};

export const prototypeList: PrototypeDefinition[] = [
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
