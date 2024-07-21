"use client";

import React from "react";

import { CategoriesFilter } from "@/app/products/_components/categories-filter";

export const CategoriesSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block bg-white p-6 h-fit sticky top-32 shadow-md shadow-gray-600/5 border border-border rounded">
      <h3 className="block text-sm font-medium text-gray-900 mb-4">
        Categorias
      </h3>
      <CategoriesFilter />
    </aside>
  );
};
