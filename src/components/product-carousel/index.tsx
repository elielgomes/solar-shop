"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductList } from "@/interfaces";
import { ProductCard } from "@/components/product-card";

interface ProductCarouselProps {
  data: ProductList;
  title?: string;
  linkSeeAll: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  data,
  title,
  linkSeeAll,
}) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <Link
          href={linkSeeAll}
          className="text-sm flex items-center gap-2 text-primary"
        >
          Ver todos
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {data.products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
