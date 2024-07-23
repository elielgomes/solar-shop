import { Product, Category, ProductWithCategoryDetails } from "@/interfaces";

/**
 * @function enrichProductWithCategory
 * @description Enriches a product with its category details
 * @param {Product} product - The product to be enriched
 * @param {Category[]} categories - The list of categories
 * @returns {Product} - The product with category details
 */
export const enrichProductWithCategory = (
  product: Product,
  categories: Category[]
): ProductWithCategoryDetails => {
  const productCategory = categories.find(
    (category) => category.id === product.categoryId
  ) as Category;
  return { ...product, category: { ...productCategory } };
};
