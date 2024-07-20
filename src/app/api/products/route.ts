import { NextRequest, NextResponse } from "next/server";
import type {
  Category,
  Product,
  ProductWithCategoryDetails,
} from "@/interfaces";
import { api } from "@/lib/axios/api";

/**
 * @function enrichProductWithCategory
 * @description Enriches a product with its category details
 * @param {Product} product - The product to be enriched
 * @param {Category[]} categories - The list of categories
 * @returns {Product} - The product with category details
 */
const enrichProductWithCategory = (
  product: Product,
  categories: Category[]
): ProductWithCategoryDetails => {
  const productCategory = categories.find(
    (category) => category.id === product.categoryId
  ) as Category;
  return { ...product, category: { ...productCategory } };
};

/**
 * @function sortProducts
 * @description Sorts a list of products based on a sort parameter
 * @param {Product[]} products - The list of products to be sorted
 * @param {string} sort - The sort parameter
 * @returns {Product[]} - The sorted list of products
 */
const sortProducts = (products: Product[], sort: string): Product[] => {
  switch (sort) {
    case "asc-price":
      return products.sort((a, b) => a.price - b.price);
    case "desc-price":
      return products.sort((a, b) => b.price - a.price);
    case "asc":
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case "desc":
      return products.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return products;
  }
};

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const pageQuery = searchParams.get("page") || 1;
  const sortQuery = searchParams.get("sort") || "asc";
  const categoryQuery = searchParams.get("category");

  try {
    const categoriesResponse = await api.get<Category[]>("/categories.json");
    const productsResponse = await api.get<Product[]>("/products.json");

    let filteredProducts = productsResponse.data;

    if (categoryQuery) {
      const category = categoriesResponse.data.find(
        (cat) => cat.slug.toLowerCase() === categoryQuery.toLowerCase()
      );

      if (!category) {
        return NextResponse.json(
          { message: "Categoria não encontrada" },
          { status: 404 }
        );
      }

      filteredProducts = filteredProducts.filter(
        (product) => product.categoryId === category.id
      );
    }

    const currentPage = parseInt(pageQuery as string, 10);
    const itemsPerPage = 10;

    filteredProducts = sortProducts(filteredProducts, sortQuery);

    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const productsWithCategoryDetails = paginatedProducts.map((product) =>
      enrichProductWithCategory(product, categoriesResponse.data)
    );

    return Response.json({
      currentPage,
      totalItems,
      totalPages,
      products: productsWithCategoryDetails,
    });
  } catch (error) {
    return Response.json(
      { message: "Error interno do servidor" },
      {
        status: 500,
      }
    );
  }
};
