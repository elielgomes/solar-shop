"use client";

import React from "react";
import Link from "next/link";
import { Menu, User } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { navLinks } from "@/constants/nav-links";
import { routesMap } from "@/constants/routes-map";
import { CartSheet } from "@/components/cart-sheet";
import { categories } from "@/constants/categories";
import { MenuSheet } from "@/components/navbar/_components/menu-sheet";
import { SearchSheet } from "@/components/navbar/_components/search-sheet";
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
              className="text-xl font-semibold text-primary uppercase"
            >
              So<span className="text-foreground">Lar</span>
            </Link>
          </div>

          <div className="flex gap-4 text-foreground">
            <div className="hidden md:block">
              <SearchSheet />
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
              <Select>
                <SelectTrigger className="font-semibold text-primary-foreground bg-primary border-none w-40 h-full rounded-none outline-none focus:ring-offset-0 focus:ring-0 transition-colors">
                  <Menu className="size-6" />
                  <SelectValue placeholder="Categorias" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
