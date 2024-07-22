import React from "react";

import { ProductList } from "@/interfaces";
import { ProductCard } from "@/components/product-card";
import { ProductListPagination } from "@/app/products/_components/product-list-pagination";

interface ProductGridProps {
  productList: ProductList;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ productList }) => {
  return (
    <div className="lg:col-span-3 xl:col-span-4 grid min-[425px]:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
      {productList.products.length === 0 ? (
        <div className="col-span-full">
          <p className="text-center text-muted-foreground">
            Nenhum produto encontrado
          </p>
        </div>
      ) : (
        <>
          {productList?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <div className="col-span-full">
            <ProductListPagination
              totalPages={productList.totalPages}
              currentPage={productList.currentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};
