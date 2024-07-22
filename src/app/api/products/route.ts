import { NextRequest, NextResponse } from "next/server";
import type {
  Category,
  Product,
  ProductWithCategoryDetails,
} from "@/interfaces";
import { api } from "@/lib/axios/api";
import { normalizeString } from "@/helpers/normalize-string";

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

  let pageQuery = parseInt(searchParams.get("page") || "1", 10);
  pageQuery = pageQuery > 0 ? pageQuery : 1;

  const sortQuery = searchParams.get("sort") || "asc";
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const limitQuery = parseInt(searchParams.get("limit") || "12", 10);

  try {
    const categoriesResponse = await api.get<Category[]>("/categories.json");
    const productsResponse = await api.get<Product[]>("/products.json");

    let filteredProducts = productsResponse.data;

    if (searchQuery) {
      const normalizedSearchQuery = normalizeString(searchQuery);
      filteredProducts = filteredProducts.filter((product) =>
        normalizeString(product.name).includes(normalizedSearchQuery)
      );
    }

    if (categoryQuery) {
      const categories = categoryQuery.toLowerCase().split(",");

      const allCategoriesExist = categories.every((category) =>
        categoriesResponse.data.some(
          (cat) => cat.slug.toLowerCase() === category
        )
      );

      if (!allCategoriesExist) {
        return NextResponse.json(
          { message: "Uma ou mais categorias não encontradas" },
          { status: 404 }
        );
      }

      filteredProducts = filteredProducts.filter((product) =>
        categories.some((category) =>
          categoriesResponse.data.some(
            (cat) =>
              cat.slug.toLowerCase() === category &&
              product.categoryId === cat.id
          )
        )
      );
    }

    const currentPage = pageQuery;
    const itemsPerPage =
      !isNaN(limitQuery) && limitQuery > 0 && limitQuery < 12 ? limitQuery : 12;

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
