import { NextPage } from "next";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCardSkeleton } from "@/components/product-card/skeleton";

const Loading: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center mt-16 md:mt-28">
      <div className="container grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 py-12">
        <Breadcrumb className="col-span-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Skeleton className="h-5 w-10 rounded-md" />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Skeleton className="h-5 w-14 rounded-md" />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="col-span-full">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold">Produtos</h1>
            <div className="hidden md:flex items-center gap-4">
              <Skeleton className="h-9 w-32 rounded-md" />
            </div>
            <div className="md:hidden flex items-center gap-4">
              <Skeleton className="h-10 w-12 rounded-md" />
            </div>
          </div>
        </div>

        <hr className="col-span-full" />

        <Skeleton className="hidden lg:block h-56 rounded" />

        <div className="lg:col-span-3 xl:col-span-4 grid min-[425px]:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
