"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/constants/nav-links";
import { routesMap } from "@/constants/routes-map";
import { CartSheet } from "@/components/cart-sheet";
import { categories } from "@/constants/categories";
import { ProductSearchInput } from "@/components/product-search-input";
import { MenuSheet } from "@/components/navbar/_components/menu-sheet";
import { UserAccountPopover } from "@/components/navbar/_components/user-account-popover";

export const Navbar: React.FC = () => {
  return (
    <header className="z-50 w-full fixed top-0 left-0 right-0 shadow-md shadow-gray-600/5">
      <div className="bg-card h-16">
        <div className="container h-full flex items-center justify-between">
          <div className="md:hidden w-16">
            <MenuSheet />
          </div>
          <div>
            <Link
              href={routesMap.home}
              className="text-2xl flex items-center gap-2 font-bold text-primary "
            >
              <svg
                className="size-8 text-orange-400"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11 4V2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm7.36 3.05 1.41-1.42a.996.996 0 1 0-1.41-1.41l-1.41 1.42a.996.996 0 1 0 1.41 1.41zM22 11h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-10 8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM5.64 7.05 4.22 5.64c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.41 1.41c.39.39.39 1.03 0 1.41s-1.02.39-1.4 0zm11.31 9.9a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm3.64 6.78 1.41-1.41c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.41 1.41a.996.996 0 0 0 0 1.41c.38.39 1.02.39 1.41 0zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path>
              </svg>
              Solar
            </Link>
          </div>

          <div className="flex gap-4 text-foreground items-center">
            <div className="hidden md:block">
              <ProductSearchInput withButton={false} />
            </div>
            <UserAccountPopover />
            <CartSheet />
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-foreground h-14">
        <div className="container flex h-full items-center justify-between">
          <div className="flex h-full items-center gap-12">
            <div className="h-full">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-start gap-2 p-4 font-semibold text-primary-foreground bg-primary border-none w-40 h-full rounded-none outline-none focus:ring-offset-0 focus:ring-0 transition-colors">
                  <Menu className="size-6" /> Categorias
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category.slug}
                      asChild
                      className="cursor-pointer"
                    >
                      <Link href={category.href}>{category.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <nav>
              <ul className="flex gap-8 text-sm text-white">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Link href={routesMap.login} className="text-white text-sm">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};
