export const queryKeys = {
  product: ["product"],
  categories: ["categories"],
  productById: (id: string) => ["product", id],
  productFilters: (queryParams: string) => ["products", queryParams],
} as const;
