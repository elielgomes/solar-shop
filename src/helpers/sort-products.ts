import { Product } from "@/interfaces";

/**
 * @function sortProducts
 * @description Sorts a list of products based on a sort parameter
 * @param {Product[]} products - The list of products to be sorted
 * @param {string} sort - The sort parameter
 * @returns {Product[]} - The sorted list of products
 */
export const sortProducts = (products: Product[], sort: string): Product[] => {
  switch (sort) {
    case "asc-price":
      return products.sort((a, b) => b.price - a.price);
    case "desc-price":
      return products.sort((a, b) => a.price - b.price);
    case "asc":
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case "desc":
      return products.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return products;
  }
};
