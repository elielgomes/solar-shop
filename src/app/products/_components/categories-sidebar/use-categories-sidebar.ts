"use client";

import React, { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { category } from "@/services/category";

export const useCategoriesSidebar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [categoryParams, setCategoryParams] = useState<string[]>([]);

  const updateURLParams = (categories: string[]) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", categories.join(","));
    params.get("category")?.trim() === "" && params.delete("category");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const { data: categoryList } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: category.getAll,
    refetchOnWindowFocus: false,
  });

  const handleFilterCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedCategories = [...categoryParams];

    if (checked) {
      updatedCategories.push(value);
    } else {
      updatedCategories = updatedCategories.filter(
        (category) => category !== value
      );
    }

    setCategoryParams(updatedCategories);
    updateURLParams(updatedCategories);
  };

  const clearFilterCategory = () => {
    updateURLParams([]);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const categories = params.get("category")?.split(",") || [];
    setCategoryParams(categories);
  }, [searchParams]);

  return {
    categoryParams,
    categoryList,
    handleFilterCategory,
    clearFilterCategory,
  };
};
