export const queryKeys = {
  product: ["product"],
  categories: ["categories"],
  productById: (id: string) => ["product", id],
} as const;
