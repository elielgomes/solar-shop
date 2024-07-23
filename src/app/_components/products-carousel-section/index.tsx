"use client";

import React from "react";
import { product } from "@/services/product";
import { queryKeys } from "@/constants/query-keys";
import { hrefCategory } from "@/constants/categories";
import { useQueries } from "@tanstack/react-query";
import { ProductCarousel } from "@/components/product-carousel";
import { ProductCarouselSkeleton } from "@/components/product-carousel/skeleton";

export const ProductsCarouselSection: React.FC = () => {
  const categories = ["estruturas", "inversores"];

  const productCategories = useQueries({
    queries: categories.map((category) => {
      return {
        queryKey: queryKeys.productFilters(`?category=${category}&limit=6`),
        queryFn: () => product.getAll(`?category=${category}&limit=6`),
      };
    }),
  });

  return productCategories.map((category, index) => (
    <div key={index} className="text-xl font-bold">
      {category.data && !category.isLoading ? (
        <ProductCarousel
          data={category.data}
          title={categories[index]}
          linkSeeAll={hrefCategory(categories[index])}
        />
      ) : (
        <ProductCarouselSkeleton />
      )}
    </div>
  ));
};
