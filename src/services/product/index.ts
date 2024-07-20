import { api } from "@/lib/axios/api";
import { ProductList } from "@/interfaces";

export const product = {
  getAll: async (queryParams?: string) => {
    const response = await api.get<ProductList>(`/api/products${queryParams}`);
    return response.data;
  },
};
