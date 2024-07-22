import { NextPage } from "next";
import { Search } from "lucide-react";

import { product } from "@/services/product";
import { ProductCard } from "@/components/product-card";
import { FiltersSheet } from "@/app/products/_components/filters-sheet";
import { CategoriesSidebar } from "@/app/products/_components/categories-sidebar";
import { SelectSortProducts } from "@/app/products/_components/select-sort-products";
import { CleanFiltersButton } from "@/app/products/_components/clean-filters-button";
import { ProductListPagination } from "@/app/products/_components/product-list-pagination";

interface ProductsPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ProductsPage: NextPage<ProductsPageProps> = async ({ searchParams }) => {
  let queryParams = "";
  if (searchParams) {
    const paramsEntries = Object.entries(searchParams);
    queryParams = paramsEntries.reduce((acc, [key, value], index) => {
      if (value !== undefined && value !== "") {
        const prefix = index === 0 ? "?" : "&";
        return `${acc}${prefix}${key}=${value}`;
      }
      return acc;
    }, "");
  }

  const hasSearchParams = () => {
    const paramsEntries = searchParams && Object.entries(searchParams);
    return (
      paramsEntries && paramsEntries.some(([, value]) => value !== undefined)
    );
  };

  const productList = await product.getAll(queryParams);

  return (
    <main className="flex min-h-screen flex-col items-center mt-16 md:mt-28">
      <div className="container grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 py-12">
        <div className="col-span-full">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold">Produtos</h1>
            <div className="hidden md:flex items-center gap-4">
              {hasSearchParams() && <CleanFiltersButton />}
              <SelectSortProducts />
            </div>
            <div className="md:hidden flex items-center gap-4">
              {hasSearchParams() && <CleanFiltersButton />}
              <FiltersSheet />
            </div>
          </div>

          {searchParams?.search && (
            <div className="flex flex-col gap-1 col-span-full mt-4">
              <p className="font-bold flex items-center gap-2">
                Resultados para:
              </p>
              <p className="font-semibold text-muted-foreground flex gap-2 items-center">
                <Search className="size-4" />
                {searchParams.search}
              </p>
            </div>
          )}
        </div>

        <hr className="col-span-full" />
        <CategoriesSidebar />
        <div className="lg:col-span-3 xl:col-span-4 grid min-[425px]:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
          {productList?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          <div className="col-span-full">
            <ProductListPagination
              totalPages={productList.totalPages}
              currentPage={productList.currentPage}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
