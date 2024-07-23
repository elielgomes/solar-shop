"use client";

import Link from "next/link";
import { Filter, FilterX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { routesMap } from "@/constants/routes-map";
import React, { Suspense, useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductSearchInput } from "@/components/product-search-input";
import { CategoriesFilter } from "@/app/products/_components/categories-filter";
import { SelectSortProducts } from "@/app/products/_components/select-sort-products";

export const FiltersSheet: React.FC = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const hasFilters =
    searchParams.get("search") ||
    searchParams.get("category") ||
    searchParams.get("sort");

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <Button
          className="lg:hidden bg-card text-foreground shadow-md shadow-gray-600/5 border border-border rounded"
          variant="ghost"
        >
          <Filter className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full p-0">
        <ScrollArea className="h-screen p-6">
          <SheetHeader>
            <SheetTitle>Filtrar produtos</SheetTitle>
            <SheetDescription>Otimize sua busca por produtos.</SheetDescription>
          </SheetHeader>
          <div className="space-y-8 mt-8">
            <Suspense>
              <ProductSearchInput />
            </Suspense>
            {hasFilters && (
              <div>
                <Link
                  href={routesMap.products}
                  className="flex items-center gap-2 font-semibold text-sm mb-4 text-destructive bg-destructive/5 p-2 rounded"
                >
                  <FilterX className="size-4" />
                  Limpar fitros
                </Link>
              </div>
            )}
            <div>
              <p className="font-semibold text-sm mb-4">Ordenar</p>
              <Suspense>
								<SelectSortProducts />
							</Suspense>
            </div>
            <div>
              <p className="font-semibold text-sm mb-4">Categorias</p>
              <Suspense>
                <CategoriesFilter />
              </Suspense>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
