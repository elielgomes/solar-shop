"use client";

import React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCartProps } from "@/stores/cart-store";
import { useProductCart } from "@/hooks/use-product-cart";
import { formatCurrency } from "@/helpers/format-currency";

interface CartProductCardProps {
  data: ProductCartProps;
}

export const CartProductCard: React.FC<CartProductCardProps> = ({ data }) => {
  const { handleAddProductToCart, handleRemoveProduct, handleDeleteProduct } =
    useProductCart(data);

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
          src={data.image || "/assets/products/placeholder.webp"}
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
            type="button"
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
            type="button"
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
