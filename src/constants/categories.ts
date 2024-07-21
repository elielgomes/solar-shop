import { routesMap } from "@/constants/routes-map";

const hrefCategory = (slug: string) => `${routesMap.products}?category=${slug}`;

export const categories = [
  {
    title: "Paineis",
    slug: "paineis",
    href: hrefCategory("paineis"),
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
  {
    title: "Cabos",
    slug: "cabos",
    href: hrefCategory("cabos"),
  },
  {
    title: "Conectores",
    slug: "conectores",
    href: hrefCategory("conectores"),
  },
  {
    title: "Fusíveis",
    slug: "fusiveis",
    href: hrefCategory("fusiveis"),
  },
  {
    title: "String Box",
    slug: "string-box",
    href: hrefCategory("string-box"),
  },
  {
    title: "Transformadores",
    slug: "transformadores",
    href: hrefCategory("transformadores"),
  },
] as const;
