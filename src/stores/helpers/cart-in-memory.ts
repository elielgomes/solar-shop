import { Product } from "@/interfaces";
import { ProductCartProps } from "@/stores/cart-store";

export const addProduct = (
  products: ProductCartProps[],
  newProduct: Product,
  quantity = 1
) => {
  const productIndex = products.findIndex((item) => item.id === newProduct.id);
  if (productIndex === -1) {
    return [
      ...products,
      { ...newProduct, quantity: quantity } as ProductCartProps,
    ];
  }
  const newProducts = [...products];
  newProducts[productIndex].quantity += quantity;
  return newProducts;
};

export const removeProduct = (products: ProductCartProps[], id: string) => {
  const updatedProducts = products.map((product) =>
    product.id === id
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product
  );

  return updatedProducts.filter((product) => product.quantity > 0);
};

export const deleteProductFromCart = (
  products: ProductCartProps[],
  id: string
) => {
  return products.filter((product) => product.id !== id);
};
