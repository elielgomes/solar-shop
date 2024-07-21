import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { routesMap } from "@/constants/routes-map";
import { currencyFormat } from "@/helpers/currency-format";
import { type ProductWithCategoryDetails } from "@/interfaces";

interface ProductCardProps {
  product: ProductWithCategoryDetails;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`${routesMap.products}/${product.id}`}>
      <div className="h-96 bg-card rounded overflow-hidden shadow-md shadow-gray-600/5">
        <div className="w-full relative h-2/3">
          <Image
            src={product.image}
            className="object-cover object-center w-full h-full"
            fill
            alt="Product Image"
          />
          <Badge className="text-xs mb-2 absolute top-0 right-0 rounded-none rounded-es">
            {product.category.name}
          </Badge>
        </div>
        <div className="px-6 py-4 h-1/3 relative">
          <h3 className="text-base font-semibold line-clamp-2 ">
            {product.name}
          </h3>
          <p className="text-sm absolute bottom-4 left-6 font-semibold text-muted-foreground">
            {currencyFormat(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
};
