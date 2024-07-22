import { routesMap } from "@/constants/routes-map";

const hrefCategory = (slug: string) => `${routesMap.products}?category=${slug}`;

export const categories = [
  {
    title: "Paineis",
    slug: "paineis",
    href: hrefCategory("paineis"),
  },
  {
    title: "Módulos",
    slug: "modulos",
    href: hrefCategory("modulos"),
  },
  {
    title: "Inversores",
    slug: "inversores",
    href: hrefCategory("inversores"),
  },
  {
    title: "Estruturas",
    slug: "estruturas",
    href: hrefCategory("estruturas"),
  },
] as const;
