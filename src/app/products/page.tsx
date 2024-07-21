import { NextPage } from "next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { product } from "@/services/product";
import { ProductCard } from "@/components/product-card";
import { FiltersSheet } from "@/app/products/_components/filters-sheet";
import { CategoriesSidebar } from "@/app/products/_components/categories-sidebar";
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

  const productList = await product.getAll(queryParams);

  return (
    <main className="flex min-h-screen flex-col items-center mt-16 md:mt-28">
      <div className="container grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-10 py-12">
        <div className="col-span-full flex justify-between">
          <h1 className="text-2xl font-bold">Produtos</h1>
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="bg-card  h-full shadow-md shadow-gray-600/5 border border-border rounded outline-none focus:ring-offset-0 focus:ring-0 transition-colors gap-2">
                <span>Ordenar por</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc-price">Maior Preço</SelectItem>
                <SelectItem value="desc-price">Menor Preço</SelectItem>
                <SelectItem value="asc">De A-Z</SelectItem>
                <SelectItem value="desc">De Z-A</SelectItem>
              </SelectContent>
            </Select>

            <FiltersSheet />
          </div>
        </div>
        <hr className="col-span-full" />
        <CategoriesSidebar />
        <div className="lg:col-span-3 xl:col-span-4 grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
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
