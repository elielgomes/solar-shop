import React from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchSheet: React.FC = () => {
  return (
    <Sheet>
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
        <div className="relative mt-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <Input
            type="search"
            id="default-search"
            className="block w-full ps-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Busque por produtos..."
            required
          />
          <Button
            type="submit"
            className="text-white absolute bottom-0.5 top-0.5 text-xs h-auto end-0.5"
          >
            Buscar
          </Button>
        </div>
        <SheetFooter className="bottom-0 absolute right-0 left-0 sm:justify-start border-t border-border">
          <SheetClose
            asChild
            className="flex gap-2 items-center py-4 px-6 h-full w-full"
          >
            <Link href="#">
              Ver todos
              <ArrowRight className="size-4" />
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
