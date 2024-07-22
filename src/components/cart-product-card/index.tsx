"use client";

import React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";

interface CartProductCardProps {
  data: ProductCartProps;
}

export const CartProductCard: React.FC<CartProductCardProps> = ({ data }) => {
  const cartStore = useCartStore();

  const handleAddProductToCart = () => {
    cartStore.addProduct(data);
  };

  const handleRemoveProduct = () => {
    cartStore.removeProduct(data.id);
  };

  const handleDeleteProduct = () => {
    cartStore.deleteProductFromCart(data.id);
  };

  return (
    <div className="flex p-4 relative">
      <Button
        className="absolute top-2 left-2 w-5 h-5 p-0 rounded-full"
        onClick={handleDeleteProduct}
      >
        <X size={12} />
      </Button>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          height={250}
          width={250}
          src="/assets/products/placeholder.webp"
          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="leading-5 text-sm line-clamp-2 font-semibold">
            {data.name}
          </h3>
          <p className="text-sm mt-1">{formatCurrency(data.price)}</p>
        </div>
        <div className="flex gap-1 items-center">
          <Button
            onClick={handleRemoveProduct}
            variant="ghost"
            className="size-6 p-0 flex justify-center items-center"
          >
            <MinusIcon className="size-4" />
          </Button>
          <span className="h-6 w-fit px-4 flex text-sm items-center justify-center rounded-md border border-border">
            {data.quantity?.toString()}
          </span>
          <Button
            onClick={handleAddProductToCart}
            variant="ghost"
            className="size-6 p-0 flex justify-center items-center"
          >
            <PlusIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
