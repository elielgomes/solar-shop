import React from "react";
import Link from "next/link";
import { AlignLeft } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/nav-links";
import { routesMap } from "@/constants/routes-map";
import { categories } from "@/constants/categories";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductSearchInput } from "@/components/product-search-input";

export const MenuSheet: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <AlignLeft />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Tabs defaultValue="menu" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="menu"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Menu
            </TabsTrigger>
            <TabsTrigger
              value="categories"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Categorias
            </TabsTrigger>
          </TabsList>
          <TabsContent value="menu">
            <div className="mt-4">
              <ProductSearchInput />
            </div>
            <ul className="grid gap-2 py-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.title}>
                  <li className="text-sm cursor-pointer w-full flex hover:text-primary py-2 px-4 transition-colors rounded-md hover:bg-muted/40">
                    <Link href={link.href} className="h-full w-full">
                      {link.title}
                    </Link>
                  </li>
                </SheetClose>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="categories">
            <ul className="grid gap-2 py-4">
              {categories.map((category) => (
                <SheetClose asChild key={category.title}>
                  <li className="text-sm cursor-pointer w-full flex hover:text-primary py-2 px-4 transition-colors rounded-md hover:bg-muted/40">
                    <Link href={category.href} className="h-full w-full">
                      {category.title}
                    </Link>
                  </li>
                </SheetClose>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
