"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

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
import { routesMap } from "@/constants/routes-map";
import { ProductSearchInput } from "@/components/product-search-input";

export const SearchSheet: React.FC = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Search size={24} />
      </SheetTrigger>
      <SheetContent className="border-0">
        <SheetHeader>
          <SheetTitle>Busque por um produto</SheetTitle>
          <SheetDescription>
            Digite o nome do produto que deseja encontrar.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          <ProductSearchInput />
        </div>
        <SheetFooter className="bottom-0 absolute right-0 left-0 sm:justify-start border-t border-border">
          <SheetClose
            asChild
            className="flex gap-2 items-center py-4 px-6 h-full w-full"
          >
            <Link href={routesMap.products}>
              Ver todos
              <ArrowRight className="size-4" />
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
