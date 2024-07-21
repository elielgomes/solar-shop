export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  categoryId: string;
  description: string;
  category?: Category;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface ProductWithCategoryDetails extends Product {
  category: Category;
}

export interface ProductList {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  products: ProductWithCategoryDetails[];
}
