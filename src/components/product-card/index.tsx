import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { routesMap } from "@/constants/routes-map";
import { formatCurrency } from "@/helpers/format-currency";
import { type ProductWithCategoryDetails } from "@/interfaces";

interface ProductCardProps {
  product: ProductWithCategoryDetails;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`${routesMap.products}/${product.id}`}>
      <div className="h-96 rounded overflow-hidden border border-border group">
        <div className="w-full relative h-2/3 px-4 pt-4 bg-blue-50">
          <Image
            src={product.image}
            className="object-contain object-center h-full w-full group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
            height={250}
            width={350}
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
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
};
