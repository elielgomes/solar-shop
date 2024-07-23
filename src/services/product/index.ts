import { api } from "@/lib/axios/api";
import { ProductList, Product } from "@/interfaces";

export const product = {
  getAll: async (queryParams = "") => {
    const response = await api.get<ProductList>(`/api/products${queryParams}`);
    return response.data;
  },

  getOne: async (id: string) => {
    const response = await api.get<Product>(`/api/products/${id}`);
    return response.data;
  },
};
