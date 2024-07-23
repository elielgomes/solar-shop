import { routesMap } from "@/constants/routes-map";

const hrefCategory = (slug: string) => `${routesMap.products}?category=${slug}`;

export const categories = [
  {
    title: "Inversores",
    slug: "inversores",
    href: hrefCategory("inversores"),
  },
  {
    title: "Módulos",
    slug: "modulos",
    href: hrefCategory("modulos"),
  },
  {
    title: "Estruturas",
    slug: "estruturas",
    href: hrefCategory("estruturas"),
  },
  {
    title: "Elétricos",
    slug: "eletricos",
    href: hrefCategory("eletricos"),
  },
] as const;
