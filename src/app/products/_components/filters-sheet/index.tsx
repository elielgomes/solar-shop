import React from "react";
import { Filter } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CategoriesFilter } from "@/app/products/_components/categories-filter";
import { ProductSearchInput } from "@/components/product-search-input";

export const FiltersSheet: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="lg:hidden bg-card text-foreground shadow-md shadow-gray-600/5 border border-border rounded"
          variant="ghost"
        >
          <Filter className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtrar produtos</SheetTitle>
          <SheetDescription>Otimize sua busca por produtos.</SheetDescription>
        </SheetHeader>
        <div className="space-y-8 mt-8">
          <ProductSearchInput />
          <div>
            <p className="font-semibold text-sm mb-4">Categorias</p>
            <CategoriesFilter />
          </div>
        </div>
        <SheetFooter className="sm:justify-start mt-6">
          <SheetClose asChild>
            <Button type="button">Ver resultados</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
