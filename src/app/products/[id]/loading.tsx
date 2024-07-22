import React from "react";

import {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  Breadcrumb,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";

const Loading: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center my-16 md:my-28">
      <div className="container h-full grid lg:grid-cols-2 gap-x-8 gap-y-12 mt-12">
        <div className="col-span-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Skeleton className="h-5 w-20 bg-gray-200" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="h-5 w-20 bg-gray-200" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="h-5 w-20 bg-gray-200" />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="min-h-[500px] lg:grid">
          <Skeleton className="relative w-full h-full bg-gray-200" />
        </div>
        <div>
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <Skeleton className="h-8 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-8 w-1/3 bg-gray-200" />

            <div className="mt-3">
              <Skeleton className="h-8 w-24 bg-gray-200" />
            </div>

            <div className="flex flex-col gap-2 mt-4 w-fit">
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-20 bg-gray-200" />
              </div>
            </div>

            <div className="mt-6 space-y-6 w-full">
              <Skeleton className="h-6 bg-gray-200 w-full" />
              <Skeleton className="h-6 bg-gray-200 w-full" />
              <Skeleton className="h-6 bg-gray-200 w-full" />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <Skeleton className="h-10 max-w-xs flex-1 py-3 px-8 flex gap-2 bg-gray-200"></Skeleton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Loading;
