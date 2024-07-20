import { Category } from "@/interfaces";
import { api } from "@/lib/axios/api";

export const category = {
  getAll: async () => {
    const response = await api.get<Category[]>("/api/categories");
    return response.data;
  },
};
