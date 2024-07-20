import { routesMap } from "@/constants/routes-map";

export const navLinks = [
  {
    title: "Home",
    href: routesMap.home,
  },
  {
    title: "Produtos",
    href: routesMap.products,
  },
  {
    title: "Sobre",
    href: routesMap.about,
  },
  {
    title: "Contato",
    href: routesMap.contact,
  },
] as const;
