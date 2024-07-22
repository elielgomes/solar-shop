import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/interfaces";
import * as cartInMemory from "@/stores/helpers/cart-in-memory";

export interface ProductCartProps extends Product {
  quantity: number;
}

interface StateProps {
  products: ProductCartProps[];
  addProduct: (product: Product, quantity?: number) => void;
  removeProduct: (id: string) => void;
  deleteProductFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],
      addProduct: (product, quantity) => {
        set((state) => ({
          products: cartInMemory.addProduct(state.products, product, quantity),
        }));
      },
      removeProduct: (id) => {
        set((state) => ({
          products: cartInMemory.removeProduct(state.products, id),
        }));
      },
      deleteProductFromCart: (id) => {
        set((state) => ({
          products: cartInMemory.deleteProductFromCart(state.products, id),
        }));
      },
      clearCart: () => {
        set(() => ({ products: [] }));
      },
    }),
    {
      name: "solar:cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
