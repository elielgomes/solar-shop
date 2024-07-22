import { NextPage } from "next";
import { Search } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { product } from "@/services/product";
import { routesMap } from "@/constants/routes-map";
import { reduceSearchParams } from "@/helpers/reduce-search-params";
import { ProductGrid } from "@/app/products/_components/product-grid";
import { ProductSearchInput } from "@/components/product-search-input";
import { FiltersSheet } from "@/app/products/_components/filters-sheet";
import { CategoriesSidebar } from "@/app/products/_components/categories-sidebar";
import { SelectSortProducts } from "@/app/products/_components/select-sort-products";
import { CleanFiltersButton } from "@/app/products/_components/clean-filters-button";

interface ProductsPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ProductsPage: NextPage<ProductsPageProps> = async ({ searchParams }) => {
  let queryParams = searchParams ? reduceSearchParams(searchParams) : "";

  const hasSearchParams = () => {
    return (
      searchParams &&
      Object.entries(queryParams).some(([, value]) => value !== undefined)
    );
  };

  const productList = await product.getAll(queryParams);

  return (
    <main className="flex min-h-screen flex-col items-center mt-16 md:mt-28">
      <div className="container grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 py-12">
        <Breadcrumb className="col-span-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={routesMap.home}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Produtos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="col-span-full">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold">Produtos</h1>
            <div className="hidden md:flex items-center gap-4">
              {hasSearchParams() && <CleanFiltersButton />}
              <ProductSearchInput withButton={false} />
              <div>
                <SelectSortProducts />
              </div>
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
        <ProductGrid productList={productList} />
      </div>
    </main>
  );
};

export default ProductsPage;
