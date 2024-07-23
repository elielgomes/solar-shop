"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";
import { useCartStore } from "@/stores/cart-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helpers/format-currency";
import { CartProductCard } from "@/components/cart-product-card";

export const CartSheet: React.FC = () => {
  const cartStore = useCartStore();

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  );

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <div className="relative">
          <ShoppingBag size={24} />
          <div className="absolute rounded-full bg-primary h-5 min-w-5 -translate-x-2 px-1 left-full -bottom-1.5 flex items-center justify-center text-primary-foreground text-[9px] font-semibold">
            {cartStore.products.length}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        className="p-0 h-screen flex flex-col gap-0"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="p-6 pb-4 border-b border-border">
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <ScrollArea className="px-2 flex-1 mb-[200px]">
          <div className="mt-4 flex flex-col divide-y divide-border">
            {cartStore.products.length > 0 ? (
              cartStore.products.map((product) => (
                <CartProductCard key={product.id} data={product} />
              ))
            ) : (
              <div className="flex py-6 sm:py-10">
                <div className="flex-1">
                  <p className="text-center text-lg text-gray-500">
                    Seu carrinho está vazio.
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t border-border py-6 px-4 sm:px-6 absolute left-0 right-0 bottom-0 bg-card">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>{total}</p>
          </div>
          <div className="mt-6">
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link href={routesMap.cart}>Finalizar Compra</Link>
              </Button>
            </SheetClose>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              ou{" "}
              <SheetClose asChild>
                <Link
                  href={routesMap.products}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue comprando<span aria-hidden="true"> &rarr;</span>
                </Link>
              </SheetClose>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
