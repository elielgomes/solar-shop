"use client";

import React, { Suspense } from "react";

import { CategoriesFilter } from "@/app/products/_components/categories-filter";
import { CategoriesFilterSkeleton } from "@/app/products/_components/categories-filter/skeleton";

export const CategoriesSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block bg-white p-6 h-fit sticky top-32 shadow-md shadow-gray-600/5 border border-border rounded">
      <h3 className="block text-sm font-medium text-gray-900 mb-4">
        Categorias
      </h3>
      <Suspense fallback={<CategoriesFilterSkeleton />}>
        <CategoriesFilter />
      </Suspense>
    </aside>
  );
};
