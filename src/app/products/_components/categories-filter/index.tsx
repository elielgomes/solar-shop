"use client";

import React from "react";

import { useCategoriesFilter } from "@/app/products/_components/categories-filter/use-categories-filter";

interface CategoriesFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CategoriesFilter: React.FC<CategoriesFilterProps> = () => {
  const {
    categoryList,
    categoryParams,
    handleFilterCategory,
    clearFilterCategory,
  } = useCategoriesFilter();

  return (
    <div className="space-y-3">
      <label className="text-sm text-gray-600 flex items-center gap-3 select-none cursor-pointer">
        <input
          onChange={clearFilterCategory}
          name="todas"
          value="todas"
          type="checkbox"
          checked={categoryParams.length === 0}
          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
        />
        Todas
      </label>
      {categoryList?.map((category) => (
        <label
          key={category.slug}
          className="text-sm text-gray-600 flex items-center gap-3 select-none cursor-pointer"
        >
          <input
            onChange={handleFilterCategory}
            name={category.slug}
            value={category.slug}
            type="checkbox"
            checked={categoryParams.includes(category.slug)}
            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
          />
          {category.name}
        </label>
      ))}
    </div>
  );
};
